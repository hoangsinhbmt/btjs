function SV(name, id, email, toan, ly, hoa) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.toan = toan;
  this.ly = ly;
  this.hoa = hoa;

  this.getDiemTb = function () {
    console.log("123");
    return (this.toan * 1 + this.hoa * 1 + this.ly * 1) / 3;
  };
}