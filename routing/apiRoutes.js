const tableData = require("../app/data/friends.js");


// for (let i = 0; i< tableData.length; i ++){
//     console.log(tableData[i].scores);
//     for(let j =0; j<friendResponse.length; j++){
//         console.log(tableData[i].scores[j]);
//     }
   
// }

module.exports = function(app) {


app.get("/api/friends", function (req,res,){
    
    res.json(tableData)
});



app.post("/api/friends", function(req,res,){
    let friendInput = req.body;
    // console.log(friendInput);
    let friendResponse = friendInput.scores;
    console.log(friendResponse);
    //    console.log(friendResponse);
    let matchedName = "";
    let matchedPhoto = "";
    let minDifference = 40
  
    for (let i = 0; i< tableData.length; i ++){
        
        let difference = 0
        for (let j =0; j<friendResponse.length; j++){            
            difference += Math.abs(tableData[i].scores[j] - friendResponse[j]);    
           
            
            
        }
        if (difference < minDifference){
            minDifference = difference;
        matchedName = tableData[i].name;        
        matchedPhoto = tableData[i].photo;
            
        }        
    }    
    tableData.push(friendInput);
    res.json({name:matchedName, photo:matchedPhoto});
})

}