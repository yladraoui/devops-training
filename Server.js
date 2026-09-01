import express from "express";
import cors from "cors"
export class Server {
    constructor(port = 3000){
        this.app = express();
        this.port = port;
        this.config();
        this.routes();
    }

    config(){
        this.app.use(express.static('public'));
        this.app.use(cors());

    }

    routes(){
        this.app.get('/', (req,res) => {
            res.json({status: 'ok', message: 'Hello DevOps'});
        })
        this.app.get('/health', (req,res) => {
            res.json({status: 'healthy'});
        })
    }

    start(callback){
        if(callback == undefined) callback = () => console.log(`Server is runing on port ${this.port}`);
        this.app.listen(this.port,callback());
    }
}