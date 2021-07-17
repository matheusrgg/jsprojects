import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Matheus",
    duration: 100,
    educator: "tenis"
  });

  return response.send();

}