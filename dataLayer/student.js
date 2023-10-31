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

