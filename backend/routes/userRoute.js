import express from 'express';
import {
  loginUser,
  registerUser,
  adminLogin,
} from '../controllers/userController.js';
import authUser from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

// ✅ GET: fetch profile
userRouter.get('/profile', authUser, (req, res) => {
  res.json({ success: true, user: req.user });
});

// ✅ PUT: update profile
userRouter.put('/profile', authUser, async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name && !email) {
      return res.status(400).json({ success: false, message: 'No update fields provided' });
    }

    const user = req.user;

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default userRouter;
