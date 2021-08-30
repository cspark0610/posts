import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const createPost = async (req, res) => {
//   const body = req.body;
//   const newPost = new PostMessage(body);
//   try {
//     await newPost.save();
//     res.status(201).json(newPost);

//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({...post, creator: req.userId, createdAt:new Date().toISOString() });
  //con esto en cada newPost voy a tener el id del creador del mismo.
  //tengo que cambiar el campo del modelo de PostMessage
  try {
    await newPost.save();
    res.status(201).json(newPost);

  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { creator, title, message, tags, selectedFile } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("the post does not exists");

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.status(204).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("the post does not exists");
  try {
    await PostMessage.findByIdAndRemove(id);

    res.status(202).json({ message: "post deleted succesfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log(error);
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  //req.userId
  if (!req.userId) return res.json({ message: "no autenticado" });

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no post with id: ${id}`);
  const post = await PostMessage.findById(id);
  //cada like corresponde a un id de user especifico
  const index = post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    //si no existe es decir si es === -1 entonces ahi si el user con id userId puede likear el post 
    post.likes.push(req.userId);//voy a pushear el req.userId ahora el array de likes tendra los id de lo users q lo likearon
  } else {
    post.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost);
};
