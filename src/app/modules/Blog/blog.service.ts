import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const updateBlogIntoDB = async (_id: string, payload: TBlog) => {
  const result = await Blog.updateOne({ _id }, { $set: payload });
  return result;
};

const deleteBlogFromDB = async (_id: string) => {
  const result = await Blog.deleteOne({ _id });
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};

const getSingleBlogFromDB = async (_id: string) => {
  const result = await Blog.findOne({ _id });
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
};
