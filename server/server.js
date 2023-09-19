require('dotenv').config()

const express = require("express")
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

const multer = require('multer')
const fs = require('fs')

const app = express()
const port = process.env.DB_PORT || 8080

// Multer Setup
const storage = multer.diskStorage({
    destination: (req, files, cb) => {
        cb(null, 'images')
    },
    filename: (req, files, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
        cb(
            null,
            files.fieldname +
                '-' +
                uniqueSuffix +
                path.extname(files.originalname)
        )
    },
})
const upload = multer({ storage: storage })

// midlleware
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, './frontens/build')))
app.use(bodyParser.json())

const userController = require('./controller/usersController')
const imagesController = require('./controller/imagesController')

app.get('/api/v1/users', (req, res) => {
    userController.getAllusers().then((data) => res.json(data))
});

app.post('/api/v1/users', (req, res) => {
    userController.createUsers(req.body.users).then((data) => res.json(data))
});

app.put('/api/v1/users', (req, res) => {
    userController.updateUsers(req.body.users).then((data) => res.json(data))
});

app.delete('/api/v1/users/:id', (req, res) => {
    userController.deleteUsers(req.params.id).then((data) => res.json(data))
});


// / Define the directory where your images are located / no need to put C://Users...
const imageDirectory = path.join(__dirname, 'images');

// Serve the images from the specified directory
app.use('/images', express.static(imageDirectory));

app.post('/api/v1/upload', upload.array('files', 4), async (req, res) => {
    imagesController.upload(req.body, req.files)
    .then((data) => res.json(data)).catch(error => res.status(error)
    // .catch((error) => res.status(500).json({ error: "Internal Server Error" })));
)});

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})