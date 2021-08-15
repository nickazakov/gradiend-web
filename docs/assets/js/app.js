function appVer() {
  alert("Version 6.4.1");
}

function printUsername(username){
  username = document.getElementById("username-input").value;
  if (/^([a-z0-9_.]{1,})$/.test(username)) {
      console.log("Valid");
      document.getElementById("username-input").style.backgroundColor = "#fff";
  } else {
      console.log("Invalid");

      document.getElementById("username-input").style.backgroundColor = "#ffdee3";
  }
}

function enableProfile() {

  document.getElementById("app-title").style.marginBottom = "730px";

  fadeAllOut();

  document.getElementById("profile-picture").style.display = "block";
  document.getElementById("username-input").style.display = "block";
  document.getElementById("bio-input").style.display = "block";
  document.getElementById("save-account").style.display = "block";
  document.getElementById("signOut").style.display = "block";
  document.getElementById("profile-picture").style.visibility = "visible";
  document.getElementById("username-input").style.visibility = "visible";
  document.getElementById("bio-input").style.visibility = "visible";
  document.getElementById("save-account").style.visibility = "visible";
  document.getElementById("signOut").style.visibility = "visible";

  signedIn();

  setTimeout(fadeInProfile, 100);
}

function fadeInProfile() {
  document.getElementById("username-input").style.transition = "opacity 0.25s ease-in 0.2s";
  document.getElementById("username-input").style.opacity = "100%";
  document.getElementById("bio-input").style.transition = "opacity 0.25s ease-in 0.2s";
  document.getElementById("bio-input").style.opacity = "100%";
  document.getElementById("profile-picture").style.transition = "opacity 0.25s ease-in 0.2s";
  document.getElementById("profile-picture").style.opacity = "100%";
  document.getElementById("save-account").style.transition = "opacity 0.25s ease-in 0.2s";
  document.getElementById("save-account").style.opacity = "100%";
  document.getElementById("signOut").style.transition = "opacity 0.25s ease-in 0.2s";
  document.getElementById("signOut").style.opacity = "100%";
}

function authopen() {

  document.getElementById("header-icon2").style.display = "block";
  document.getElementById("header-icon2").style.opacity = "100%";
  document.getElementById("header-icon2").style.visibility = "visible";

  temp = document.getElementById("signin-input1").style.display;

  if (temp == "none") {
    document.getElementById("profile-picture").style.display = "block";
    document.getElementById("username-input").style.display = "block";
    document.getElementById("bio-input").style.display = "block";
    document.getElementById("save-account").style.display = "block";
    document.getElementById("signOut").style.display = "block";

      document.getElementById("header-icon2").innerHTML = "close";
      document.getElementById("header-icon2").style.alignSelf = "flex-start";
      
      document.getElementById("header-icon2").style.marginTop = "40px";
      document.getElementById("app-title").style.transition = "margin-bottom 0.25s ease-in";
  
      document.getElementById("app-title").style.marginBottom = "730px";
      document.getElementById("header").style.transition = "height 0.25s ease-in";
      document.getElementById("header").style.height = "100vh";
      document.getElementById("header-icon1").style.transition = "opacity 0.25s ease-in";
      document.getElementById("header-icon1").style.opacity = "0%";

      document.getElementById("profile-picture").style.visibility = "visible";
      document.getElementById("username-input").style.visibility = "visible";
      document.getElementById("bio-input").style.visibility = "visible";
      document.getElementById("save-account").style.visibility = "visible";
      document.getElementById("signOut").style.visibility = "visible";

      fadeInProfile();

      console.log('opened profile');
  } else {

  document.getElementById("header-icon2").innerHTML = "close";
  document.getElementById("header-icon2").style.alignSelf = "flex-start";
  
  document.getElementById("header-icon2").style.marginTop = "40px";
  document.getElementById("app-title").style.transition = "margin-bottom 0.25s ease-in";

  document.getElementById("app-title").style.marginBottom = "90%";
  document.getElementById("header").style.transition = "height 0.25s ease-in";
  document.getElementById("header").style.height = "100vh";
  document.getElementById("header-icon1").style.transition = "opacity 0.25s ease-in";
  document.getElementById("header-icon1").style.opacity = "0%";
  console.log('opened auth');

  document.getElementById("signin-input1").style.visibility = "visible";
  document.getElementById("signin-input2").style.visibility = "visible";
  document.getElementById("signin").style.visibility = "visible";
  document.getElementById("toForgot").style.visibility = "visible";
  document.getElementById("toSignUp").style.visibility = "visible";

  setTimeout(fadeInSignIn, 250);

  }
}

function headerIcon2Action() {
  document.getElementById("header-icon2").style.visibility = "visible";
  document.getElementById("header-icon2").style.transition = "opacity 0.25s ease-in 0.4s";
  document.getElementById("header-icon2").style.opacity = "100%";
}

function signedIn() {
  document.getElementById("signin-input1").style.display = "none";
  document.getElementById("signin-input2").style.display = "none";
  document.getElementById("signin").style.display = "none";
  document.getElementById("toSignUp").style.display = "none";
  document.getElementById("toSignIn").style.display = "none";
  document.getElementById("toForgot").style.display = "none";
  document.getElementById("forgot-input").style.display = "none";
  document.getElementById("forgot").style.display = "none";
  document.getElementById("signup-input1").style.display = "none";
  document.getElementById("signup-input2").style.display = "none";
  document.getElementById("signup-input3").style.display = "none";
  document.getElementById("signup").style.display = "none";
}

function signedOut() {

  disableProfile();

  document.getElementById("signin-input1").style.display = "block";
  document.getElementById("signin-input2").style.display = "block";
  document.getElementById("signin").style.display = "block";
  document.getElementById("toSignUp").style.display = "block";
  document.getElementById("toSignIn").style.display = "block";
  document.getElementById("toForgot").style.display = "block";
  document.getElementById("forgot-input").style.display = "block";
  document.getElementById("forgot").style.display = "block";
  document.getElementById("signup-input1").style.display = "block";
  document.getElementById("signup-input2").style.display = "block";
  document.getElementById("signup-input3").style.display = "block";
  document.getElementById("signup").style.display = "block";

  document.getElementById("signin-input1").style.opacity = "0%";
  document.getElementById("signin-input2").style.opacity = "0%";
  document.getElementById("signin").style.opacity = "0%";
  
  document.getElementById("signup-input1").style.opacity = "0%";
  document.getElementById("signup-input2").style.opacity = "0%";
  document.getElementById("signup-input3").style.opacity = "0%";
  document.getElementById("signup").style.opacity = "0%";

  document.getElementById("forgot-input").style.opacity = "0%";
  document.getElementById("forgot").style.opacity = "0%";

  document.getElementById("toSignUp").style.opacity = "0%";
  document.getElementById("toSignIn").style.opacity = "0%";
  document.getElementById("toForgot").style.opacity = "0%";

  fadeInSignIn();
}

function disableProfile() {
  document.getElementById("profile-picture").style.visibility = "visible";
  document.getElementById("username-input").style.visibility = "visible";
  document.getElementById("bio-input").style.visibility = "visible";
  document.getElementById("save-account").style.visibility = "visible";
  document.getElementById("signOut").style.visibility = "visible";

  document.getElementById("profile-picture").style.display = "none";
  document.getElementById("username-input").style.display = "none";
  document.getElementById("bio-input").style.display = "none";
  document.getElementById("save-account").style.display = "none";
  document.getElementById("signOut").style.display = "none";

  document.getElementById("profile-picture").style.transition = "";
  document.getElementById("username-input").style.opacity = "0%";
  document.getElementById("bio-input").style.opacity = "0%";
  document.getElementById("save-account").style.opacity = "0%";
  document.getElementById("signOut").style.opacity = "0%";

  document.getElementById("profile-picture").style.opacity = "0%";
  document.getElementById("username-input").style.opacity = "0%";
  document.getElementById("bio-input").style.opacity = "0%";
  document.getElementById("save-account").style.opacity = "0%";
  document.getElementById("signOut").style.opacity = "0%";
}


function fadeOutProfile() {
  document.getElementById("profile-picture").style.transition = "opacity 0.15s ease-in";
  document.getElementById("profile-picture").style.opacity = "0%";

  document.getElementById("username-input").style.transition = "opacity 0.15s ease-in";
  document.getElementById("username-input").style.opacity = "0%";

  document.getElementById("bio-input").style.transition = "opacity 0.15s ease-in";
  document.getElementById("bio-input").style.opacity = "0%";

  document.getElementById("save-account").style.transition = "opacity 0.15s ease-in";
  document.getElementById("save-account").style.opacity = "0%";

  document.getElementById("signOut").style.transition = "opacity 0.25s ease-in";
  document.getElementById("signOut").style.opacity = "0$";
}

function header2() {

  temp = document.getElementById("signin-input1").style.display;

  if(temp == "none") { // PROFILE OPENED

    document.getElementById("profile-picture").style.visibility = "hidden";
    document.getElementById("username-input").style.visibility = "hidden";
    document.getElementById("bio-input").style.visibility = "hidden";
    document.getElementById("save-account").style.visibility = "hidden";
    document.getElementById("signOut").style.visibility = "hidden";

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
      console.log('closed profile');

      fadeAllOut()
      setTimeout(fadeOutProfile, 100);
      setTimeout(headerIcon2Action, 100);
      setTimeout(disableAll, 250);
  } else {
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
          console.log('closed auth');
  
          fadeAllOut()
          setTimeout(headerIcon2Action, 100);
          setTimeout(disableAll, 250);
  
          //document.getElementById("username-input").style.transition = "opacity 0.25s ease-in";
          //document.getElementById("username-input").style.opacity = "100%";
  
          //document.getElementById("bio-input").style.transition = "opacity 0.25s ease-in";
          //document.getElementById("bio-input").style.opacity = "100%";
  
          //document.getElementById("save-account").style.transition = "opacity 0.25s ease-in";
          //document.getElementById("save-account").style.opacity = "100%";
  
      } else {
          console.log('campaigns clicked')
      }
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