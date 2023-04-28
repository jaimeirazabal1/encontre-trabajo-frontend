import { Request, Response } from 'express';
import ExampleService from '../services/exampleService';
import { ExampleData } from '../models/exampleModel';

class ExampleController {
  public static async getExample(req: Request, res: Response): Promise<void> {
    try {
      const examples = await ExampleService.getExamples();
      res.status(200).json({ examples });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  public static async createExample(req: Request, res: Response): Promise<void> {
    try {
      const example: ExampleData = req.body;
      const createdExample = await ExampleService.createExample(example);
      res.status(201).json({ example: createdExample });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ExampleController;
