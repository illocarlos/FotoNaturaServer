const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    avatar: {
      type: String,
      required: [true, 'photo is required.'],
    },
    name: {
      type: String,
      required: [true, 'name is required'],
      minlength: [3, 'name must be 2 characters length'],
      maxlength: [20, 'name must be 10 characters length']
    },
    lastName: {
      type: String,
      minlength: [3, 'lastName must be 2 characters length'],
      required: [true, 'lastName is required']
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      minlength: [3, 'Min 3 character'],
    },
    photos: [{
      type: Schema.Types.ObjectId,
      ref: 'photo'
    }],
    role: {
      type: String,
      enum: ['USER', 'ADMIN', 'AUX'],
      default: 'USER'
    }
  },
  {
    timestamps: true
  }

);

userSchema.pre('save', function (next) {
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword
  next()
})

userSchema.methods.signToken = function () {
  const { _id, avatar, name, lastName, email, role } = this
  const payload = { _id, avatar, name, lastName, email, role }

  const authToken = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: "6h" }
  )
  return authToken
}
userSchema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}

const User = model("User", userSchema);

module.exports = User;
