const express = require ( "express" );
const { findAllStudentService , modifyStudentInformationService } = require ( "../serviceLayer/student" );
const { formatResponse } = require ( "../utils/responseFormat" );

const router = express.Router ();


// 获取所有学生信息
router.get ( '/' , async ( req , res ) => {
    const data = await findAllStudentService ();
    res.send ( formatResponse ( 1 , '学生数据获取成功' , data ) );
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

module.exports = router;
