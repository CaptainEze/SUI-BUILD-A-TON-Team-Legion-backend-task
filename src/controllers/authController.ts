import { Request, Response } from "express";
import User from "../models/user";
import { generateToken } from "../utils";

export const register = async (
    req: Request,
    res: Response
): Promise<Response | void> => {
    const data = req.body;
    const requiredFields = ["email", "password"];
    const missingFields = requiredFields.filter((field) => !data[field]);
    if (missingFields.length > 0) {
        return res.status(400).json({
            code: 1,
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
    }

    const { email, password } = data;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "Email already in use." });

        const user = new User({ email, password });
        await user.save();
        const token = generateToken({
            id: user._id,
            email: user.email,
        });

        res.status(201).json({
            token,
            user: { id: user._id, email: user.email },
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const login = async (
    req: Request,
    res: Response
): Promise<Response | void> => {
    const data = req.body;
    const requiredFields = ["email", "password"];
    const missingFields = requiredFields.filter((field) => !data[field]);
    if (missingFields.length > 0) {
        return res.status(400).json({
            code: 1,
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
    }
    const { email, password } = data;
    try {
        const user = await User.findOne({ email });
        if (!user)
            return res
                .status(400)
                .json({ message: "Invalid email or password." });
        const isMatch = await user.comparePassword(password);
        if (!isMatch)
            return res
                .status(400)
                .json({ message: "Invalid email or password." });

        const token = generateToken({
            id: user._id,
            email: user.email,
        });

        res.json({
            token,
            user: { id: user._id, email: user.email },
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
