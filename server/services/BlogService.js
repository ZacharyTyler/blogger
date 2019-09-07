import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    title: { type: String, maxlength: 60 },
    summary: { type: String, maxlength: 120 },
    author: { type: ObjectId, ref: 'User' },
    img: { type: String, default: "https://placehold.it" },
    body: { type: String }
}, { timestamps: true })


// {
//     title: "The Era of E-Sports" //max length should be 60 characters
//     summary: "A short description." // no more than 120 characters
//     author: { // How could this data get.... populated 
//         _id: "12lkj3lkj24ljhlkj23lj231klf",
//             name: "Jim Bob"
//     },
//     img: "https://placehold.it"
//     body: "A bunch of stuff about E-Sports", 
// }




export default class BlogService {
    get repository() {
        return mongoose.model('blog', _model)
    }
}