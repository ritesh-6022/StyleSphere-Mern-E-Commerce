import express from 'express';
import authUser from '../middleware/auth.js';

const profileRrouter = express.Router();

router.get('/profile', authUser, (req, res) => {
  res.json({ success: true, user: req.user });
});


export default profileRrouter;
