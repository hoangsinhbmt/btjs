function loaikh(){
    var loaiKH = document.getElementById("loaikhachhang").value*1;
    if(loaiKH == 2){
        $(".ketnoi").addClass("active");
    }
    else if(loaiKH == 1){
        $(".ketnoi").removeClass("active");
    }
}
function phicobandoanhnghiep(sokenh){
    if(sokenh<10){
        return sokenh*7.5
    }else{
        return 75+5*(sokenh-10);
    }
}
function tinhtiencap(){
    var maKH = document.getElementById("makh").value;
    var loaiKH = document.getElementById("loaikhachhang").value*1;
    var soKetNoi = document.getElementById("soketnoi").value*1;
    var soKenhCaoCap = document.getElementById("sokenhcaocap").value*1;
    var tiencap;
    if(loaiKH == 1){
    tiencap = 4.5+20.5+7.5*soKenhCaoCap;
    }
    else if(loaiKH == 2){
    tiencap = 15 + phicobandoanhnghiep(soKetNoi)+50*soKenhCaoCap
    }
    document.getElementById("tiencap").innerHTML="Tiền cáp của khách hàng "+maKH+" là: " +tiencap;
}  