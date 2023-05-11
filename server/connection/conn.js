const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://22mx113:ramesh@cluster0.1gqx33r.mongodb.net/').then(()=>{
        console.log("Successfully Connected to MongoDB")
    }).catch((err)=>{
        console.log(err);
})