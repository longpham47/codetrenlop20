/**
 * var 
 * number ; string ; boolean , array
 * 
 */
// tạo rát nhiều biến khó tìm kiếm sap xêp dữ liệu
// var ma = "sv001" ;
// var ten = "pham long";
// var toan = 10;
// var van = 9;
// nhuowcj ddiemr khi theem xoas suwar phải xử lý trên nhiều diuwx liệu
// var ma = ["sv001" ,"sv002","sv003"  ];
// var ten = ["A", "B",]
// var toan = [10,9]

//?  cần có kiểu dữ liệugiúp chúng ta tổ cưc lưu dữ liệu của sinh viên rõ rang 
//? giúp tổ chưc dnah sách nhièu sinh viên mà chỉ càn một biến mảng 

//!          ĐÓI TƯỢNG (Object)
// khai báo dối tương
var sv1 = {
    // các thông tin cần lưu trử của obj 
    //! thuộc tính (PROPERTY)

    id: "sv001",
    name: "phamlong",
    toan: 10,
    van: 9,
    //! phương thức (method)
    //? this : đại diện cho đói tong sinh viên giúp truy xuất thuôc jtính của đói tượng
    // gọi bên trong phuòn thức của đói tượng
    tinhDTB: function () {
        return (this.toan + this.van) / 2
    }
}
console.log(sv1);

//?       đối tương.tên thuộc tính ( bên ngoài đối tượng)
console.table(sv1.toan);
console.log(sv1["toan"]);
// gọi phương thức
console.log(sv1.tinhDTB());

//!        lớp đói tượng (Class)
// chứ các thuộc tính phuong thức chung cho tất cả đoi tương  cùng loại(loại sinh viên)

//?    cách khai báo ES5(function)
// pascal case (viết hoa chữ cái đàu)
function SinhVien(ma, ten, diemtoan, diemVan, loai) {
    //this : đại diẹn cho lớp đói tượng (sinh viên) =>> truy xuẩt được các thuộc tính (gọi thuộc tính)
    // thuọc tính
    this.id = ma;
    this.name = ten;
    this.toan = diemtoan;
    this.van = diemVan;
    this.loaiSV = loai

    // phuong thức
    this.tinhDTB = function () {
        return (this.toan + this.van) / 2;
    }

}


// sử dụng lớp dối tượng =>> tạo thể hiên của lớp (Instance) 
var sv2 = new SinhVien("sv002", "long pham", 10, 9);
console.table(sv2);
console.log(sv2.tinhDTB());

/**
 *  ! bài luyện 1
 *1 tạo lớp đối tượng sinhvien =>> toạ nhanh các dối tươngl
 * 2 lấy thông tin thừ form =>> luuw vào thuộc tính của lơp dối tuong(tạo sinh viên mới)
 * 3 đme các thông tin của sinh viên hiển thị theo yêu cầu
 */

function SinhVien(ma, ten, diemtoan, diemVan, loai) {

    this.id = ma;
    this.name = ten;
    this.toan = diemtoan;
    this.van = diemVan;
    this.loaiSV = loai


    this.tinhDTB = function () {
        return (this.toan + this.van) / 2;
    }

    this.xepLoai = function (dtb) {
        if (9 <= dtb && dtb <= 10) {
            return "giỏi"
        } else if (7 <= dtb && dtb < 9) {
            return "khá"
        } else if (0 <= dtb && dtb < 7) {
            return "tb"
        } else {
            return " chưa xếp loại"
        }
    }

}

function thongTinSV() {
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var diemtoan = Number(document.getElementById("txtDiemToan").value);
    var diemVan = Number(document.getElementById("txtDiemVan").value);
    var loai = document.getElementById("loaiSV").value;

    console.log(ma, ten, diemtoan, diemVan, loai);

    //tạo thể hiên 
    var sv5 = new SinhVien(ma, ten, diemtoan, diemVan, loai);
    console.log(sv5);
    console.log(sv5.tinhDTB());
    
  

    //! callback function : 1 hàm nhận giá trị tham số từ 1 hàm khac
    /**
     * dkiện dùng : 1 thàm truyền là có return
     *              2 hàm nhận giá tị cần truyên giá trị vào thâm số
     */
    // var dtb = sv5.tinhDTB()
    // var loaiHocLuc = sv5.xepLoai(dtb);
    var loaiHocLuc = sv5.xepLoai(sv5.tinhDTB());
    console.log(loaiHocLuc);
    document.getElementById("spanTenSV").innerHTML = sv5.name;
    document.getElementById("spanMaSV").innerHTML = sv5.id;
    document.getElementById("spanLoaiSV").innerHTML = sv5.loaiSV;
    document.getElementById("spanDTB").innerHTML = sv5.tinhDTB();
    // document.getElementById("spanDTB").innerHTML = sv5.tinhDTB()
    document.getElementById("spanXepLoai").innerHTML = sv5.xepLoai(sv5.tinhDTB());

}
document.querySelector(".container-fluid .btn").onclick = thongTinSV;

