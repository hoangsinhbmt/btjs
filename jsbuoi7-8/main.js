var mang = [];
function tongsoduong(num) {
  var sum = 0;
  num.map(function (item) {
    if (item > 0) {
      sum += item;
    }
  });
  return sum;
}
function demsoduong(arr) {
  var soDuongArr = arr.filter(function (item) {
    return item > 0;
  });
  return soDuongArr.length;
}
function timsonhonhat(arr) {
  let min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

function timsoduongnhonhat(arr) {
  let min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if ((min < 0 || min > arr[i]) && arr[i] > 0) {
      min = arr[i];
    }
  }
  return min;
}

function timsochancuoi(arr) {
  for (var i = arr.length; i > 0; i--) {
    if (arr[i] % 2 == 0) {
      return arr[i];
    }
  }
}
function sapxepmang(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      var tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;
    }
  }
  return arr;
}
function timsonguyento(n) {
  let flag = 1;
  if (n <= 2) return (flag = 0);
  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }
  return flag;
}
function demsonguyen(arr) {
  var soNguyenArr = arr.filter(function (item) {
    return item % 1 ==0;
  });
  return soNguyenArr.length;
}
function demsoam(arr) {
  var soAmArr = arr.filter(function (item) {
    return item<0;
  });
  return soAmArr.length;
}

function nhapmang() {
  var numBer = document.getElementById("txtNumber").value * 1;
  mang.push(numBer);
}
function xuatmang() {
  nhapmang();
  var kq = document.querySelector("#ketqua");
  var tongSoDuong = tongsoduong(mang);
  kq.innerHTML = "Xuất mảng: [ " + mang + " ]";
  kq.innerHTML += "<div></div>" + "Tổng số dương là: " + tongSoDuong;
  var demSoDuong = demsoduong(mang);
  kq.innerHTML += "<div></div>" + "Đếm số dương là: " + demSoDuong;
  var sonhonhat = timsonhonhat(mang);
  kq.innerHTML += "<div></div>" + "Số nhỏ nhất là: " + sonhonhat;
  var soduongnhonhat = timsoduongnhonhat(mang);
  kq.innerHTML += "<div></div>" + "Số dương nhỏ nhất là: " + soduongnhonhat;
  var sochancuoicung = timsochancuoi(mang);
  if (sochancuoicung == undefined) {
    sochancuoicung = -1;
  }
  kq.innerHTML += "<div></div>" + "Số chẵn cuối cùng là: " + sochancuoicung;
  var sapxep = sapxepmang(mang);
  kq.innerHTML += "<div></div>" + "Sắp xếp mảng: [ " + sapxep + " ]";
  var songuyento;
  for (let i = 0; i < mang.length; i++) {
    if (timsonguyento(mang[i]) == 1) {
      songuyento = mang[i];
    } else songuyento = -1;
  }
  kq.innerHTML += "<div></div>" + "Số nguyên tố đầu tiên: " + songuyento;
  var songuyen = demsonguyen(mang);
  kq.innerHTML += "<div></div>" + "Số lượng số nguyên là: " + songuyen;

  var demSoAm =demsoam(mang);
  console.log(demSoAm);
  console.log(demSoDuong);

  if(demSoAm > demSoDuong){
    kq.innerHTML += "<div></div>" + "Số lượng số âm nhiều hơn số dương "
  }
  else if(demSoAm < demSoDuong){
    kq.innerHTML += "<div></div>" + "Số lượng số dương nhiều hơn số âm "
  }
  else{
    kq.innerHTML += "<div></div>" + "Số lượng số âm bằng số dương "
  }
}

function doicho() {
  var kq = document.querySelector("#ketqua2");
  var Num1 = document.getElementById("txtNumber1").value * 1;
  var Num2 = document.getElementById("txtNumber2").value * 1;
  const tmp = mang[Num1];
  mang[Num1] = mang[Num2];
  mang[Num2] = tmp;
  kq.innerHTML = "Xuất mảng sau khi đổi chỗ: [ " + mang + " ]";
}
