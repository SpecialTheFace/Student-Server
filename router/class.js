const express = require ( "express" );
const { formatResponse } = require ( "../utils/responseFormat" );
const {
    findAllClassService ,
    modifyClassInformationService ,
    addClassService ,
    deleteClassInformationService
} = require ( "../serviceLayer/class" );

const router = express.Router ();

// 获取所有班级信息
router.get ( '/' , async ( req , res ) => {
    const data = await findAllClassService ();
    res.send ( formatResponse ( 1 , '班级数据获取成功' , data ) );
} )

// 修改班级信息
router.put ( '/:id' , async ( req , res ) => {
    try {
        const data = await modifyClassInformationService ( req.params.id , req.body );
        res.send ( formatResponse ( 1 , '班级数据更新成功' , data ) )
    } catch ( e ) {
        res.send ( formatResponse ( 0 , e , null ) )
    }
} )

// 添加班级
router.post ( '/' , async ( req , res ) => {
    const data = await addClassService ( req.body );
    res.send ( formatResponse ( 1 , '添加班级成功' , data ) )
} )

// 删除班级
router.delete ( '/:id' , async ( req , res , ) => {
    try {
        const data = await deleteClassInformationService ( req.params.id );
        res.send ( formatResponse ( 1 , data , null ) )
    } catch ( e ) {
        res.send ( formatResponse ( 0 , e , null ) )
    }
} )

module.exports = router;
