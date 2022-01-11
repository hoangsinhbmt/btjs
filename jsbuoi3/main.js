function tinhluong(){
   var ngay= document.getElementById("ngaylam");
   var luong = document.getElementById("luong");
   luong.innerHTML= ngay.value * 100000;
}
function tinhtb(){
    var so1 = Number(document.getElementById("so1").value);
    var so2 = Number(document.getElementById("so2").value);
    var so3 = Number(document.getElementById("so3").value);
    var so4 = Number(document.getElementById("so4").value);
    var so5 = Number(document.getElementById("so5").value);
    var kq  = document.getElementById("ketqua");
    kq.innerHTML=(so1+so2+so3+so4+so5)/5;
    sothu1.value.focus();
}
function tinhtien(){
    var usd = document.getElementById("USD");
    var vnd = document.getElementById("VND");
    vnd.innerHTML= usd.value*23500;
}
function tinhhcn(){
    var dai = Number(document.getElementById("chieudai").value);
    var rong = Number(document.getElementById("chieurong").value);
    var cv = document.getElementById("chuvi")
    var dt = document.getElementById("dientich")
    cv.innerHTML = "Chu vi :" + (dai+rong)*2;
    dt.innerHTML = "Dien tich :"+ dai*rong;
}