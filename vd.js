var express =  require('express');
var app = express();
const PORT = 8080;

app.get( '/' , homePage);
function homePage(req,res){
    res.send("Home PAGE !");
}

app.get( '/login' , loginPage);
function loginPage(req,res){
    accsubmit = {
        username : req.query.inaccount,
        password : req.query.password
    };
    console.log(accsubmit);
    res.sendFile(__dirname + "/view/login.html")
}

app.get( '/product' , productPage);
function productPage(req,res){
    res.send("Product PAGE !");
}
app.get( '/product/payment' , paymentPage);
function paymentPage(req,res){
    res.send("Payment PAGE !");
}
app.get( '/order' , orderPage);
function orderPage(req,res){
    res.send("Order PAGE !");
}

app.get( '/report' , reportPage);
function reportPage(req,res){
    res.send("Report PAGE !");
}


app.listen(PORT,() =>
    {
        console.log("Server running !");
    }
);