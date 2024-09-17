const path = require('path');
const express = require('express');//nạp thư viện
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();//khởi tạo 1 cái func app
const port = 3000;//run website ở cái cổng này

app.use(express.static(path.join(__dirname, 'public')));

//post dữ liệ đi dưới dạng json
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//Cấu hình đường dẫn tới thư mục views
app.set('views', path.join(__dirname, 'resources', 'views'));

//định nghĩa cái route
app.get('/', (req, res) => {
    res.render(`home`);
});

app.get('/news', (req, res) => {
    res.render(`news`);
});

app.get('/search', (req, res) => {
    res.render(`search`);
});
app.post('/search', (req, res) => {
  console.log(req.body);
    res.send('');
});

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})