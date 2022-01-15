function thuesuat(thunhapchiuthue){
    if(thunhapchiuthue<=60){
        return 0.05;
    }else if(thunhapchiuthue > 60 && thunhapchiuthue <= 120){
        return 0.1;
    }else if(thunhapchiuthue > 120 && thunhapchiuthue <= 210){
        return 0.15;
    }else if(thunhapchiuthue > 210 && thunhapchiuthue <= 384){
        return 0.2;
    }else if(thunhapchiuthue > 384 && thunhapchiuthue <= 624){
        return 0.25;
    }else if(thunhapchiuthue > 624 && thunhapchiuthue <= 960){
        return 0.3;
    }else if(thunhapchiuthue > 960){
        return 0.35;
    }

}
function tinhthue(){
    var hoVaTen = document.getElementById("hovaten").value;
    var thuNhap = document.getElementById("thunhap").value*1;
    var soNguoi = document.getElementById("songuoi").value*1;
    var thunhapchiuthue = thuNhap - 4 - soNguoi * 1.6;
    var thue = thunhapchiuthue * thuesuat(thunhapchiuthue);
    document.getElementById("tienthue").innerHTML="Tiền thuế của "+hoVaTen+" là: "+thue+" Triệu VNĐ";
}

