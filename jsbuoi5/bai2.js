function tinhtiendien(){
    var kwDien = document.getElementById("kwdien").value*1;
    var tienDien;
    if(kwDien<0){
        alert("mời bạn nhập lại")
    }
    else if(kwDien <= 50){
        tienDien= kwDien*500;
    }
    else if(kwDien>50 && kwDien<=100){
        tienDien= 50*500 + (kwDien-50)*650;
    }
    else if(kwDien>100 && kwDien<=200){
        tienDien= 50*500 + 50*650 + (kwDien-100)*850;
    }
    else if(kwDien>200 && kwDien<=350){
        tienDien= 50*500 + 50*650 + 100*850 + (kwDien-200)*1100;
    }
    else if(kwDien>350){
        tienDien= 50*500 + 50*650 + 100*850 + 150*1100 + (kwDien-350)*1300;
    }
    document.getElementById("tiendien").innerHTML=tienDien;
}