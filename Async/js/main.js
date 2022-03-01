var Spinner = document.getElementById("spinner")
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
      var convertedArr=res.data.map((item)=>{
        let {name,id,email,toan,ly,hoa}=item;
        return new SV(name,id,email,toan,ly,hoa);
      })
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
  let isValid =
    validator.kiemTraDoDai(svObject.name, "spanTenSV") &
    validator.kiemTraKiTu(svObject.name, "spanTenSV") &
    validator.kiemTraSo(svObject.id, "spanMaSV");
  isValid &&
    sinhVienService
      .themSinhVien(svObject)
      .then((res) => {
        renderTaleDSSV();
      })
      .catch((err) => {
        console.log(err);
      });
});

function xoaSV(id) {
  sinhVienService
    .xoaSinhVien(id)
    .then((res) => {
      renderTaleDSSV();
    })
    .catch((err) => {
      console.log(err);
    });
}
function capNhatSV(){
  addClass();
  renderTableDSSV();
}

function suaSV(id,_data){
  let svObject = sinhVienControllers.capNhatSV(id,_data);
  suaSV()

  // let tenSV = document.getElementById("txtTenSV").value;
  //   let maSV = document.getElementById("txtMaSV").value;
  //   let emailSV = document.getElementById("txtEmail").value;
  //   let diemToan = document.getElementById("txtDiemToan").value * 1;
  //   let diemLy = document.getElementById("txtDiemLy").value * 1;
  //   let diemHoa = document.getElementById("txtDiemHoa").value * 1;
  //   tenSV=svObject.name;
  //   maSV=svObject.id;

}