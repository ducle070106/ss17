let input=prompt("nhập ngày thứ nhất(YYYY/MM/DD)");
let day1=new Date(input);
input=prompt("nhập ngày thứ hai(YYYY/MM/DD)");
let day2=new Date(input);
document.write("Độ lệch là ",Math.abs((day1-day2)/86400000)," ngày");