import mongoose, { Schema, Document } from 'mongoose';
import { IUser as IUserType } from '../types/user.types';

export interface IUser extends IUserType, Document {}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);
