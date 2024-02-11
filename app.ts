import express, {Request, Response} from 'express';
import order from "./routes/order";

const app = express();
const port = 3000;

app.use(order);

app.listen(port)