import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import httpStatus from 'http-status';
import config from '../config';
import sendResponse from '../utils/sendResponse';

const auth = (...requiredRoles: any) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // get access token from headers
    const token = req.headers.authorization;
    if (!token) {
      sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: 'You have no access to this route',
      });
    }

    // decoded access token and check validaty
    const decoded = jwt.verify(
      token as string,
      config.jwt_access_secret as string
    ) as JwtPayload;

    const role = decoded.role;

    if (requiredRoles && !requiredRoles.includes(role)) {
      sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: 'You have no access to this route',
      });
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
