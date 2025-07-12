import express from 'express';
import { getAllUsers, banUser, getReports, sendAnnouncement } from '../controllers/adminController';

const router = express.Router();

router.get('/users', getAllUsers);
router.put('/users/:id/ban', banUser);
router.get('/reports', getReports);
router.post('/announcements', sendAnnouncement);

export default router; 