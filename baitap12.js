let n= +prompt("nhập vào giá trị dương");
if((!Number.isInteger(n))||n<=0){
    alert("không phải số dương");
    location.reload();
}
let save=n;
let m="";
while(n/2!=0){
    m=n%2+m;
    n=Math.floor(n/2);
}
alert("số nhị phân của "+save+" là "+m);
location.reload();