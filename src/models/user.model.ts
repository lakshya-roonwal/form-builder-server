import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: String,
    profileImage: String,
  },
  { timestamps: true }
);

const User = models.User || model('User', userSchema);
export default User;