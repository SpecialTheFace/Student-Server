// 服务层
const { findAllStudents , modifyStudentInformation } = require ( "../dataLayer/student" );

// 查找所有学生信息
module.exports.findAllStudentService = async () => {
    return await findAllStudents ()
}

// 修改单个学生信息
module.exports.modifyStudentInformationService = async ( studentId , newData ) => {
    return await modifyStudentInformation ( studentId , newData )
}
