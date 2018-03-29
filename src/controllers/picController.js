const Pic = require('../models/pic.js');

exports.pic_create = function(req,res){
  const new_pic = Pic({
      place: req.body.place,
      pic: req.body.pic
  });
  Pic.save_pic(new_pic, (err, saved_pic) =>{
    if (err) {
      res.send(" Erreur : saved pic");
    }
    res.json(saved_pic);
  });
};

exports.pic_get_all = function(req, res){
  Pic.show_all_pics((err, showed_pics) => {
    if (err) {
      res.send(" Erreur : showed_pics");
    }
    res.json(showed_pics);
  });
};
