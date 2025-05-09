import { Router } from 'express';
import AuthController from '../controllers/auth.Controller';
import CaptchaController from '../controllers/captcha.Controller';
import categoryController from '../controllers/category.Controller';
import productController from '../controllers/produc.Controller';
import orderController from '../controllers/order.Controller';
import productIntro from '../controllers/productIntro.Controller';

const router = Router();
router.get('/generate', CaptchaController.generate);
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
// Thêm dòng này
router.get('/categroy', categoryController.getAll); 
router.get('/products', productController.getAll) ; 
router.post('/order', orderController.createOrder);
router.get('/orders', orderController.getOrders);
router.get('/productIntro', productIntro.getAll);
export default router;