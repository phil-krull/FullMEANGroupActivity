const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
// for each model, we have a controller with restful routing methods 

module.exports = {
    index: (req, res) => {
      // showing arrow functions
        Quote.find({}, null, {sort: '-likes'}, (err, quotes)=>{
            if(err){
              console.log(err);
              res.json({status: false, error: err})
            } else {
              res.json({status: true, quotes: quotes})
            }
        })
    },
    create: (req, res) => {
        let quote = new Quote({name: req.body.name, quote: req.body.quote})
        // showing promises
        quote.save()
        .then((success)=>{
          res.json({status: true, quote: quote})
        })
        .catch((err)=>{
          console.log(err);
          console.log('-'.repeat(90));
          console.log(err.errors.name.message);
          res.json({status: false, error: err.errors.name.message})
        })
    },
    
    show: (req, res) => {

    },
    
    update: (req, res) => {
        console.log(`the id is ${req.params.id}`);
        // showing callbacks
        Quote.findOneAndUpdate({_id: req.params.id}, {$inc:{'likes':1}}, function(err, quote){
            console.log(`the error is ${err}`);
            console.log(`the quote is ${quote}`);
            if(err){
              console.log(err);
              res.json({status: false, error: err})
            } else {
              res.json({status: true, quote: quote})
            }
        })
      },
    
    destroy: (req, res) => {

    }
}