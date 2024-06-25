const express = require("express");
const Model = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// initalizing router
const router = express.Router();

router.post("/add", (req, res) => {
  console.log(req.body);

  new Model(req.body).save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  // res.send("response from user");
});

router.get("/getall", (req, res) => {
  // res.send("response from user get all");
  Model.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// how to do  update operation
router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/getbyid/:id', (req, res) => {
  Model.findById(req.params.id)
      .then((result) => {
          res.status(200).json(result);
      }).catch((err) => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.delete("/delete/:id", () => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.post("/authenticate", (req,res) => {
  Model.findOne(req.body)  //user data send krega
  .then((result) => {
   
    if(!result){
      //if not match
      return res.status(401).json({message : "Invalid Credentials"});
    } else {
      

      // database se ye saari fields needed hai
      const { _id, name, email, password } = result;
      const payload = { _id, name, email, password};
      jwt.sign(
        payload,
        process.env.JWT_SECRET,  //importing env variable here
        {expiresIn:  "3 days"},
        // this is callback function
        (err, token) => {
            if(err){
              console.log(err);
              return res.status(500).json(err);
             } else {
              return res.status(200).json({token});
             }
        }
      )

    }

  }).catch((err) => {
    
  });
})
// exporting this route

// router.post("/add", (req,res) => {
//   console.log(req.body);
//   new Model(req.body).save()   //to save the data
//   .then((result) => {
//     res.status(200).json(result); 
//   }).catch((err) => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// // res.send("response from add");
// });

// router.get("/getall", (req,res) =>{
// res.send("response from getall");
// });

// router.get("/update", (req,res) => {
//   res.send("response from update");
//   });

//   router.get("/delete", (req,res) => {
//     res.send("response from delete");
//     });
module.exports = router;
