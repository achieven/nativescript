const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('listening on port ' + port)
})

app.use('/images', express.static(__dirname + '/../../images'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/main-page.html'))
})