const express = require ( "express" );
const { formatResponse } = require ( "../utils/responseFormat" );
const { findAllTeacherService , modifyTeacherInformationService } = require ( "../serviceLayer/teacher" );

const router = express.Router ();


// 获取所有教师信息
router.get ( '/' , async ( req , res ) => {
    const data = await findAllTeacherService ();
    res.send ( formatResponse ( 1 , '教师数据获取成功' , data ) );
} )

// 修改教师信息
router.put ( '/:id' , async ( req , res ) => {
    try {
        const data = await modifyTeacherInformationService ( req.params.id , req.body );
        res.send ( formatResponse ( 1 , '教师数据更新成功' , data ) )
    } catch ( e ) {
        res.send ( formatResponse ( 0 , e , null ) )
    }
} )

module.exports = router;
