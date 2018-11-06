import * as express from 'express';
import * as http from 'http';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as logger from 'morgan';
import * as dotenv from 'dotenv';
import {RoutePathEnum} from './config/route-path.enum';

dotenv.config({ path: '.env' });

const PORT_NUMBER: string | number = process.env.PORT || 8877;
const app = express();
const server = http.createServer(app);

app.set('views', path.join(__dirname, '../../views'));
app.set('view engine', 'pug');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger(process.env.LOG_FORMAT));
app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));

// rotues
app.get(RoutePathEnum.Root, (req: express.Request, res: express.Response): void => {
    res.render('home');
});

server.listen(PORT_NUMBER, () => {
    console.log(`Server started on port: ${PORT_NUMBER}`);
});
