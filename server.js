var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');
app.use(cors())
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
  })
  
  var upload = multer({ storage: storage })
  
// app.get('/',function(req,res){
//     return res.send('Hello Server')
// })
// app.post('/upload2', function(req, res) {
    
//     upload(req, res, function (err) {
     
//         if (err instanceof multer.MulterError) {
//             return res.status(500).json(err)
//           // A Multer error occurred when uploading.
//         } else if (err) {
//             return res.status(500).json(err)
//           // An unknown error occurred when uploading.
//         } 
        
//         return res.status(200).send(req.file)
//         // Everything went fine.
//       })
// });

app.get('/hello', (req, res) => res.send('hello world'));

app.post('/upload', upload.single('image'), (req, res, next) => {
  console.log('got upload!')
  res.send('ok');
  next();
})

app.listen(8000, function() {
    console.log('App running on port 8000');
});