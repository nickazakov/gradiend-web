alert("Works!");

function authopen() {
  ;
  document.getElementById("header-icon2").innerHTML = "close";
  document.getElementById("header-icon2").style.alignSelf = "flex-start";
  document.getElementById("header-icon2").style.marginTop = "40px";
  document.getElementById("app-title").style.transition = "margin-bottom 0.25s ease-in";
  document.getElementById("app-title").style.marginBottom = "90%";
  document.getElementById("header").style.transition = "height 0.25s ease-in";
  document.getElementById("header").style.height = "100vh";
  document.getElementById("header-icon1").style.transition = "opacity 0.25s ease-in";
  document.getElementById("header-icon1").style.opacity = "0%";
  console.log('opened auth/profile');

  document.getElementById("signin-input1").style.visibility = "visible";
  document.getElementById("signin-input2").style.visibility = "visible";
  document.getElementById("signin").style.visibility = "visible";
  document.getElementById("toForgot").style.visibility = "visible";
  document.getElementById("toSignUp").style.visibility = "visible";

  setTimeout(fadeInSignIn, 250);
}

function headerIcon2Action() {
  document.getElementById("header-icon2").style.visibility = "visible";
  document.getElementById("header-icon2").style.transition = "opacity 0.25s ease-in 0.4s";
  document.getElementById("header-icon2").style.opacity = "100%";
}

function header2() {

  var head2 = document.getElementById("header-icon2");
  if (head2.innerHTML == "close") {
    document.getElementById("header-icon2").style.transition = "";
    document.getElementById("header-icon2").style.opacity = "0%";
    document.getElementById("header-icon2").style.alignSelf = "";
    document.getElementById("header-icon2").innerHTML = "loyalty";
    document.getElementById("header").style.transition = "height 0.25s ease-in";
    document.getElementById("header").style.height = "10vh";
    document.getElementById("app-title").style.transition = "margin-bottom 0.25s ease-in";
    document.getElementById("app-title").style.marginBottom = "";
    document.getElementById("header-icon1").style.transition = "opacity 0.25s ease-in 0.5s";
    document.getElementById("header-icon1").style.opacity = "100%";
    document.getElementById("header-icon2").style.marginTop = "30px";
    console.log('closed auth/profile');

    fadeAllOut()
    setTimeout(headerIcon2Action, 100);
    setTimeout(disableAll, 250);
  } else {
    console.log('campaigns clicked')
  }
}

function switchToSignUp() { // FROM SIGN IN
  document.getElementById("signin").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin").style.opacity = "0%";

  document.getElementById("signin-input1").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin-input1").style.opacity = "0%";

  document.getElementById("signin-input2").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin-input2").style.opacity = "0%";

  setTimeout(enableSignUp, 225);

}

function switchToSignIn() { // FROM ANYWHERE
  document.getElementById("signup").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup").style.opacity = "0%";

  document.getElementById("signup-input1").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup-input1").style.opacity = "0%";

  document.getElementById("signup-input2").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup-input2").style.opacity = "0%";

  document.getElementById("signup-input3").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup-input3").style.opacity = "0%";

  document.getElementById("forgot").style.transition = "opacity 0.2s ease-in";
  document.getElementById("forgot").style.opacity = "0%";

  document.getElementById("forgot-input").style.transition = "opacity 0.2s ease-in";
  document.getElementById("forgot-input").style.opacity = "0%";


  setTimeout(enableSignIn, 225);
}

function switchToForgot() { // FROM SIGN IN
  document.getElementById("signin").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin").style.opacity = "0%";

  document.getElementById("signin-input1").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin-input1").style.opacity = "0%";

  document.getElementById("signin-input2").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin-input2").style.opacity = "0%";

  setTimeout(enableForgot, 225);
}

function fadeAllOut() {
  document.getElementById("toForgot").style.transition = "opacity 0.2s ease-in";
  document.getElementById("toForgot").style.opacity = "0%";

  document.getElementById("toSignUp").style.transition = "opacity 0.2s ease-in";
  document.getElementById("toSignUp").style.opacity = "0%";

  document.getElementById("signin").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin").style.opacity = "0%";

  document.getElementById("signin-input1").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin-input1").style.opacity = "0%";

  document.getElementById("signin-input2").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin-input2").style.opacity = "0%";

  document.getElementById("signup").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup").style.opacity = "0%";

  document.getElementById("signup-input1").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup-input1").style.opacity = "0%";

  document.getElementById("signup-input2").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup-input2").style.opacity = "0%";

  document.getElementById("signup-input3").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup-input3").style.opacity = "0%";

  document.getElementById("toSignIn").style.transition = "opacity 0.2s ease-in";
  document.getElementById("toSignIn").style.opacity = "0%";

  document.getElementById("forgot").style.transition = "opacity 0.2s ease-in";
  document.getElementById("forgot").style.opacity = "0%";

  document.getElementById("forgot-input").style.transition = "opacity 0.2s ease-in";
  document.getElementById("forgot-input").style.opacity = "0%";
}

function disableAll() {
  document.getElementById("signin").style.visibility = "hidden";
  document.getElementById("signin-input1").style.visibility = "hidden";
  document.getElementById("signin-input2").style.visibility = "hidden";
  document.getElementById("signup").style.visibility = "hidden";
  document.getElementById("signup-input1").style.visibility = "hidden";
  document.getElementById("signup-input2").style.visibility = "hidden";
  document.getElementById("signup-input3").style.visibility = "hidden";
  document.getElementById("toSignIn").style.visibility = "hidden";
  document.getElementById("toSignUp").style.visibility = "hidden";
  document.getElementById("toForgot").style.visibility = "hidden";
  document.getElementById("forgot").style.visibility = "hidden";
  document.getElementById("forgot-input").style.visibility = "hidden";
}

function enableSignUp() {
  document.getElementById("signup").style.visibility = "visible";
  document.getElementById("signup").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup").style.opacity = "100%";

  document.getElementById("signup-input1").style.visibility = "visible";
  document.getElementById("signup-input1").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup-input1").style.opacity = "100%";

  document.getElementById("signup-input2").style.visibility = "visible";
  document.getElementById("signup-input2").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup-input2").style.opacity = "100%";

  document.getElementById("signup-input3").style.visibility = "visible";
  document.getElementById("signup-input3").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signup-input3").style.opacity = "100%";

  document.getElementById("toSignIn").style.visibility = "visible";
  document.getElementById("toSignIn").style.transition = "opacity 0.2s ease-in";
  document.getElementById("toSignIn").style.opacity = "100%";

  document.getElementById("toForgot").style.visibility = "hidden";

  document.getElementById("toSignUp").style.visibility = "hidden";

  document.getElementById("signin-input1").style.visibility = "hidden";
  document.getElementById("signin-input2").style.visibility = "hidden";
  document.getElementById("signin").style.visibility = "hidden";
  document.getElementById("forgot").style.visibility = "hidden";
  document.getElementById("forgot-input").style.visibility = "hidden";
}

function enableForgot() {
  document.getElementById("forgot").style.visibility = "visible";
  document.getElementById("forgot").style.transition = "opacity 0.2s ease-in";
  document.getElementById("forgot").style.opacity = "100%";

  document.getElementById("forgot-input").style.visibility = "visible";
  document.getElementById("forgot-input").style.transition = "opacity 0.2s ease-in";
  document.getElementById("forgot-input").style.opacity = "100%";

  document.getElementById("toSignIn").style.visibility = "visible";
  document.getElementById("toSignIn").style.transition = "opacity 0.2s ease-in";
  document.getElementById("toSignIn").style.opacity = "100%";

  document.getElementById("toForgot").style.visibility = "hidden";

  document.getElementById("toSignUp").style.visibility = "hidden";

  document.getElementById("signin-input1").style.visibility = "hidden";
  document.getElementById("signin-input2").style.visibility = "hidden";
  document.getElementById("signin").style.visibility = "hidden";
  document.getElementById("signup-input1").style.visibility = "hidden";
  document.getElementById("signup-input2").style.visibility = "hidden";
  document.getElementById("signup-input3").style.visibility = "hidden";
  document.getElementById("signup").style.visibility = "hidden";
}

function enableSignIn() {
  document.getElementById("toForgot").style.visibility = "visible";
  document.getElementById("toForgot").style.transition = "opacity 0.2s ease-in";
  document.getElementById("toForgot").style.opacity = "100%";

  document.getElementById("toSignUp").style.visibility = "visible";
  document.getElementById("toSignUp").style.transition = "opacity 0.2s ease-in";
  document.getElementById("toSignUp").style.opacity = "100%";

  document.getElementById("signin").style.visibility = "visible";
  document.getElementById("signin").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin").style.opacity = "100%";

  document.getElementById("signin-input1").style.visibility = "visible";
  document.getElementById("signin-input1").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin-input1").style.opacity = "100%";

  document.getElementById("signin-input2").style.visibility = "visible";
  document.getElementById("signin-input2").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin-input2").style.opacity = "100%";

  document.getElementById("toSignIn").style.visibility = "hidden";
  document.getElementById("signup-input1").style.visibility = "hidden";
  document.getElementById("signup-input2").style.visibility = "hidden";
  document.getElementById("signup-input3").style.visibility = "hidden";
  document.getElementById("signup").style.visibility = "hidden";
  document.getElementById("forgot").style.visibility = "hidden";
  document.getElementById("forgot-input").style.visibility = "hidden";

}

function fadeInSignIn() {
  document.getElementById("signin").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin").style.opacity = "100%";

  document.getElementById("signin-input1").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin-input1").style.opacity = "100%";

  document.getElementById("signin-input2").style.transition = "opacity 0.2s ease-in";
  document.getElementById("signin-input2").style.opacity = "100%";

  document.getElementById("toForgot").style.transition = "opacity 0.2s ease-in";
  document.getElementById("toForgot").style.opacity = "100%";

  document.getElementById("toSignUp").style.transition = "opacity 0.2s ease-in";
  document.getElementById("toSignUp").style.opacity = "100%";
}