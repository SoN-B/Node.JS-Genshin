var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    MainOptions:{type:String, required:true},
    CriticalHitProbability:{type:String, required:true},
    FatalDamage:{type:String, required:true},
});

var Chractors = mongoose.model('Chractors', postSchema);
module.exports = Chractors;