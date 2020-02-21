//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the ng-fitness-tracker directory
app.use(express.static(__dirname + '/ng-fitness-tracker'));
 
app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/ng-fitness-tracker/index.html'));
});
 
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);