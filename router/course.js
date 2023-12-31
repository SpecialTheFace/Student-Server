const express = require ( "express" );
const { formatResponse } = require ( "../utils/responseFormat" );
const {
    findAllCourseService ,
    modifyCourseInformationService ,
    addCourseService , deleteCourseInformationService
} = require ( "../serviceLayer/course" );

const router = express.Router ();


// 获取所有课程信息
router.get ( '/' , async ( req , res ) => {
    const data = await findAllCourseService ();
    res.send ( formatResponse ( 1 , '课程数据获取成功' , data ) );
} )

// 修改课程信息
router.put ( '/:id' , async ( req , res ) => {
    try {
        const data = await modifyCourseInformationService ( req.params.id , req.body );
        res.send ( formatResponse ( 1 , '课程数据更新成功' , data ) )
    } catch ( e ) {
        res.send ( formatResponse ( 0 , e , null ) )
    }
} )

// 添加一门课程
router.post ( '/' , async ( req , res ) => {
    const data = await addCourseService ( req.body );
    res.send ( formatResponse ( 1 , '添加课程成功' , data ) )
} )

// 删除课程
router.delete ( '/:id' , async ( req , res , ) => {
    try {
        const data = await deleteCourseInformationService ( req.params.id );
        res.send ( formatResponse ( 1 , data , null ) )
    } catch ( e ) {
        res.send ( formatResponse ( 0 , e , null ) )
    }
} )

module.exports = router;
