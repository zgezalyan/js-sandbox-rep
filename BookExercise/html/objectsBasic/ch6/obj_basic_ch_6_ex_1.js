let userAdmin = {
  admin() {
    alert("Я админ");
  }
};

let userGuest = {};

userAdmin.admin?.(); 

userGuest.admin?.(); 