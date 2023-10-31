const express = require ( "express" );
const {
    findAllStudentService ,
    modifyStudentInformationService ,
    deleteStudentInformationService , addStudentService
} = require ( "../serviceLayer/student" );
const { formatResponse } = require ( "../utils/responseFormat" );

const router = express.Router ();


// 获取所有学生信息
router.get ( '/' , async ( req , res ) => {
    const data = await findAllStudentService ();
    res.send ( formatResponse ( 1 , '学生数据获取成功' , data ) );
} )

// 添加一名学生
router.post ( '/' , async ( req , res ) => {
    const data = await addStudentService ( req.body );
    res.send ( formatResponse ( 1 , '添加学生成功' , data ) )
} )


// 修改学生信息
router.put ( '/:id' , async ( req , res ) => {
    try {
        const data = await modifyStudentInformationService ( req.params.id , req.body );
        res.send ( formatResponse ( 1 , '学生数据更新成功' , data ) )
    } catch ( e ) {
        res.send ( formatResponse ( 0 , e , null ) )
    }
} )

// 删除学生信息
router.delete ( '/:id' , async ( req , res , ) => {
    try {
        const data = await deleteStudentInformationService ( req.params.id );
        res.send ( formatResponse ( 1 , data , null ) )
    } catch ( e ) {
        res.send ( formatResponse ( 0 , e , null ) )
    }
} )
module.exports = router;
