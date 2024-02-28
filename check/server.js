const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const fs = require('fs');

// 设置模板引擎为Pug  
app.set('view engine', 'pug');

// 设置静态文件路径
app.use(express.static('public'));

// 使用body-parser中间件来解析JSON请求体  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 创建数据库连接
const db = mysql.createConnection({
    host: 'xxx',
    user: 'xxx',
    password: 'xxx',
    database: 'xxx'
})

// 连接数据库
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log("Connected to database");
})


// 渲染首页
app.get('/', (req, res) => {
    db.query('select * from `students` ORDER BY classid ASC',(err, results)=>{
        if(err){
            console.log(err);
        }else{
            res.render('index', {students: results});      
        }
    })
});



const port = port;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});