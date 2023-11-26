import express from 'express';
import { signup,signin } from '../controllers/auth.controller.js';
import {google} from '../controllers/auth.controller.js'
const router = express.Router();

router.post('/signup',signup);
router.post('/signin',signin);

app.get('/auth/example',
  passport.authenticate('oauth2'));

app.get('/auth/example/callback',
  passport.authenticate('oauth2', { failureRedirect: '/login' }),
  function(req, res) {
    
    res.redirect('/');
  });
export default router;