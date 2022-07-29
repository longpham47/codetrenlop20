/**
 * 
 * !      LƯU TRỮ NHIỀU ĐÓI TUỌNG SINH VIÊN (MANG SINH VIÊN)
 * thêm svien (thêm phan tử)
 * xoá sửa 
 * tìm kiếm sv theo điều kiện
 * 
 */

function DanhSachSV() {
    // thuộc tính mãng  các dối tuọng sinhviên
    this.mangSV = [];

    // truyên thám ssố là dối tượng sinh cviên
    this.themSV = function (sv) {
        this.mangSV.push(sv);
    }

    this.timViTri = function (ma) {
        //giã sử vị trí chưa tim thấy là -1
        console.log(ma)
        var viTri = -1;
        //duyệt mang và  so sanh mảng đẻ tim sinh viên trog mảng
        this.mangSV.map(function (sv, index) {
            if (sv.maSV === ma) {
                //tìm được
                viTri = index;

            }
        })
        //trả kết qua tim thấy ra khỏi mang đẻ sử dụng ở ác hàm khác
        return viTri;
    }

    this.xoaSV = function (ma) {
        var viTri = this.timViTri(ma);
        console.log(ma, viTri)
        if(viTri > -1 ){
            // tìm thấy 
            //! splice(vị trí bất đàu xoá ,số lượng cần xoá tính từ vị trí bất đầu)
            // vd : splice(1,3) : oá cacs phần tử index 1.2.3
            this.mangSV.splice(viTri,1);
        }
    }

    this.capNHat = function(sv){
        var viTri = this.timViTri(sv.maSV)
        if(viTri > -1){
            //tim thấy
            dssv.mangSV[viTri] = sv;
        }
    }
}

