// bai1
function sapxep(){
    var soThu1 = document.getElementById("so1").value * 1;
    var soThu2 = document.getElementById("so2").value * 1;
    var soThu3 = document.getElementById("so3").value * 1;
    var so = [soThu1,soThu2,soThu3];
    console.log({so});
    so.sort();
    document.getElementById("ketqua").innerHTML = so;
    
}
// bai2
function chaohoi(){
    var thanhVien = document.getElementById("thanhvien").value * 1;
    var loiChao;
    switch(thanhVien){
        case 1:
        loiChao="Con chào Bố";
        break;
        case 2:
        loiChao="Con chào Mẹ";
        break;
        case 3:
        loiChao="Em chào Anh";
        break;
        case 4:
        loiChao="Anh chào Em";
        break;
        default:
        alert("mời bạn chọn");
        loiChao="";
        break;
    }
    document.getElementById("loichao").innerHTML=loiChao;
}

// bai3
function chanle(){
    var soThu1 = document.getElementById("sothu1").value * 1;
    var soThu2 = document.getElementById("sothu2").value * 1;
    var soThu3 = document.getElementById("sothu3").value * 1;
    var so = [soThu1,soThu2,soThu3];
    var le = 0;
    var chan = 0;
    for (var i = 0; i < 3; i++){
       if(so[i] % 2 == 0){
           chan++;
       }
       else{
           le++;
       }  
    }
    document.getElementById("ketqua3").innerHTML= "Có "+chan+" số chẵn và " + le + " số lẻ"
}

// bai4
function tamgiac(){
    var a = document.getElementById("canh1").value * 1;
    var b = document.getElementById("canh2").value * 1;
    var c = document.getElementById("canh3").value * 1;
    var kq;
    if (a>=b+c||b>=c+a||c>=a+b){
        kq = "Tam giác không hợp lệ"
    }
    else if(a==b && b==c && a==c){
        kq = "Tam giác đều"
    }
    else if(a==b||b==c||c==a){
        kq = "Tam giác cân"
    }
    else if(a*a == b*b + c*c|| b*b == a*a + c*c || c*c == a*a + b*b){
        kq = "Tam giác vuông"
    }
    else if(a*a == b*b + c*c|| b*b == a*a + c*c || c*c == a*a + b*b && a==b||b==c||c==a){
        kq = "Tam giác vuông cân"
    }
    document.getElementById("tamgiac").innerHTML=kq;
}