let flag = 1;
let un = document.getElementById("username");
let ps = document.getElementById("password");
let sub = document.getElementById("submit");
let usererror = document.getElementById("usererror");
let passerror = document.getElementById("passerror");
sub.addEventListener("click", function () {
  if (un.value == "") {
    usererror.innerHTML = "user name is empty";
    flag = 0;
  } else if (un.value.length < 3) {
    usererror.innerHTML = "Minimum 3 characters required";
    flag = 0;
  } else {
    usererror.innerHTML = "";
    flag = 1;
  }
  if (ps.value == "") {
    passerror.innerHTML = "Password is empty";
    flag = 0;
  } else if (ps.value.length < 5) {
    passerror.innerHTML = "Password  requires minimum 5 character";
    flag = 0;
  } else {
    passerror.innerHTML = "";
    flag = 1;
  }
  if (flag == 1) {
    alert("submited");
    return true;
  } else {
    alert("not submited");
    return false;
  }
});
