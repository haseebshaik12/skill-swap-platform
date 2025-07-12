import express from 'express';
import { getSwaps, createSwap, updateSwap, deleteSwap } from '../controllers/swapController';

const router = express.Router();

router.get('/', getSwaps);
router.post('/', createSwap);
router.put('/:id', updateSwap);
router.delete('/:id', deleteSwap);

export default router; 