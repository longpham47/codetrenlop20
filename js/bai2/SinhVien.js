/**
 * lớp đỏi tuong SinhVien
 * khai báo cấc thuộc tính phươbng thức lớp dối tuong jsinh viên
 */


function SinhVien(maSV, tenSV, email, password, ngaySinh, khoaHoc, diemtoan, diemly, diemhoa) {
    this.maSV = maSV;
    this.tenSV = tenSV;
    this.email = email;
    this.password = password;
    this.ngaySinh = ngaySinh;
    this.khoaHoc = khoaHoc;
    this.toan = diemtoan;
    this.ly = diemly;
    this.hoa = diemhoa;
    this.dtb = 0;

    this.tinhDTB = function () {
        this.dtb = (this.toan + this.ly + this.hoa) / 3;
    }

}