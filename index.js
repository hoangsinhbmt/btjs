var hello = document.getElementById("hello");
console.log({hello})
function dangnhap(){
    var userNameEl = document.getElementById("usernametxt").value;
    var passWordEl = document.getElementById("passwordtxt").value;
    if(userNameEl.value == ""){
        alert("ditmemay chua nhap ten dang nhap");
    }
    else if(passWordEl.value == ""){
        alert("ditmemay chua nhap mat khau");
    }
    else{
    console.log({userNameEl})
    console.log({passWordEl})
    }
}
function doichu(){
    var textEl = document.getElementById("texttxt");
    textEl.innerText = "ditmemay";
    textEl.style.color = "red";
}