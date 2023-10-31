// 导入 student 模型
const student = require ( '../databaseModel/studentModel' )

// 查询所有学生数据
module.exports.findAllStudents = async () => {
    return await student.findAll ( {
        raw : true
    } );
}

// 修改单个学生信息
module.exports.modifyStudentInformation = async ( studentId , newData ) => {
    const whereOptions = {
        where : { studentId }
    }
    const [ rowsUpdated ] = await student.update ( newData , whereOptions )
    if ( rowsUpdated>0 ) {
        return await student.findOne ( whereOptions )
    } else {
        return Promise.reject ( "学生信息更新失败" )
    }
}

// 删除学生信息
module.exports.deleteStudentInformation = async ( studentId ) => {
    const whereOptions = {
        where : { studentId }
    }
    const rowsUpdated = await student.destroy ( whereOptions )
    if ( rowsUpdated>0 ) {
        return Promise.resolve ( "学生信息删除成功" )
    } else {
        return Promise.reject ( "学生信息删除失败" )
    }
}

