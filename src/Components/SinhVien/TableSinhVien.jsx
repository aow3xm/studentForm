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

    
    handleSearchChange = (event) => {
        this.setState({ searchValue: event.target.value });
    }

    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            students: props.students,
        };
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.students !== this.props.students) {
            this.setState({ students: this.props.students });
        }
        if (prevState.searchValue !== this.state.searchValue) {
            let filteredStudents = this.props.students.filter(student =>
                student.tenSV.toLowerCase().includes(this.state.searchValue.toLowerCase())
            );
            this.setState({ students: filteredStudents }); 
        }
    }
  render() {
    return (
      <div className='m-3'>
       <input type="text" className="form-control mb-3 findStudent" placeholder="Tìm sinh viên" onInput={this.handleSearchChange} />
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
            {this.state.students.map((student, index)=>{
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