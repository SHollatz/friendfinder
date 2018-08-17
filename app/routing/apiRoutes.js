var friendsData = require ('../data/friend.js');

function calculateMatch(arrayDB, arrayNewUser) {
    var singleResult = 0;
    var totalResult = 0;
    for (var m = 0; m < arrayDB.length; m++) {
        
        singleResult = 
    }
}

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });
    app.post('/api/friends', function(req, res) {
        var newUser = req.body;
        friendsData.push(newUser);
        var dbAnswerArray = [];
        var newUserAnswerArray = [];
        for (var k=0; k < newUser.scores.length; k++) {
            newUserAnswerArray[k] = parseInt(newUser.scores[k]);
        }
        for (var i = 0; i < friendsData -1; i++) {
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                dbAnswerArray[j] = parseInt(friendsData[i].scores[j]);
            }
            
        }
        res.json(newUser);
    });
}