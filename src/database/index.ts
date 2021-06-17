import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection().then(connection => {
    if(connection) console.log('Connected!');
}).catch(error => console.log(error));

export default createConnection;