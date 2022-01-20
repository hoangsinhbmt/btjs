function insonguyento(){
    var SoNguyenTo = document.getElementById("songuyento").value *1;
    var kq = "";
    for(var i = 1; i<=SoNguyenTo; i++){
        kq += i+", ";
    }
    document.getElementById("ketqua5").innerHTML=kq;
}