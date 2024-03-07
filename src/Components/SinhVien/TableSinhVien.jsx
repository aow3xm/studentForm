import React, { Component } from 'react'
import { connect } from 'react-redux';
 class TableSinhVien extends Component {
    handleDeleteStudent = (student) => {
        this.props.dispatch({type: 'DELETE_STUDENT', payload: student});
    }
    handleShowStudent = (student) => {
        document.getElementById('maSV').value = student.maSV;
        document.getElementById('tenSV').value = student.tenSV;
        document.getElementById('sdtSV').value = student.sdtSV;
        document.getElementById('emailSV').value = student.emailSV;
    }
  render() {
    return (
      <div className='m-3'>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Mã SV</th>
                    <th>Tên SV</th>
                    <th>SĐT</th>
                    <th>Email</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {this.props.students.map((student, index) => {
                    return (
                        <tr key={index}>
                            <td>{student.maSV}</td>
                            <td>{student.tenSV}</td>
                            <td>{student.sdtSV}</td>
                            <td>{student.emailSV}</td>
                            <td>
                                <button onClick={()=>{this.handleDeleteStudent(student)}} className='btn btn-danger'>Xóa</button>
                                <button onClick={()=>{this.handleShowStudent(student)}} className='btn btn-warning'>Sửa</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        students: state.students,
    };
}
export default connect(mapStateToProps)(TableSinhVien);