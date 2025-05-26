import jwt from "jsonwebtoken";
import { appConfig } from "../../config";

interface JwtPayload {
    [key: string]: any;
}

export const generateToken = (
    payload: JwtPayload,
    expiresIn?: number
): string => {
    return jwt.sign(payload, appConfig.jwtSecret, {
        expiresIn: expiresIn ?? "1d",
    });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, appConfig.jwtSecret);
};
