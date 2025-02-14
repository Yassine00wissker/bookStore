import mongoose, { Types } from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type : String,
            required : true,
        },
        autor: {
            type: String,
            required : true,
        },
        publishyear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Book = mongoose.model('Book', bookSchema);