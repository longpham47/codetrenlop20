


function Validation() {

    this.checkEmpty = function (inputVal, spanID, message) {
        // "   ab   " ==>  "   ab   ".trim = "ab"
        //! trim() = xoá khoang trag truỏc và sau ký tự
        if (inputVal.trim() != "") {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        // không hợp lệ
        // điền câu thông báo lên UI
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkID = function (inputVal, spanID, message, mangSV) {
        /**
         * duyệt mảng ,so sánh mã của tưng f sinh viên vs dữ liệu it putval = trùng thì thông báo lỗi (fales)
         * 
         */

        //some(): =>  duyệtmảng , sum(fun) => return (true / fales)
        // giả sử mã chưa tồn tại
        var isExist = false
        isExist = mangSV.some(function (sv, index) {
            // return kết quả biểu thưucs sosnah
            return sv.maSV === inputVal.replaceAll(" ", "");
        });
        if (isExist) {
            //mã bị trung f => ko hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;

        } else {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
    }


    this.checkName = function (inputVal, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
        if (inputVal.match(pattern)) {
            //hơplệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;

        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }


    this.checkEmail = function (inputVal, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (inputVal.match(pattern)) {
            //hơplệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;

        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }



    this.checkDrop = function (selectID, spanID, message) {
        var indexOpion = document.getElementById(selectID).selectedIndex;
        if(indexOpion != 0 ){
            // người dung chon
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;

        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }


}

