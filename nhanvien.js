export default class NhanVien {
    constructor(maNv, pass, tenNv, soDT) {
      this.maNv = maNv;
      this.pass = pass;
      this.tenNv = tenNv;
      this.soDT = soDT;
    }
  
    setMaNv(maNv) {
      this.maNv = maNv;
    }
  
    getMaNv() {
      return this.maNv;
    }
  
    setPass(pass) {
      this.pass = pass;
    }
  
    getPass() {
      return this.pass;
    }
  
    setTenNv(tenNv) {
      this.tenNv = tenNv;
    }
  
    getTenNv() {
      return this.tenNv;
    }
  
    setSoDT(soDT) {
      this.soDT = soDT;
    }
  
    getSoDT() {
      return this.soDT;
    }
  
    checkLogin() {
      return this.maNv === this.maNv && this.pass === this.pass;
    }
  }
  