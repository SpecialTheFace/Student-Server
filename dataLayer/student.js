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
    return rowsUpdated;


}

// 添加一名学生
module.exports.addStudent = async ( studentInfo ) => {
    const res = await student.create ( studentInfo );
    return res.toJSON ();
}

// 删除学生信息
module.exports.deleteStudentInformation = async ( studentId ) => {
    const whereOptions = {
        where : { studentId }
    }
    return await student.destroy ( whereOptions )

}

