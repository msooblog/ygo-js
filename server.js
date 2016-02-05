'use strict'

const	Port=80
,		http=require('http')
,		shy=require('shynome')
,		serverError=(err,req,res)=>{
	res.writeHead(500,{"Content-Type":"text/plain;charst=utf8"})
	res.end('Server is error!'+err.toString())
}
,		route=shy.catch((...r)=>require('./route')(...r),serverError)
,		socket=shy.catch((...r)=>require('./socket')(...r),serverError)

let server=http.createServer()

require('./db').then((()=>{
	require('shynome/node/file/watchDir')(__dirname)//实时监控文件更新
	server
		.listen(Port,()=>process.title=`服务器运行在localhost:${Port}`)
		.on('request',route)
	require('socket.io')(server).on('connection',socket)
}),error=>(console.log('数据库连接失败'),console.log(error)))

process.on('uncaughtException',(...r)=>console.log(r))