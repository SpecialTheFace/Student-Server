const Sequelize = require ( "sequelize" );
// 导入数据库连接实例
const sequelize = require ( './db' )
const Class = sequelize.define ( 'Class' , {
    ClassID : {
        type : Sequelize.INTEGER ,
        primaryKey : true ,
        autoIncrement : true ,
    } ,
    ClassName : Sequelize.STRING ,
    ClassDescription : Sequelize.STRING ,
} );

// 模型导出
module.exports = Class;
