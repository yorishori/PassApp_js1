/*-----------Functions-------------*/
//Load passwords to browser
function loadPasswordList() {}

//Verify input password
function verifyPassword() {
  inputPass = document.getElementById("password").value;
  console.log(inputPass);
  if (password == inputPass) {
    window.location.href = location.pathname.replace(
      "index.html",
      "html/passwords.html"
    );
  } else {
    alert("Incorrect Password");
  }
}

/*-----------Variables-------------*/
var passwordBox = document.getElementById("password");
var passwordList = [
  { site: 1, username: 1, password: 1, email: 1, other: 1, category: 1 },
  { site: 1, username: 1, password: 1, email: 1, other: 1, category: 1 },
];

var password = "";
