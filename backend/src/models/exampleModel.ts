import mongoose, { Schema, Document } from 'mongoose';

export interface ExampleData {
  name: string;
  description: string;
}

export interface ExampleDocument extends ExampleData, Document {
  createdAt: Date;
  updatedAt: Date;
}

const exampleSchema: Schema = new mongoose.Schema<ExampleDocument>({
  name: { type: String, required: [true, 'Name is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

exampleSchema.pre<ExampleDocument>('save', function (next) {
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

const ExampleModel = mongoose.model<ExampleDocument>('Example', exampleSchema);

export default ExampleModel;
