let r= +prompt("nhập vào giá trị bán kính của hình trụ");
let h= +prompt("nhập vào giá trị chiêu cao của hình trụ");
alert("diện tích xung quanh của hình trụ là "+(2*Math.PI*r*h).toFixed(2)+"\ndiện tích toàn phần của hình trụ là "+(2*Math.PI*r*h+2*Math.PI*r*r).toFixed(2)+"\nthể tích của hình trụ là "+(Math.PI*r*r*h).toFixed(2)+"\nchu vi đáy của hình trụ là "+(2*Math.PI*r).toFixed(2));