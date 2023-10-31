// 服务层
const { findAllTeachers , modifyTeacherInformation } = require ( "../dataLayer/teacher" );

// 查找所有教师信息
module.exports.findAllTeacherService = async () => {
    return await findAllTeachers ()
}

// 修改单个教师信息
module.exports.modifyTeacherInformationService = async ( studentId , newData ) => {
    return await modifyTeacherInformation ( studentId , newData )
}
