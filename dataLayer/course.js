// 导入 course 模型
const course = require ( '../databaseModel/courseModel' );

// 查询所有课程数据
module.exports.findAllCourses = async () => {
    return await course.findAll ( {
        raw : true
    } );
}

// 修改单个课程信息
module.exports.modifyCourseInformation = async ( courseId , newData ) => {
    const whereOptions = {
        where : { courseId }
    }
    const [ rowsUpdated ] = await course.update ( newData , whereOptions )
    if ( rowsUpdated>0 ) {
        return await course.findOne ( whereOptions )
    } else {
        return Promise.reject ( "课程信息更新失败" )
    }
}

// 添加课程
module.exports.addCourse = async ( courseInfo ) => {
    const res = await course.create ( courseInfo );
    return res.toJSON ();
}

// 删除课程信息
module.exports.deleteCourseInformation = async ( courseId ) => {
    const whereOptions = {
        where : { courseId }
    }
    return await course.destroy ( whereOptions )

}
