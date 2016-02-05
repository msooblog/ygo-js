'use strict'
const	mongodb=require('mongodb').MongoClient
let		url='mongodb://127.0.0.1:27017/test'
,		client=new Promise((resolve,reject)=>{
	mongodb.connect(url, (err, db)=>{
		if(err){
			reject(err);
		}else{
			module.exports=db
			resolve(db)
		}
	})
})
module.exports=client