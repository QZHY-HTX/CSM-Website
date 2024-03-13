    const express = require('express');
    const bodyParser = require('body-parser');
    const mysql = require('mysql');
    const app = express();

    // 设置模板引擎为Pug
    app.set('view engine', 'pug');

    // 设置静态文件路径
    app.use(express.static('public'));

    // 使用body-parser中间件来解析JSON请求体
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // 创建数据库连接池
    const pool = mysql.createPool({
        host: '',
        user: '',
        password: '',
        database: '',
    });

    // 渲染首页
    app.get('/', (req, res) => {
        pool.query('SELECT * FROM `students` ORDER BY `classid` ASC', (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal server error');
            }
            res.render('index', { students: results });
        });
    });

    // 查看单个学生详细信息
    // 查看单个学生详细信息

    app.get('/student_details/:sid', async (req, res) => {  
        const sid = req.params.sid;  
        pool.query('SELECT sid, sname, score1, score2, score3, score4, score5, score6, score7, score8 FROM `students` WHERE sid = ?', [sid], (err, results) => {  
            if (err) {  
                console.error(err);  
                return res.status(500).send('Internal server error');  
            }  
            const student = results[0]; // 假设结果集中只有一个学生  
            if (student) {  
                res.render('student_details', { student: student }); // 渲染学生详细信息页面  
            } else {  
                res.status(404).send('学生不存在');  
            }  
        });  
    });

   

    const port = port;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });