var appRouter = function(app) {
 
app.post("/getQuote", function(req, res) {
	if(!req.body.score) {
        return res.send({"status": "error", "message": "Please Send the valid data"});
    } else {
    	var score = parseInt(req.body.score);


    	if(score > 1 && score < 5){ 
    		return res.send("Wow Such an amazing performance");
    	}else if(score > 5 && score < 9){
    		return res.send("Ahaaannn you topped the charting list");
    	}

       // return res.send(req.body);
    }
    
});
}
 
module.exports = appRouter;