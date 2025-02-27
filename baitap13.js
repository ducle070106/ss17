let money= +prompt("nhập vào số tiền gửi ngân hàng");
let save=money;
let month= +prompt("nhập vào số tháng gửi ngân hàng");
let year=Math.floor(month/12);
let extraMonth=month%12;
while(year>0){
    money=money*1.043;
    year--;
}
money=money*(1+extraMonth*(0.043/12));
document.write("bạn gửi ngân hàng ",save," tiền thì sau ",month," tháng bạn nhận được tiền lãi là ",money-save);
document.write("<br>hoặc là ",save*0.043/12*month);