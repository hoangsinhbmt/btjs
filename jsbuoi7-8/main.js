var mang = [];
function tongsoduong(num) {
  var sum = 0;
  num.map(function (item) {
    if (item % 2 == 0) {
      sum += item;
    }
  });
  return sum;
}
function demsoduong(arr) {
  var soDuongArr = arr.filter(function (item) {
    while (item != 0) {
      return item % 2 == 0;
    }
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
    if((min < 0 || min > arr[i]) && arr[i] > 0 ) {
      min = arr[i];
  }
  }
  return min
}
function nhapmang() {
  var numBer = document.getElementById("txtNumber").value * 1;
  var kq = document.querySelector("#ketqua");
  mang.push(numBer);
  var tongSoDuong = tongsoduong(mang);
  kq.innerHTML = "Xuất mảng: [ " + mang + " ]";
  kq.innerHTML += "<div></div>" + "Tổng số dương là: " + tongSoDuong;
  var demSoDuong = demsoduong(mang);
  kq.innerHTML += "<div></div>" + "Đếm số dương là: " + demSoDuong;
  var sonhonhat = timsonhonhat(mang);
  kq.innerHTML += "<div></div>" + "Số nhỏ nhất là: " + sonhonhat;
  var soduongnhonhat = timsoduongnhonhat(mang);
  kq.innerHTML += "<div></div>" + "Số dương nhỏ nhất là: " + soduongnhonhat;
}
