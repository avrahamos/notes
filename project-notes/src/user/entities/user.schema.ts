import { Schema, model, Document } from 'mongoose';
import { IUser } from './user.interface';

export const UserSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);
