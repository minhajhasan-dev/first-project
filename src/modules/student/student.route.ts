import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// will call controller function
router.post('/create-student', StudentController.createStudent);

// exporting router for use in app.ts
export const StudentRoutes = router;
