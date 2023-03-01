function login() {
    const loginForm = document.getElementById("login-form"); //set form
    const user_email = loginForm.username.value; //set username
    const user_pw = loginForm.password.value; //set password
    
    if (user_email === "" && user_pw === ""){
        setTimeout(() => { window.location.href="index.html"; }, 500); //wait and go to home page
    }
    else if (user_email === "" && user_pw === ""){
        setTimeout(() => { window.location.href="index.html"; }, 500); //wait and go to home page
    }
    else {
        alert('Invalid username or password'); //alert to bad log in
    }
}

function logout() {
    window.aptrinsic('reset'); //kill PX session
    counter = 0;
    setTimeout(() => { window.location.href="login.html"; }, 500); //wait and go to log in page
}

  function showHint(){
    const hint = ""; //tell the user something about log in
    alert(hint);
  }


{/* <form id="login-form">
<input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username"><br>
<input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password"><br>
<input type="button" value="Login" id="login-form-submit" onclick="login()"><input type="button" value="Hint" id="hint-button" onclick="showHint()">

</form> */}