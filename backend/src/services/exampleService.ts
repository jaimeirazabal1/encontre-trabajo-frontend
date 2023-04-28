import ExampleModel, { ExampleData } from '../models/exampleModel';

class ExampleService {
  public static async getExamples(): Promise<ExampleData[]> {
    try {
      const examples = await ExampleModel.find();
      return examples;
    } catch (error) {
      throw new Error(error);
    }
  }

  public static async createExample(example: ExampleData): Promise<ExampleData> {
    try {
      const createdExample = await ExampleModel.create(example);
      return createdExample;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default ExampleService;
