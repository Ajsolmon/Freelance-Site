const header = document.querySelector('.header');
const toggle  = document.querySelector('#hamburger')

window.onscroll = function(){
    let scroll = window.scrollY
    
    if(scroll>50){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}

let toggleCount = 0

//MOBILE NAV BAR
toggle.addEventListener('click', function(){
    toggleCount++
    const headBackground  = document.getElementById('headered')
    const mobileMenuItems  = document.getElementById('mobileNav')
    
    if(toggleCount%2 !== 0){
        mobileMenuItems.style.display = 'block'
        headBackground.style.backgroundColor = '#d0eefd'
        headBackground.style.transition = '0.7s'
    }else{
        mobileMenuItems.style.display = 'none'
        headBackground.style.backgroundColor = 'transparent'
    }
})



// TO RENDER THE GOOGLE LOGIN BUTTON
var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: '764398386838-rd2dsurltonpkqfvpork1scj1onm9tlq.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });
    attachSignin(document.getElementById('customBtn'));
  });
};

function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        document.getElementById('name').innerText = "Signed in: " +
            googleUser.getBasicProfile().getName();
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}
startApp();


// TO RENDER FB LOGIN BUTTON
window.fbAsyncInit = function() {
  FB.init({
    appId      : '{748538615707937}',
    cookie     : true,
    xfbml      : true,
    version    : '{v8.0}'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));



//TO VALIDATE LOGIN FORM
const emailfield = document.getElementById('emailInput')
const password = document.getElementById('password')
const loginButton = document.getElementById('loginButton')

let emailTrue = false;
let passwordTrue = false;


emailfield.addEventListener('input', function(e){
  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const emailValue = e.target.value
  const emailValidity = pattern.test(emailValue)

  if(emailValidity){
    emailTrue = true
  }
})

password.addEventListener('input', function(e){
  const passwordlength = e.target.value.length
  if(passwordlength>=8 && passwordlength<=12){
    passwordTrue = true
    if(emailTrue === true && passwordTrue === true){
      loginButton.disabled = false
    }
  }else{
    loginButton.disabled = true
  }
})

//TO DISPLAY OR NOT THE LOGIN MODAL
const closeLoginModal = document.getElementById('loginModal')
const closeLoginModalIcon = document.getElementById('closemodal')
closeLoginModalIcon.addEventListener('click', function(){
  closeLoginModal.style.display = 'none'
})

function openLoginModal(){
  closeLoginModal.style.display = 'grid'
}

