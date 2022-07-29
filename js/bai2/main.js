/**
 * chưa các ham sử lý UI
 */
//them sinh viên
// hàm rút gọn 
// Global variable
// amng snh viên và các chưuc năng củ DanhSachSVsẻ dung cho toàn ứng dụng
//=> dsv thể hiên của DanhSachSV là biến toàn cục
var dssv = new DanhSachSV();
var validation = new Validation();




function getELE(id) {
    return document.getElementById(id);
}

function setLocalStorage() {
    // localStorage : đối tượng có sẳn của JS giúp thao tác về LocalStorage
    // dử liệu lưu ở LocalStorage là kiểu json => chuyên thừ array => Json
    // JSON : ĐÓI TUONG js GIUP S CHUỔI JSOn

    // hi mảng sinhvien thay dổi thì gọi hàm setLocalStorage để cập nhạt cho loacal

    localStorage.setItem("DSSV", JSON.stringify(dssv.mangSV));
}

function getLocalStorage() {
    // getitem =>> trả về dữ liẹu json
    // Json về array
    // LocalStorage chi lưu ở truyen đang chạy ứng dụng
    //! nếu không có localStorage thì mangSV sẻ bị gán undefined =>> mangSV bị đỏi iểu dữ liệu sang undefined thì ko dung dk chưc năng

    if (localStorage.getItem("DSSV") != undefined) {
        dssv.mangSV = JSON.parse(localStorage.getItem("DSSV"));
    }
    hienThiDS(dssv.mangSV);
}
getLocalStorage();

function themSinhVien() {
    var maSV = getELE("txtMaSV").value;
    var tenSV = getELE("txtTenSV").value;
    var email = getELE("txtEmail").value;
    var password = getELE("txtPass").value;
    var ngaySinh = getELE("txtNgaySinh").value;
    var khoaHoc = getELE("khSV").value;
    var diemtoan = getELE("txtDiemToan").value;
    var diemly = getELE("txtDiemLy").value;
    var diemhoa = getELE("txtDiemHoa").value;

    console.log(maSV, tenSV, email, password, ngaySinh, khoaHoc, diemtoan, diemly, diemhoa);

    var isValid = true
    //! các bước kiêmt tra dử liệu
    /**
     * issue (vấn đề): tên sinh viên có value mã sv bỏ trông nhưng vẫn cho thêm sinh viên
     * expected : chỉ được thêm sinh viên khi tất cả dữ liệu hợp lệ nếu có loiĩ thì yhông báo và ko cho lưu
     * root cause : do dấu = ; chỉ dữ lại kêt ưqua cuối ,kết quả cu bị gán đè mất giá trị
     * Soluton(gải pháp) c1 : && :checkma && check tên  false && true => flase (cánh làm khó đọc dài code)
     *                   c2 : & : tính toán bitnary (0101..) , true : 1; false 0 =>> checkma & checten => 0&1 =>0
     *      isvalid(cuối cug) = isvalid & checkEmty
     * =>  isvalid &= checkEMty
     */



    //  ! mã SV( kiểm tra rỗng, không được trùng,)

    isValid &= validation.checkEmpty(maSV, "spanMaSV", " mã sinh viên không được để trống")
        && validation.checkID(maSV, "spanMaSV", " mã sinh viên không được trùng", dssv.mangSV);

    //! tên sinh viên ()
    isValid &= validation.checkEmpty(tenSV, "spanTenSV", "tên sinh viên không bỏ trống") &&
        validation.checkName(tenSV, "spanTenSV", " tên sinh viên chỉ được chứa ký tự chữ");

    //! email
    isValid &= validation.checkEmpty(email, "spanEmailSV", " email sinh viên không được để trống")
        && validation.checkEmail(email, "spanEmailSV", " email sinh viên không đuunsg đinh dạng");


    //!
     isValid &= validation.checkDrop("khSV","spanKhoaHoc","khoá học chưa được chọn");


    if (isValid) {
        //tất cả dữ liệu hợp lệ
        // TẠO THỂ HIỆN CỦA SINH VIÊN
        var sv = new SinhVien(maSV, tenSV, email, password, ngaySinh, khoaHoc, Number(diemtoan), Number(diemly), Number(diemhoa));
        sv.tinhDTB();
        console.log(sv);

        // thêm sinh viên vào mảng sinh vien

        dssv.themSV(sv);
        console.log(dssv.mangSV);

        // gọi hàm hiển thị
        hienThiDS(dssv.mangSV);
        setLocalStorage();

        resetForm();

    }

}





/**
 * input : mangSV
 * 
 * 1 : duyệt mảng để lấy ra từng đói  tuọng sinh viên
 * 2 : tạo hangd tr cho tùng sv 
 * 3 : tạo từng td ,đưa cácthuộc tính của sinh viên đặt vào td
 * 4 : đem tất cả  các thẻ tr hiển thị lên UI
 *  
 * OUTPUT : các thẻ tr đẻ hiẹn thi lên html( 1 thẻ tr là một sv , td là thuộc tính sv )
 */

//hiển tjị danh sách sinhvien

function hienThiDS(mangSV) {
    console.log(mangSV);
    //map() : hàm giúp duyệt mảng => lấy ra từng phàn tử của mảng ( cú pháp)
    //ham1(ham2()) : callback function
    // function(){}: hàm ẩn damh , anonymous function
    // map(phần tử của mảng, vị trí phân tử)

    // sau khi duyệt mảng =>> content = " <tr><>"
    var content = "";
    mangSV.map(function (sv, index) {
        console.log(sv);
        // string template : ``
        //var trELE =`...`
        content += `
        <tr>
            <td>${sv.maSV}</td>
            <td>${sv.tenSV}</td>
            <td>${sv.email}</td>
            <td>${sv.ngaySinh}</td>
            <td>${sv.khoaHoc}</td>
            <td>${sv.dtb}</td>
            <td>
            <button class="btn btn-info" onclick="xemChiTiec('${sv.maSV}')">Xem</button>
            <button class="btn btn-danger" onclick="xoaSinhVin('${sv.maSV}')">Xoá</button>
            </td>
        </tr>
        `;
        // console.log(trELE);
        // content += trELE;

    })

    // console.log(content);
    getELE("tbodySinhVien").innerHTML = content;
}



//!     xoá
// xoá sv =>> xoá phần tử của mảng 
/**
 * tìm được vị trí của phàn tử cần xoá
 * dựa vào masv(truòn dữ liệu bắt buộc và duy nhất )để tìm kiếm sính vien
 * 
 * 
 */

function xoaSinhVin(ma) {
    console.log(ma);
    dssv.xoaSV(ma);
    hienThiDS(dssv.mangSV);
    setLocalStorage(dssv.mangSV);



}


//!      cập nhật
/**
 * cập nhật : + xem thông tin => click buton xem =>> lấy thông tin =>> hieiẻn thị thong tin sv lên form
 *             + cạp nhật =>> edit thôn tin càn sửa ==> click button cap nattj => lấy gí trị tùe form lưu vào sv
 *                          => tìm vị trí sv cần cập nhật gán giá trị sv mới vào vị trí timd thấy
 * 
 */
function xemChiTiec(ma) {
    console.log("xem", ma);
    var viTri = dssv.timViTri(ma);
    if (viTri > -1) {
        //tìm thấy 
        var svTim = dssv.mangSV[viTri];
        console.log(svTim);

        getELE("txtMaSV").value = svTim.maSV;
        getELE("txtMaSV").disabled = true;

        getELE("txtTenSV").value = svTim.tenSV;
        getELE("txtEmail").value = svTim.email;
        getELE("txtPass").value = svTim.password;
        getELE("txtNgaySinh").value = svTim.ngaySinh;
        getELE("khSV").value = svTim.khoaHoc;
        getELE("txtDiemToan").value = svTim.toan;
        getELE("txtDiemLy").value = svTim.ly;
        getELE("txtDiemHoa").value = svTim.toan;
    }

}

function capNhatSV() {
    var maSV = getELE("txtMaSV").value;
    var tenSV = getELE("txtTenSV").value;
    var email = getELE("txtEmail").value;
    var password = getELE("txtPass").value;
    var ngaySinh = getELE("txtNgaySinh").value;
    var khoaHoc = getELE("khSV").value;
    var diemtoan = getELE("txtDiemToan").value;
    var diemly = getELE("txtDiemLy").value;
    var diemhoa = getELE("txtDiemHoa").value;

    console.log(maSV, tenSV, email, password, ngaySinh, khoaHoc, diemtoan, diemly, diemhoa);

    // TẠO THỂ HIỆN CỦA SINH VIÊN
    var sv = new SinhVien(maSV, tenSV, email, password, ngaySinh, khoaHoc, Number(diemtoan), Number(diemly), Number(diemhoa));
    sv.tinhDTB();
    console.log(sv);

    dssv.capNHat(sv);
    hienThiDS(dssv.mangSV)
    setLocalStorage();

    resetForm();

}


function resetForm() {
    // chi dùng với thẻ foerm => clear các giá trị ở form giúp ng dung nhâọ nọi dung
    getELE("formQLSV").reset();
    getELE("txtMaSV").disabled = false;


}