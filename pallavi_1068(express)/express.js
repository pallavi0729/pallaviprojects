express=require('express');
app=express();				
mymodule=require('./mymodule'); 
app.get('/',function(req,resp){   
	
	resp.send("<form action='avg' method='get'>Enter Physicsmarks :<input type='text' name='Physicsmarks'><br>Enter chemistrymarks :<input type='text' name='chemistrymarks'><br>Enter mathmarks :<input type='text' name='mathmarks'><br> <input type='submit' value='Calculate'></form>");
});
app.get('/avg',function(req,resp){
	
	console.log(req.query.Physicsmarks+' '+req.query.chemistrymarks+''+req.query.mathmarks)
	avg=mymodule.average(req.query.Physicsmarks,req.query.chemistrymarks,req.query.mathmarks);	
	resp.send('Average :'+avg/100);
});
app.listen(4000); 
console.log('Server Running On Port 4000');