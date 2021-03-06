const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travel_books_schema = new Schema({
   titre : {
       type: String,
       required: true
   },
   date : {
     type: String,
     required: true
   },
   description:{
     type: String,
     default: false
   },
   pays:[{
     type: String,
     required: true
   }],
   list_days:[{
     type: Schema.Types.ObjectId, ref:'Day'
   }],
   is_deleted:{
     type: Boolean,
     default: false
   },
   createdAt:{
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt:{
   type: Date,
   required: true,
   default: Date.now
 }
});

const Travel_books = module.exports = mongoose.model('Travel_books', travel_books_schema);

module.exports.save_travel_books = function (Travel_books, callback) {
  Travel_books.save(callback);
};

module.exports.show_all_travel_books = function(callback){
  const query = {}
  Travel_books.find(query, callback);
};

module.exports.get_travel_books_by_id = function(id, callback){
   Travel_books.findById(id, callback);
};

module.exports.get_travel_books_by_country = function(country, callback){
  const query = {pays: country}
  Travel_books.find(query, callback);
};
