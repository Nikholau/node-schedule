import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: 'localhost',
    port:  5432,
    username: 'nikholas',
    password: process.env.DB_PASSWORD,
    database: 'node-schedule',
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/resources/entities/**/*/*.ts'],
    migrations: ['src/database/migrations/*.ts'],
});
