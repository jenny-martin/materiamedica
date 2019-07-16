var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    herbalist: {type: String, required: true},
    botanical_name: {type: String},
    common_name: {type: String},
    history: {type: String},
    uses: {type: String}
});

module.exports = mongoose.model('Post', postSchema);