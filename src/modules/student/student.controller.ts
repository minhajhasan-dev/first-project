import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import { studentSchema } from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using zod

    const { student: studentData } = req.body;

    // data validation using zod

    const zodPersedData = studentSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodPersedData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All students fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log('Error in getAllStudents controller', error);
  }
};
const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single student fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log('Error in getAllStudents controller', error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
