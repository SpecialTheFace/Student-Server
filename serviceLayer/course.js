// 服务层

const { findAllCourses , modifyCourseInformation , addCourse , deleteCourseInformation } = require ( "../dataLayer/course" );
// 查找所有课程信息
module.exports.findAllCourseService = async () => {
    return await findAllCourses ()
}

// 修改单个课程信息
module.exports.modifyCourseInformationService = async ( courseId , newData ) => {
    return await modifyCourseInformation ( courseId , newData )
}

// 添加一门课程
module.exports.addCourseService = async ( courseInfo ) => {
    return await addCourse ( courseInfo )
}

// 删除课程信息
module.exports.deleteCourseInformationService = async ( courseId ) => {
    const rowsUpdated = await deleteCourseInformation ( courseId )
    if ( rowsUpdated>0 ) {
        return Promise.resolve ( "课程信息删除成功" )
    } else {
        return Promise.reject ( "课程信息删除失败" )
    }
}
