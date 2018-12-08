var express = require('express');
var router = express.Router();
var {query} = require("../mysql/index.js");
var sql = require("../mysql/sql.js")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 请求数据
router.post("/api/list",function(req,res,next){
    var {pagenum,pageLen} = req.body;
  
    query(sql["SELECT-COUNT"])
    .then((data)=>{
      var count = data[0]["count(*)"];
      query(`select * from shop limit ${pagenum},${pageLen}`)
      .then((data)=>{
        res.send({code:1,count:count,data:data})
      })
    
    })

})
module.exports = router;
