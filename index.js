var express = require('express')
var bodyParser = require('body-parser')
var app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function(req, res){
    res.render('inputAngka/index')
})

app.post('/segitiga', function(req, res){
    console.log(req.body)
    var angka = req.body.angka
    var arrayAngka = angka.split("")
    var segitiga = []
    for(var i = 1; i < arrayAngka.length + 1; i++){
        var addZero = []
        addZero.push(arrayAngka[i - 1])
        for(var j = 0; j < i; j++){
            addZero.push("0")
        }
        segitiga.push(addZero.join(""))
    }
    res.json({"data":segitiga})
})

app.post('/ganjil', function(req, res){
    var angka = req.body.angka
    var odd = [0]
    for(var i = 0; i < angka.length; i++){
        if(i % 2 === 0){
        }else{
            odd.push(i)
        }
    }
    res.json({"data":odd.join(",")})
})

app.post('/prima', function(req, res){
    var angka = req.body.angka
    var prime = []
    for(var i = 2; i < angka.length; i++){
        var prima = true
        for(var j = 2; j < angka.length; j++){
            if(i != j){
                if(i % j === 0){
                    prima = false
                    break;
                }
            }
        }
        if(prima){
            prime.push(i)
        }
    }
    res.json({"data":prime})
})

app.listen(8000)