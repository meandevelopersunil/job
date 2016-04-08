var express=require('express');
var fs=require('fs');
var HashMap=require('hashmap');
var app=express();
var jobs=fs.readFileSync('jobs.json');
var jobs=JSON.parse(jobs);
var map=new HashMap();
var array=[];
jobs.forEach(function(arrayitem) {
	// body...
	role=arrayitem.role;
	array.push(role);
	role=role.toLowerCase();
	if(map.get(role))
	{
		var skills=[];
		var skills=arrayitem.skills;

		map.set(role, map.get(role).concat(skills));
	}
	else
	{
		map.set(role,arrayitem.skills);
	}

});

uniqueArray = array.filter(function(elem, pos) {
    return array.indexOf(elem) == pos;
});

app.get('/search',function(req,res) {
	// body...
res.send(uniqueArray);

});

app.get('/jobs/:jobtype',function(req,res){
var jobtype=req.params.jobtype;
var myArray=map.get(jobtype.toLowerCase());
//console.log(myArray);
var c = myArray.reduce(function(a, b) {
  a[b] = ++a[b] || 1;
  return a;
}, {});
var keys = Object.keys(c);


var result= keys.sort(function(a, b) {
  if (c[a] < c[b]) {
    return 1;
  } else {
    return -1;
  }
}).map(function(a) {return String(a)});
res.send(result);
});


app.use(express.static(__dirname+'/public'));
app.listen(3000,function(err){
	if(err)
		throw err;
	console.log("Server listening at 3000");
});
