var Spinner = document.getElementById("spinner");
function addClass() {
  Spinner.classList.add("active");
}
function removeClass() {
  Spinner.classList.remove("active");
}

let renderTableDSSV = () => {
  sinhVienService
    .layDanhSachSinhVien()
    .then((res) => {
      var convertedArr = res.data.map((item) => {
        let { name, id, email, toan, ly, hoa } = item;
        return new SV(name, id, email, toan, ly, hoa);
      });
      sinhVienControllers.renderTable(convertedArr);
      removeClass();
    })
    .catch((err) => {
      console.log(err);
    });
};
renderTableDSSV();

document.getElementById("btn-add").addEventListener("click", function () {
  let svObject = sinhVienControllers.layThongTinTuForm();
  // let isValid =
  //   validator.kiemTraDoDai(svObject.name, "spanTenSV") &
  //   validator.kiemTraKiTu(svObject.name, "spanTenSV") &
  //   validator.kiemTraSo(svObject.id, "spanMaSV");
  // isValid &&
    sinhVienService
      .themSinhVien(svObject)
      .then((res) => {
        console.log(res);
        renderTableDSSV();
      })
      .catch((err) => {
        console.log(err);
      });
});

function xoaSV(id) {
  sinhVienService
    .xoaSinhVien(id)
    .then((res) => {
      renderTableDSSV();
    })
    .catch((err) => {
      console.log(err);
    });
}

var sinhvien=[]

function laySV(id) {
  sinhVienService
    .layChiTietSinhVien(id)
    .then((res) => {
    document.getElementById("txtTenSV").value = res.data.name;
    document.getElementById("txtMaSV").value = res.data.id;
    document.getElementById("txtEmail").value = res.data.email;
    document.getElementById("txtDiemToan").value = res.data.toan;
    document.getElementById("txtDiemLy").value = res.data.ly;
    document.getElementById("txtDiemHoa").value = res.data.hoa;
    sinhvien=res.data
    })
    .catch((err) => {
      console.log(err);
    });
}


document.getElementById("btn-put").addEventListener("click", function (){
  let svObject = sinhVienControllers.layThongTinTuForm();
  // let isValid =
  //   validator.kiemTraDoDai(svObject.name, "spanTenSV") &
  //   validator.kiemTraKiTu(svObject.name, "spanTenSV") &
  //   validator.kiemTraSo(svObject.id, "spanMaSV");
  // isValid &&
    sinhVienService
      .capNhatSinhVien(sinhvien.id, svObject)
      .then((res) => {
        renderTableDSSV();
      })
      .catch((err) => {
        console.log(err);
      });
})