// 导入 course 模型
const course = require ( '../databaseModel/courseModel' );

// 查询所有教师数据
module.exports.findAllCourses = async () => {
    return await course.findAll ( {
        raw : true
    } );
}

// 修改单个教师信息
module.exports.modifyCourseInformation = async ( courseId , newData ) => {
    const whereOptions = {
        where : { courseId }
    }
    const [ rowsUpdated ] = await course.update ( newData , whereOptions )
    if ( rowsUpdated>0 ) {
        return await course.findOne ( whereOptions )
    } else {
        return Promise.reject ( "教师信息更新失败" )
    }
}
