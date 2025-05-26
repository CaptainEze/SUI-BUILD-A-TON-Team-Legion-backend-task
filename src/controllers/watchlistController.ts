import { Response } from "express";
import WatchlistItem from "../models/watchlistItem";
import { AuthRequest } from "../middlewares/types";

export const createItem = async (req: AuthRequest, res: Response) => {
    const data = req.body;
    const requiredFields = [
        "tokenSymbol",
        "tokenName",
        "tokenAddress",
        "notes",
    ];
    const missingFields = requiredFields.filter((field) => !data[field]);
    if (missingFields.length > 0) {
        return res.status(400).json({
            code: 1,
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
    }
    const { tokenSymbol, tokenName, tokenAddress, notes } = req.body;
    try {
        const newItem = await WatchlistItem.create({
            userId: req.user?.id,
            tokenSymbol,
            tokenName,
            tokenAddress,
            notes,
        });

        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Failed to create item", error });
    }
};

export const getAllItems = async (req: AuthRequest, res: Response) => {
    try {
        const items = await WatchlistItem.find({ userId: req.user?.id });
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch items" });
    }
};

export const updateItem = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    
    const { tokenSymbol, tokenName, tokenAddress, notes } = req.body;
    try {
        const item = await WatchlistItem.findOneAndUpdate(
            { _id: id, userId: req.user?.id },
            { tokenSymbol, tokenName, tokenAddress, notes },
            { new: true }
        );

        if (!item) return res.status(404).json({ message: "Item not found" });

        res.json(item);
    } catch (error) {
        res.status(500).json({ message: "Failed to update item", error });
    }
};

export const deleteItem = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    try {
        const result = await WatchlistItem.findOneAndDelete({
            _id: id,
            userId: req.user?.id,
        });

        if (!result) return res.status(404).json({ message: "Item not found" });

        res.json({ message: "Item deleted" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete item", error });
    }
};
