import mongoose from 'mongoose'

const postsModel = mongoose.Schema({
    user: String,
    imgName: String,
    text: String,
    avatar: String,
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('posts', postsModel)