//パッケージの読み込み
const mysql = require('mysql2');

//データベースとの接続
const connection = mysql.createConnection({
    host : 'localhost',
    user: '',
    password: '',
    database: 'restaurant'
});

//接続できていないときのエラー
connection.connect(function(err){
    if(err){
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});


//queryの実行
connection.query(
    'select * from item',
    function(err, results, filelds){
        console.log('\n 「select * from item」\n');
        console.log(results);
});



connection.query(
    'select * from item',
    function(err, results, filelds){
        console.log('\n 「select * from item」の1つ目の要素\n');
        console.log(results[0]);
});


connection.query(
    'select * from item',
    function(err, results, filelds){
        console.log('\n 「select * from item」の1つ目の要素のname\n');
        console.log(results[0]['name']);
});

//接続を閉じる
connection.end();
