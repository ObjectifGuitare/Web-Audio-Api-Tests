import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

// const __filename = fileURLToPath(import.meta.url);


// const __dirname = path.dirname(__filename);



const PORT = 8080;
const app = express();
app.use(express.static("./public"))
app.listen(PORT, () => console.log(`Server start: http://localhost:${PORT}/`));


// app.get("/", async (req, res) =>{
//     res.sendFile(path.join(__dirname, '/index.html'));

// })