




app.get('/friends',function(req,res){
	var username = req.query.username
	if (username === 'chenshangshuo') {
		ret = ['wade','james']
	}else{
		ret = ['nobody']
	}
	res.send(ret)
})


