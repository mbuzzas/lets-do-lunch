const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({

	firstname: String,
	lastname: String,
    email: String,
    password: String,
    title: String,
    age: Number,
    gender: String,
    zipcode: Number,
    hobbies: [String],
    sports: [String],
    music: [String]

});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);