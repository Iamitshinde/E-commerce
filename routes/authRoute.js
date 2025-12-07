import express from 'express';
import { 
  forgotpasswordController, 
  getAllOrdersController, 
  getOrdersController, 
  loginController, 
  orderStatusController, 
  registerController, 
  testcontroller, 
  updateProfileController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//routes object
const router = express.Router();

//routing
//Register || METHOD POST
router.post('/register',registerController);

//Login || METHOD POST
router.post('/login',loginController);

//forgot password || METHOD POST
router.post('/forgot-password',forgotpasswordController); 

//test route
router.get('/test',requireSignIn ,isAdmin ,testcontroller)

//protect route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.status(200).send({ok:true});
});

//protect route admin
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.status(200).send({ok:true});
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;