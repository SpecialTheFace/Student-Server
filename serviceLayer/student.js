// 服务层
const {
    findAllStudents ,
    modifyStudentInformation ,
    deleteStudentInformation ,
    addStudent
} = require ( "../dataLayer/student" );
const student = require ( "../databaseModel/studentModel" );

// 查找所有学生信息
module.exports.findAllStudentService = async () => {
    return await findAllStudents ()
}

// 添加一名学生
module.exports.addStudentService = async (student) => {
    return await addStudent (student)
}

// 修改单个学生信息
module.exports.modifyStudentInformationService = async ( studentId , newData ) => {
    const rowsUpdated = await modifyStudentInformation ( studentId , newData )
    const whereOptions = {
        where : { studentId }
    }
    if ( rowsUpdated>0 ) {
        return await student.findOne ( whereOptions )
    } else {
        return Promise.reject ( "学生信息更新失败" )
    }
}


// 删除学生信息
module.exports.deleteStudentInformationService = async ( studentId ) => {
    const rowsUpdated = await deleteStudentInformation ( studentId )
    if ( rowsUpdated>0 ) {
        return Promise.resolve ( "学生信息删除成功" )
    } else {
        return Promise.reject ( "学生信息删除失败" )
    }
}
