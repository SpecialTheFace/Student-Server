const { findAllClass , modifyClassInformation , addClass , deleteClassInformation } = require ( "../dataLayer/class" );
// 查找所有班级信息
module.exports.findAllClassService = async () => {
    return await findAllClass ()
}

// 修改单个班级信息
module.exports.modifyClassInformationService = async ( classId , newData ) => {
    return await modifyClassInformation ( classId , newData )
}

// 添加班级
module.exports.addClassService = async ( classInfo ) => {
    return await addClass ( classInfo )
}

// 删除班级信息
module.exports.deleteClassInformationService = async ( courseId ) => {
    const rowsUpdated = await deleteClassInformation ( courseId )
    if ( rowsUpdated>0 ) {
        return Promise.resolve ( "班级信息删除成功" )
    } else {
        return Promise.reject ( "班级信息删除失败" )
    }
}
