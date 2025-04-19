import { NextFunction, Request, Response } from 'express';
import User from '../models/user.model';
import { CustomError } from '../utils/customError'; // Optional if using CustomError helper

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, age } = req.body;

    const user = new User({ name, email, age });
    const savedUser = await user.save();

    res.status(201).json({ success: true, data: savedUser });
  } catch (error: any) {
    if (error.code === 11000) {
      return next(new CustomError('Email already exists', 400));
    }

    // General server error
    next(new CustomError(error.message || 'Server Error', 500));
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


export const getUserById = async (req: Request, res: Response) => {
    try {
      const user = await User.findById(req.params.id);
  
      if (!user) {
        throw new CustomError('User not found', 404);
      }
  
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      throw error;
    }
  };
