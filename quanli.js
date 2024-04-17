import NhanVien from './nhanvien';

export default class QuanLi {
    constructor() {
      this.nhanViens = [new NhanVien('111','111','huy','2354655564')];
    }
  
    // Method to add an employee
    addNhanVien(maNv, pass, tenNv, soDT) {
      const nhanVien = new NhanVien(maNv, pass, tenNv, soDT);
      this.nhanViens.push(nhanVien);
    }
  
    // Method to delete an employee by ID
    deleteNhanVien(maNv) {
      this.nhanViens = this.nhanViens.filter(nhanVien => nhanVien.getMaNv() !== maNv);
    }
  
    // Method to edit an employee's name by ID
    editNhanVienName(maNv, newName) {
      const nhanVien = this.nhanViens.find(nhanVien => nhanVien.getMaNv() === maNv);
      if (nhanVien) {
        nhanVien.setTenNv(newName);
      }
    }
  
    // Method to display all employees
    displayEmployees() {
      let msg = "Danh sách nhân viên:\n";
      this.nhanViens.forEach(nv => {
        msg += nv.getMaNv() + ' - ' + nv.getTenNv() + ' - ' + nv.getSoDT() + '\n';
      });
      return msg;
    }
  }
