/**
 * @description 数据库模型同步，并对表中数据进行 initialization
 *@description 该模块程序只需运行一次即可
 */

const Sequelize = require ( 'sequelize' );
const Mock = require ( 'mockjs' );

// 配置 Sequelize 连接数据库
const sequelize = new Sequelize ( 'course' , 'root' , 'hengrui123' , {
    host : 'localhost' ,
    dialect : 'mysql' ,
    port : 3306 ,
    define : {
        timestamps : false , // 禁用默认的 createdAt 和 updatedAt 字段
    } ,
    logging : false ,
} );

// 测试数据库连接
( async function () {
    try {
        await sequelize.authenticate ();
        console.log ( 'Connection has been established successfully.' );
    } catch ( error ) {
        console.error ( 'Unable to connect to the database:' , error );
    }
} ) ()

// 定义 Sequelize 模型

const Class = sequelize.define ( 'Class' , {
    ClassID : {
        type : Sequelize.INTEGER ,
        primaryKey : true ,
        autoIncrement : true ,
    } ,
    ClassName : Sequelize.STRING ,
    ClassDescription : Sequelize.STRING ,
} );

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

const Course = sequelize.define ( 'Course' , {
    CourseID : {
        type : Sequelize.INTEGER ,
        primaryKey : true ,
        autoIncrement : true ,
    } ,
    CourseName : Sequelize.STRING ,
    TeacherID : Sequelize.INTEGER ,
} );

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


// 使用 Mock.js 创建模拟数据
const data = Mock.mock ( {
    'Classes|10' : [ {
        'ClassName' : '@ctitle(3, 10)' ,
        'ClassDescription' : '@csentence(10, 50)'
    } ] ,
    'Teachers|10' : [ {
        'Name' : '@cname' ,
        'Gender|1' : [ '男' , '女' ] ,
        'Address' : '@county(true)' ,
        'PhoneNumber' : /1[3456789]\d{9}/ ,
        'Email' : Mock.Random.email ()
    } ] ,
    'Courses|10' : [ {
        'CourseName' : '@ctitle(5, 20)' ,
    } ] ,
    'Students|10' : [ {
        'Name' : '@cname' ,
        'DateOfBirth' : '@date("1990-01-01", "2005-12-31")' ,
        'Gender|1' : [ '男' , '女' ] ,
        'Address' : '@county(true)' ,
        'PhoneNumber' : /1[3456789]\d{9}/ ,
        'Email' : Mock.Random.email () ,
        'AdmissionDate' : '@date("2000-01-01", "2023-12-31")'
    } ] ,
} );


// console.log ( data )
// 数据库表同步并插入模拟数据
sequelize.sync ( { alter : true } ).then ( async () => {
    // 插入模拟数据
    await Class.bulkCreate ( data.Classes );
    await Teacher.bulkCreate ( data.Teachers );
    await Course.bulkCreate ( data.Courses );
    await Student.bulkCreate ( data.Students );

    // 关闭数据库连接
    sequelize.close ().then ( () => {
        console.log ( 'Database synchronization and data insertion completed.' );
    } );
} );
