var friendsData = require ('../data/friend.js');

function calculateMatch(arrayDB, arrayNewUser) {
    var singleResult = 0;
    var totalResult = 0;
    for (var m = 0; m < arrayDB.length; m++) {
        if (arrayDB[m] <= arrayNewUser[m]) {
            singleResult = parseInt(arrayNewUser[m]) - parseInt(arrayDB[m]);
        } else {
            singleResult = parseInt(arrayDB[m]) - parseInt(arrayNewUser[m]);
        }
        //console.log("singleResult " + singleResult);
        totalResult = totalResult + singleResult;      
    }
    //console.log("totalResult " + totalResult);
    return totalResult;
}

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });
    app.post('/api/friends', function(req, res) {
        var newUser = req.body;
        //console.log("req.body " + req.body);
        var matchResults = [];

        for (var i = 0; i < friendsData.length; i++) {
            matchResults.push(calculateMatch(friendsData[i].scores, newUser.scores));
                    
        }
        //console.log("matchResults " + matchResults);
        var smallestDiff = 51;
        for (var j = 0; j < matchResults.length; j++) {
            if (matchResults[j] < smallestDiff) {
                smallestDiff = matchResults[j];
            }
        }
        //console.log("smallesDiff " + smallestDiff);
        var index = matchResults.indexOf(smallestDiff);
        res.json(friendsData[index]);
    });
}