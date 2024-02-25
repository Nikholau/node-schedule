import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: 'localhost',
    port:  5432,
    username: 'nikholas',
    password: 'nikholas123',
    database: 'node-schedule',
    logging: false,
    synchronize: true,
    name: 'default',
    entities: ['src/resources/entities/*.ts'],
    migrations: ['src/database/migrations/*.ts'],
});
