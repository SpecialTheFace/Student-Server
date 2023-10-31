// 服务层

// 查找所有学生信息
const { findAllCourses , modifyCourseInformation } = require ( "../dataLayer/course" );
module.exports.findAllCourseService = async () => {
    return await findAllCourses ()
}

// 修改单个学生信息
module.exports.modifyCourseInformationService = async ( courseId , newData ) => {
    return await modifyCourseInformation ( courseId , newData )
}
