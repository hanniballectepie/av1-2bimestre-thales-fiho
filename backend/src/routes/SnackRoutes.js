import express from 'express';
import SnackController from '../controllers/SnackController.js';

const router = express.Router();

// Rotas de snacks
router.get('/snacks', SnackController.getAllSnacks);
router.get('/snacks/:id', SnackController.getSnackById);
router.post('/snacks', SnackController.createSnack);
router.put('/snacks/:id', SnackController.updateSnack);
router.delete('/snacks/:id', SnackController.deleteSnack);
router.get('/snacks/category/:categoria', SnackController.getSnacksByCategory);
router.get('/snacks/search/:nome', SnackController.searchSnacks);

export default router;
