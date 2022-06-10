const fs        = require('fs');

module.exports = {
    get_file_list: (req, res) => {
        let file_list = [];
        fs.readdirSync('./storage').forEach(file => {
            file_list.push(file);
        });
        res.json(file_list);
    },
  
    upload: (req, res) => {
        const file = req.file;

        const upload = {
            type:file.mimetype,
            file_name:file.originalname,
            size:file.size,
            path:file.path
        }
        
        res.json(upload);
    },

    download: (req, res) => {
        const file = req.body.file_name;
        var file_path = './storage/' + file;
        res.download(file_path);
    },

    delete: (req, res) => {
        const file_name = req.params.file_name
        fs.unlink('./storage/' + file_name, error => {
            if (error) {
                res.json({
                    'status':0,
                    'msg':'刪除失敗!'
                })
            } else {
                res.json({
                    'status':1,
                    'msg':'刪除成功!'
                })
            }
        })
    },
}