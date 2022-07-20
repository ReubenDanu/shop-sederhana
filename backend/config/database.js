import { Sequelize } from "sequelize";

const db = new Sequelize('upload_db', 'root', '', {
    host: 'localhost',
    port: '3308',
    dialect: 'mysql'
})

export default db;