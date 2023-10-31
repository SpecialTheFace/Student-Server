const Sequelize = require ( "sequelize" );
// 导入数据库连接实例
const sequelize = require ( './db' )


const Course = sequelize.define ( 'Course' , {
    CourseID : {
        type : Sequelize.INTEGER ,
        primaryKey : true ,
        autoIncrement : true ,
    } ,
    CourseName : Sequelize.STRING ,
} );

module.exports = Course;
