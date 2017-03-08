module.exports = function (mongoose){
  mongoose.connect('mongodb://admin:admin@ds123410.mlab.com:23410/artoobook', function(err){
    if(err){console.log(err);}else{console.log("connesso al db");}
  });
};
