const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Diretório onde os arquivos serão salvos
const uploadDir = path.join(__dirname, '../../public/areaUsuario/imgsUsuarios');

// Verifica se o diretório existe, se não existir, cria
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuração do multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        // Manter o nome original do arquivo
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
