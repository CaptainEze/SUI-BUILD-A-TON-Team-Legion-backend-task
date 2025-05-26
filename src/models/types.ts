import { Document, Schema } from "mongoose";

export interface IUser extends Document {
    email: string;
    password: string;
    createdAt: Date;
    comparePassword(candidate: string): Promise<boolean>;
}

export interface IWatchlistItem extends Document {
    userId: Schema.Types.ObjectId;
    tokenSymbol: string;
    tokenName: string;
    tokenAddress?: string;
    notes?: string;
    createdAt: Date;
    modifiedAt: Date;
}
