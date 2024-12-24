import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";


const blogSchema = new Schema<TBlog>(
    {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        readingTime: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Blog = model<TBlog>('Blog', blogSchema);