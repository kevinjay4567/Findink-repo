import { Router } from 'express';
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from '../controllers/customerController.js';

const router = Router();

router.get('/', getCustomers);
router.post('/', createCustomer);
/* router.get('/update/:id', editCustomer); */
router.put('/update/:id', updateCustomer);
router.delete('/delete/:id', deleteCustomer);
export default router;
