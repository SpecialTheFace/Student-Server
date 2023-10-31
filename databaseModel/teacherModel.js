const Sequelize = require ( "sequelize" );
// 导入数据库连接实例
const sequelize = require ( './db' )


const Teacher = sequelize.define ( 'Teacher' , {
    TeacherID : {
        type : Sequelize.INTEGER ,
        primaryKey : true ,
        autoIncrement : true ,
    } ,
    Name : Sequelize.STRING ,
    Gender : Sequelize.STRING ,
    Address : Sequelize.STRING ,
    PhoneNumber : Sequelize.STRING ,
    Email : Sequelize.STRING ,
} );

module.exports = Teacher;
