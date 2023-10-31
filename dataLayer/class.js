// 导入 class 模型
const Class = require ( '../databaseModel/classModel' );

// 查询所有班级数据
module.exports.findAllClass = async () => {
    return await Class.findAll ( {
        raw : true
    } );
}

// 修改单个班级信息
module.exports.modifyClassInformation = async ( classId , newData ) => {
    const whereOptions = {
        where : { classId }
    }
    const [ rowsUpdated ] = await Class.update ( newData , whereOptions )
    if ( rowsUpdated>0 ) {
        return await Class.findOne ( whereOptions )
    } else {
        return Promise.reject ( "班级信息更新失败" )
    }
}

// 添加班级
module.exports.addClass = async ( classInfo ) => {
    const res = await Class.create ( classInfo );
    return res.toJSON ();
}

// 删除班级
module.exports.deleteClassInformation = async ( classId ) => {
    const whereOptions = {
        where : { classId }
    }
    return await Class.destroy ( whereOptions )

}
