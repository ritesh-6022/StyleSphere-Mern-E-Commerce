import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} },
  profileImage: { type: String, default: "" } // Optional: for profile picture support
}, { 
  minimize: false, 
  timestamps: true // Adds createdAt & updatedAt fields
});

// Prevent overwrite in development hot reload
const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;
