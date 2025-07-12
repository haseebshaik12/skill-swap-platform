import express from 'express';
import { getSkills, addSkill, removeSkill } from '../controllers/skillController';

const router = express.Router();

router.get('/', getSkills);
router.post('/', addSkill);
router.delete('/:id', removeSkill);

export default router; 