function khuvuc(diemcongkv){
    if (diemcongkv=="A"){
        return 2;
    }
    else if(diemcongkv=="B"){
        return 1;
    }
    else if(diemcongkv=="C"){
        return 0.5;
    }
    else if(diemcongkv=="X"){
        return 0;
    }
}
function doituong(diemcongdt){
    if (diemcongdt==1){
        return 2.5;
    }
    else if(diemcongdt==2){
        return 1.5;
    }
    else if(diemcongdt==3){
        return 1;
    }
}
function tinhdiem(){
    var diemChuan = document.getElementById("diemchuan").value * 1;
    var Mon1 = document.getElementById("mon1").value * 1;
    var Mon2 = document.getElementById("mon2").value * 1;
    var Mon3 = document.getElementById("mon3").value * 1;
    var khuVuc = document.getElementById("khuvuc").value;
    var doiTuong = document.getElementById("doituong").value*1;
    var tongDiem = Mon1+Mon2+Mon3+khuvuc(khuVuc)+doituong(doiTuong);
    var kq;
    if(khuvuc(khuVuc)==undefined){
        alert("Mời bạn nhập đúng khu vực")
        kq = "";
    }
    else if(doituong(doiTuong)==undefined){
        alert("Mời bạn nhập đúng đổi tượng")
        kq = "";
    }
    else if (tongDiem>=diemChuan){
        kq = "Bạn đã trúng tuyển với tổng điểm: "+tongDiem;
    }
    else{
        kq = "Bạn đã không trúng tuyển"
    }
    document.getElementById("ketqua").innerHTML=kq;
}