function tinhgiaithua(){
    var soCanTim = document.getElementById("socantim").value*1;
    var kq = 1;
    for (var i = 1; i<=soCanTim; i++){
        kq *= i;
    }
    document.getElementById("ketqua3").innerHTML=kq;
}