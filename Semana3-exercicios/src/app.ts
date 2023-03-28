import express from "express";
import cors from "cors";
import routes from './router';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3000;

app.listen(port, () => {
    console.log("Aplicacao na porta: ", port);

});