// 服务层
const {
    findAllTeachers ,
    modifyTeacherInformation ,
    addTeacher ,
    deleteTeacherInformation
} = require ( "../dataLayer/teacher" );

// 查找所有教师信息
module.exports.findAllTeacherService = async () => {
    return await findAllTeachers ()
}

// 修改单个教师信息
module.exports.modifyTeacherInformationService = async ( teacherId , newData ) => {
    return await modifyTeacherInformation ( teacherId , newData )
}

// 添加一名教师
module.exports.addTeacherService = async ( teacherInfo ) => {
    return await addTeacher ( teacherInfo )
}

// 删除教师信息
module.exports.deleteTeacherInformationService = async ( teacherId ) => {
    const rowsUpdated = await deleteTeacherInformation ( teacherId )
    if ( rowsUpdated>0 ) {
        return Promise.resolve ( "教师信息删除成功" )
    } else {
        return Promise.reject ( "教师信息删除失败" )
    }
}
