const Sequelize = require ( "sequelize" );
// 导入数据库连接实例
const sequelize = require ( './db' )
const Student = sequelize.define ( 'Student' , {
    StudentID : {
        type : Sequelize.INTEGER ,
        primaryKey : true ,
        autoIncrement : true ,
    } ,
    Name : Sequelize.STRING ,
    DateOfBirth : Sequelize.DATE ,
    Gender : Sequelize.STRING ,
    Address : Sequelize.STRING ,
    PhoneNumber : Sequelize.STRING ,
    Email : Sequelize.STRING ,
    AdmissionDate : Sequelize.DATE ,
    ClassID : Sequelize.INTEGER ,
} );

// 模型导出
module.exports = Student;
