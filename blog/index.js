const express = require('express');//nạp thư viện
const app = express();//khởi tạo 1 cái func app
const port = 3000;//run website ở cái cổng này

//định nghĩa cái route
app.get('/', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a+b;
    res.send('Hello world!');//khi đi vào trang chủ sẽ trả ra helloWorld
})

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})