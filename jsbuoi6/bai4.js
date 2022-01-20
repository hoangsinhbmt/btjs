function inthediv(){
    var n = document.getElementById("sothediv").value*1;
   for(var i = 0 ; i<n ; i++){
       if(i%2==0){
        var html = '<div style="background:red; height=100px; margin: 5px; padding:5px; color:#FFF; height = 100px"></div>';
        document.getElementById('ketqua4').insertAdjacentHTML('afterend', html);
       }
       else {
        var html = '<div style="background:blue; height=100px; margin: 5px; padding:5px; color:#FFF"></div>';
        document.getElementById('ketqua4').insertAdjacentHTML('afterend', html);
       }
   }
   html.reset();
}