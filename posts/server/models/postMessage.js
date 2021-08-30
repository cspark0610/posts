import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String, //agregado name del creador del post!
    creator: String,
    tags: [String],
    selectedFile :String,
    likes: {
        type: [String],
        default:0,
    },
    createdAt: {
        type:Date,
        default :new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;

