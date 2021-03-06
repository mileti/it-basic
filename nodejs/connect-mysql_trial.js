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
connection.connect((err) => {
    if(err){
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});


//queryの実行
connection.query(
    'select * from item',
    (err, results, filelds) => {
        console.log('\n 「select * from item」\n');
        console.log(results);
});


connection.query(
    'select * from item',
    (err, results, filelds) => {
        console.log('\n 「select * from item」の1つ目の要素\n');
        console.log(results[0]);
});


connection.query(
    'select * from item',
    (err, results, filelds) => {
        console.log('\n 「select * from item」の1つ目の要素のname\n');
        console.log(results[0]['name']);
});

//演習1
connection.query(
    'select * from item',
    (err, results, filelds) => {
        console.log('\n 「select * from item」\n');
        console.log(results);

        let total  = 0;

        for(let i = 0 ; i < results.length ; i++){
            total = total + results[i]['price'];   
        }

        console.log('priceの合計= ' + total);

});

//演習2
connection.query(
    'select * from emp',
    (err, results, filelds) => {
        console.log('\n 「select * from emp」\n');
        console.log(results);

        for(let j = 0 ; j < results.length ; j++){

            
            if(results[j]['name'].startsWith('山')){
                console.log(results[j]['name']);
            }

        }


});







//接続を閉じる
connection.end();
