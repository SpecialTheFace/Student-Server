// 导入 teacher 模型
const teacher = require ( '../databaseModel/teacherModel' );

// 查询所有教师数据
module.exports.findAllTeachers = async () => {
    return await teacher.findAll ( {
        raw : true
    } );
}

// 修改单个教师信息
module.exports.modifyTeacherInformation = async ( teacherId , newData ) => {
    const whereOptions = {
        where : { teacherId }
    }
    const [ rowsUpdated ] = await teacher.update ( newData , whereOptions )
    if ( rowsUpdated>0 ) {
        return await teacher.findOne ( whereOptions )
    } else {
        return Promise.reject ( "教师信息更新失败" )
    }
}
