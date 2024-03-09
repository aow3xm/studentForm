import React, { Component } from "react";
import TableSinhVien from "./TableSinhVien";
import { connect } from "react-redux";
class FormSinhVien extends Component {
    validateInput = (MaSV, TenSV, SdtSV, EmailSV) => {
        if(MaSV === '' || TenSV === '' || SdtSV === '' || EmailSV === ''){
            alert('Vui lòng nhập đủ thông tin');
            return false;
        }
        if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(EmailSV)){
            alert('Email không hợp lệ');
            return false;
        }
        if(!/^\d{10}$/.test(SdtSV)){
            alert('Số điện thoại không hợp lệ');
            return false;
        }
        if(isNaN(MaSV)){
            alert('Mã sinh viên phải là số');
            return false;
        }
        return true;
    }
    handleAddStudent = (event) => {
        event.preventDefault();
        let maSV = document.getElementById('maSV').value;
        let tenSV = document.getElementById('tenSV').value;
        let sdtSV = document.getElementById('sdtSV').value;
        let emailSV = document.getElementById('emailSV').value;
        if(this.validateInput(maSV, tenSV, sdtSV, emailSV) === false){
            return;
        }
        let student = {
            maSV,
            tenSV,
            sdtSV,
            emailSV
        }
        this.props.dispatch({type: 'ADD_STUDENT', payload: student});
    }
    handleUpdateStudent = () => {
        let maSV = document.getElementById('maSV').value;
        let tenSV = document.getElementById('tenSV').value;
        let sdtSV = document.getElementById('sdtSV').value;
        let emailSV = document.getElementById('emailSV').value;
        if(this.validateInput(maSV, tenSV, sdtSV, emailSV) === false){
            return;
        }
        let student = {
            maSV,
            tenSV,
            sdtSV,
            emailSV
        }
        this.props.dispatch({type: 'UPDATE_STUDENT', payload: student});
    }
  render() {
    
    return (
      <div>
        <h3 className="bg-dark text-white p-3">Thông tin sinh viên</h3>
        <form onSubmit={this.handleAddStudent} className="mx-3">
          <div className="d-flex">
            <div className="mb-3 w-50">
              <label htmlFor className="form-label">
                Mã SV
              </label>
              <input
                type="text"
                className="form-control"
                name
                id="maSV"
                aria-describedby="helpId"
                placeholder
              />
            </div>
            <div className="mb-3 w-50">
              <label htmlFor className="form-label">
                Tên SV
              </label>
              <input
                type="text"
                className="form-control"
                name
                id="tenSV"
                aria-describedby="helpId"
                placeholder
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="mb-3 w-50">
              <label htmlFor className="form-label">
                SĐT SV
              </label>
              <input
                type="text"
                className="form-control"
                name
                id='sdtSV'
                aria-describedby="helpId"
                placeholder
              />
            </div>
            <div className="mb-3 w-50">
              <label htmlFor className="form-label">
                Email SV
              </label>
              <input
                type="text"
                className="form-control"
                name
                id="emailSV"
                aria-describedby="helpId"
                placeholder
              />
            </div>
          </div>
          <div>
          <button type="submit" className="btn btn-success">Thêm Sinh Viên</button>
          <button type="button" className="btn btn-success mx-3" onClick={this.handleUpdateStudent}>Cập nhật sinh viên
          </button>

          </div>
          
          
        </form>
        <TableSinhVien/>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
    return {
        students: state.students,
    };
};
export default connect(mapStateToProps)(FormSinhVien);
// liên kết với action của redux
