const express = require('express');
const router  = express.Router();

const multer  = require('multer');

const api_files   = require('../service/api_files');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './storage');    
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname);  
    }
});

const upload = multer({ storage: storage });

router.get('/file_list', (req , res) => {
    api_files.get_file_list(req,res);
});

router.post('/upload', upload.single('file'), (req , res) => {
    api_files.upload(req,res);
});

router.post('/:file_name', (req , res) => {
    api_files.download(req,res);
});

router.delete('/:file_name', (req , res) => {
    api_files.delete(req,res);
});

module.exports = router;