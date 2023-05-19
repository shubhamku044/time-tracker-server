import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const getProject = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    msg: 'Get one project'
  });
};

const getAllProjects = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    msg: 'Get all projects'
  });
};

const addProject = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    msg: 'Adding project'
  });
};

const deleteProject = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    msg: 'Deleting project'
  });
};

export { getProject, getAllProjects, addProject, deleteProject };
