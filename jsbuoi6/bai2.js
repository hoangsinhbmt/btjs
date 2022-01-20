function tinhtoan(){
    var soX = document.getElementById("sox").value * 1;
    var soN = document.getElementById("son").value * 1;
    var kq = 0;
    for(var i = 1 ; i<=soN ; i++){
        kq += (soX ** i);
    }
    document.getElementById("ketqua2").innerHTML=kq;
}