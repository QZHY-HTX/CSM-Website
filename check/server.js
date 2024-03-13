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
// ... 其他代码保持不变 ...

// 查看单个学生详细信息
app.get('/student_details/:sid', async (req, res) => {
    const sid = req.params.sid;
    pool.query('SELECT * FROM `students` WHERE sid = ?', [sid], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.render('index', { students: results });
    });
});

// ... 其他代码保持不变 ...

const port = port;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});