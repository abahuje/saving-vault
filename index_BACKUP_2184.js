// function sugup(e){
//     event.preventDefault();

//     var username = document.getElementById("username").value;
//     // var Email =document.getElementById("email").value
// var passwords = document.getElementById("password").value;
// // var Comfirm =document.getElementById("comfirm");
// let Users={
//         username:username,
//         // emaili :email,
//         password:pass,
//         // comfirm:comfirms};
// };

// function LoginFuction(e){
// // event.preventDefault();
// var logo = document.querySelector(".butto")
// var username = document.getElementById("user").value;
//     // var Email =document.getElementById("email").value
// var passwords = document.getElementById("passwords").value;
// // var Comfirm =document.getElementById("comfirm").value;
// console.log(username)
// var result = document.getElementById("result")
// localStorage.setItem()
// var user = localStorage.getItem(UserNames);
// var data = JSON.parse(user);
// if(user==null){
// result.innerHTML="wrong Username"
// }
// else if(user=="user1" && passwords=="1234"){
// // result.innerHTML="logged in"
// window.location.href="register.html"
// }
// else{
// result.innerHTML= "wrong password"
// }

// }

// // logo.addeventListern("click",LoginFuction)

function singup(e){
    // event.preventDefault();
    let userdata = JSON.parse(localStorage.getItem('Users'))|| [];
    var username = document.getElementById("username").value;
    var email =document.getElementById("email").value
    var passwords = document.getElementById("password").value;
    var comfirm =document.getElementById("comfirm").value;
    if(passwords !== comfirm){
        return alert('Your password must be the same')
    }
    let users={
        username:username,
        emaili :email,
        password:passwords,
        comfirm:comfirm
    };
    userdata.push(users)
    localStorage.setItem("Users",JSON.stringify(userdata));
    window.location.href="login.html";
    // window.location.href="dashboard";
};

const login = () => {
    let userData = JSON.parse(localStorage.getItem('Users'));
    var username = document.getElementById('user').value;
    var password = document.getElementById('passwords').value;
    let data = {
      userName: username,
      passWord: password
    };
    if (userData) {
      for (let i = 0; i < userData.length; i++) {
        if ((userData[i].username === data.userName) && (userData[i].password === data.passWord)) {
            localStorage.setItem('tempUser',JSON.stringify(data))
            window.location.href="dashboard.html"
          break;
        }else{
            return alert('Invalid credentials ⚠️⚠️')
        }
      }
    } else {
      return alert ('please enter register some users');
    }
  }
  