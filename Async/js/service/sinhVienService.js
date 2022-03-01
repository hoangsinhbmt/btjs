const BASE_URL = "https://620e4f4d585fbc3359ddab9b.mockapi.io/sinhvien";

const sinhVienService = {
  layDanhSachSinhVien: function () {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
  themSinhVien: function (_data) {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: _data,
    });
  },
  xoaSinhVien: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
  layChiTietSinhVien: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  capNhatSinhVien: function (id, _data) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "PUT",
      data: _data,
    });
  },
};