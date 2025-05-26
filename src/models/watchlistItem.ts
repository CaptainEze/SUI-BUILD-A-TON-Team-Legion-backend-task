import mongoose, { Schema, Model } from "mongoose";
import { IWatchlistItem } from "./types";

const watchlistItemSchema: Schema<IWatchlistItem> = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        tokenSymbol: {
            type: String,
            required: true,
            uppercase: true,
            trim: true,
        },
        tokenName: {
            type: String,
            required: true,
            trim: true,
        },
        tokenAddress: {
            type: String,
            default: null,
        },
        notes: {
            type: String,
            default: "",
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        modifiedAt: {
            type: Date,
        },
    },
    {
        timestamps: { createdAt: "createdAt", updatedAt: "modifiedAt" },
    }
);

const WatchlistItem: Model<IWatchlistItem> = mongoose.model<IWatchlistItem>(
    "WatchlistItem",
    watchlistItemSchema
);

export default WatchlistItem;
