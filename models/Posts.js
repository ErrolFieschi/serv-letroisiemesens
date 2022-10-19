const mongoose = require('mongoose');

var postsSchema = mongoose.Schema({
    
title: {type: String, required: true },
createdDate: {type: String, required: true },
imageUrl: {type: String, required: true },
content: {type: String, required: true },
comments: {type: Array }

})

postsSchema.method("toJSON", function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = mongoose.model('Posts', postsSchema);
