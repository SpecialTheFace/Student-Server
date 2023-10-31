// 导入数据库连接实例

const sequelize = require ( './db' );

// 导入模型
/*const Class = require ( './classModel' );
const course = require ( './courseModel' );
const student = require ( './studentModel' );
const teacher = require ( './teacherModel' );*/

// 模型同步
( async function () {
    try {
        await sequelize.authenticate ();
        // 将数据模型和表进行同步
        await sequelize.sync ( {
            alter : true ,
        } )
        console.log ( '数据库连接成功' );
        console.log ( '所有模型已同步' );
    } catch ( error ) {
        console.error ( 'Unable to connect to the database:' , error );
    }
} ) ()
