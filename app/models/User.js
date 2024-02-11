import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    // include other fields as necessary
  },
  { timestamps: true }
);

// Check if the model already exists to prevent recompilation error
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
