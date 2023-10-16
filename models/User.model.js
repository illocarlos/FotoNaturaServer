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
    name: {
      type: String,
      required: [true, 'name i required'],
      minlength: [3, 'Username must be 2 characters length'],
      maxlength: [20, 'Username must be 10 characters length']
    },
    lastName: {
      type: String,
      minlength: [3, 'Username must be 2 characters length'],
      required: [true, 'name i required']
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    photo: [{
      type: Schema.Types.ObjectId,
      ref: 'Photo'
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
  const { _id, name, lastName, email, role } = this
  const payload = { _id, name, lastName, email, role }

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
