// 配置 Sequelize 连接数据库
const Sequelize = require ( "sequelize" );

const sequelize = new Sequelize ( 'course' , 'root' , 'hengrui123' , {
    host : 'localhost' ,
    dialect : 'mysql' ,
    port : 3306 ,
    define : {
        timestamps : false , // 禁用默认的 createdAt 和 updatedAt 字段
    } ,
    logging : false ,
} );



module.exports = sequelize;
