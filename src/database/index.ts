import { connectionSource } from "../ormconfig";

connectionSource.initialize()
    .then(() => {
       console.log('conectado ao banco de dados');
    })
    .catch((error) => console.log(error))