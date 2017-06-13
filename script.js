//function showMsg(msg1,msg2){
//    alert(msg2+msg1+"hello ker!-x");
//}

var showMsg = function(msg1,msg2){
    var msgall = msg1+msg2;
    return msgall;
}

var random = function(m,n){
    console.log(m,n);
    return Math.floor(Math.random()*(m-n+1)+n);
}      

