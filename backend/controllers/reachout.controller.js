import { BadRequestError } from '../errors/index.js';
import { NotFoundError } from '../errors/index.js';
import Reachout from '../models/reachout.model.js';

// createReachout 
export const createReachout = async (req, res, next) => {
  try {
    const reachout = await Reachout.create(req.body);
    res.status(201).json(reachout);
  } catch (error) {
    if (error instanceof BadRequestError) {
      next(new BadRequestError(error.message));
    } else {
      next(new NotFoundError(error.message));
    }
  }
};

// getReachout

export const getReachout = async (req, res, next) => {
  try {
    const reachout = await Reachout.find();
    res.status(200).json(reachout);
  } catch (error) {
    if (error instanceof BadRequestError) {
      next(new BadRequestError(error.message));
    } else {
      next(new NotFoundError(error.message));
    }
  }
};

//delete reach

export const deleteReachout = async (req, res, next) => {
  try {
    const reachout = await Reachout.findByIdAndDelete(req.params.id);
    if (reachout) {
      res.status(200).json(reachout);
    } else {
      next(new NotFoundError('reachout not found'));
    }
  } catch (error) {
    if (error instanceof BadRequestError) {
      next(new BadRequestError(error.message));
    } else {
      next(new NotFoundError(error.message));
    }
  }
};
