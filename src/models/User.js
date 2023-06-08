import {Sequelize} from 'sequelize';
import dbMysql from '../db/conetionDBMysql.js';

const Users = dbMysql.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }

});
Users.sync();

export default Users;