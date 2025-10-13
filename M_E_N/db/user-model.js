const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mydb');


const userscheme=mongoose.Schema({
    "name":String,
    "age":Number,
    "post":[
        {
            type:mongoose.Schema.Types.ObjectId // type:"id"
            // ref:'schemaname of that object whose ids are coming'
            //user.save() for explicit changes
        }
    ]

})
module.exports=mongoose.model("user",userscheme);