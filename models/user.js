// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const PassportLocalMongoose = require("passport-local-mongoose");


// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true
//     }
// });

// User.plugin(passportLocalMongoose);

// module.exports = mongoose.model("User", userSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// Define the schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

// Apply the passport-local-mongoose plugin to the schema
userSchema.plugin(passportLocalMongoose);

// Define and export the User model
module.exports = mongoose.model("User", userSchema);

