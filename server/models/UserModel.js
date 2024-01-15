import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  gender: {
    type: String,
  },
  firstname: {
    type: String,
    min: 2,
    max: 50,
    required: true,
  },
  lastname: {
    type: String,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    max: 50,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    min: 4,
    required: true,
  },
  phone: {
    type: String,
  },
  birthdate: {
    type: Date,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  photo: {
    type: String,
  },
  Category: {
    type: String,
  },
  isAdmin: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
