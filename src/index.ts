import express, { Request,response,Response} from "express"
import  dotenv from "dotenv";
import router from "./router/routes";

dotenv.config();
const app = express();
app.use(express.json())

app.get("/", (req: Request, res: Response)=>{ 
    return res.status(200).send({response: "Halo"})
})

app.use(router);

app.listen(process.env.APP_PORT, ()=> {console.log(`running on http://${process.env.BASEURL}:${process.env.APP_PORT}/`);
})