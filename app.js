const express = require ( 'express' );

const app = express ();

// 数据库同步连接
require ( './databaseModel/dbConnection' );
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 路由导入
const studentRouter = require ( './router/student')
// 路由注册
app.use ('/api/student',studentRouter );

app.listen ( 8080 , () => {
    console.log ( "server listening on port 8080" );
} )
