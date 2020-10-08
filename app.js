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


//MOBILE NAV BAR
let toggleCount = 0

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



//TO OR NOT DISPLAY THE LOGIN MODAL
const closeLoginModal = document.getElementById('loginModal')
const closeLoginModalIcon = document.getElementById('closemodal')
closeLoginModalIcon.addEventListener('click', function(){
  closeLoginModal.style.display = 'none'
})

function openLoginModal(){
  closeLoginModal.style.display = 'grid'
}



//CHANGE SXN 3 EXPERT DETAILS
const expertdetails = [
  {
    expertname: "Tyler",
    expertjob: "Wordpress Expert",
    expertdetails: "\"I have been a Wordpress expert for over 6 years. It brings together my passion for creativity and my entrepreneurial spirit. There is nothing more rewarding than the joy of bringing someone's dream and vision to fruition.\"",
    expertimage: "tyler-big.png"
  },
  {
    expertname: "Diane",
    expertjob: "Senior Developer & Digital Strategist",
    expertdetails: "\"After 15 years in the digital space, I still love diving deep into client problems and coming up with the best technical, marketing or design solution to get them the results they need.\"",
    expertimage: "diane-big.png"
  },
  {
    expertname: "Blake",
    expertjob: "Senior Frontend Developer",
    expertdetails: "\"From Wordpress to Shopify to fully custom solutions, over the past 4 years I have had the pleasure of helping many different clients with many different development needs. I love taking a client's goals and finding the solution that is right for them, no matter how complex.\"",
    expertimage: "blake-big.png"
  },
  {
    expertname: "Christy",
    expertjob: "Senior Squarespace Designer",
    expertdetails: "\"I’ve been working as a freelance web designer based in the US, Texas for over 15 years. I love working with small business owners to create beautiful, functional Squarespace websites.\"",
    expertimage: "christy-big.png"
  },
  {
    expertname: "Ming",
    expertjob: "Developer and Digital Marketer",
    expertdetails: "\"I'm full of new ideas but backed by years of experience working in marketing, design, digital and visual content for clients all around the world. I work with a variety of businesses, startups, and even individuals to help establish, grow and nurture their online presence. With each project, I take the time to understand my client’s needs and work from the perspective of their brand.\"",
    expertimage: "ming-big.png"
  },
  {
    expertname: "Scott",
    expertjob: "Senior Developer",
    expertdetails: "\"I’m both a designer & developer with 10+ years of experience bringing brands to life online. I specialize in WordPress, Shopify, and Squarespace, and am well versed in the advantages and limitations of each platform. My joy comes from working with businesses to find solutions and strategies to communicate their message clearly and beautifully.\"",
    expertimage: "scott-big.png"
  },
  {
    expertname: "Irene",
    expertjob: "HubSpot Developer",
    expertdetails: "\"Passionate about web design and conversion rate optimization, my mission is to help ambitious companies all around the globe grow. In 2015, I won the HubSpot Hack-A-Thon and fell in love with this all-in-one software solution. My goal is to deliver websites of tomorrow that convert visitors into clients.\"",
    expertimage: "irene-big.png"
  },
  {
    expertname: "Mowu",
    expertjob: "Shopify Designer & Developer",
    expertdetails: "\"For the past ten years, I’ve enjoyed blending my skills in strategy, design, and development to build brands and sites with compelling narratives for entrepreneurs around the world, ultimately bringing their visions to life.\"",
    expertimage: "mowu-big.png"
  }
]

var tyler = document.getElementsByClassName('expertbiolink')

tyler[0].addEventListener('click', function(){  
  document.querySelector('.expertname').innerHTML = expertdetails[0].expertname
  document.querySelector('.expertjob').innerHTML = expertdetails[0].expertjob
  document.querySelector('.expertexp').innerHTML = expertdetails[0].expertdetails
  document.querySelector('.expertimg').src = expertdetails[0].expertimage

  tyler[0].style.opacity = 1
  tyler[1].style.opacity = 0.5
  tyler[2].style.opacity = 0.5
  tyler[3].style.opacity = 0.5
  tyler[4].style.opacity = 0.5
  tyler[5].style.opacity = 0.5
  tyler[6].style.opacity = 0.5
  tyler[7].style.opacity = 0.5


})

tyler[1].addEventListener('click', function(){
  document.querySelector('.expertname').innerHTML = expertdetails[1].expertname
  document.querySelector('.expertjob').innerHTML = expertdetails[1].expertjob
  document.querySelector('.expertexp').innerHTML = expertdetails[1].expertdetails
  document.querySelector('.expertimg').src = expertdetails[1].expertimage

  tyler[0].style.opacity = 0.5
  tyler[1].style.opacity = 1
  tyler[2].style.opacity = 0.5
  tyler[3].style.opacity = 0.5
  tyler[4].style.opacity = 0.5
  tyler[5].style.opacity = 0.5
  tyler[6].style.opacity = 0.5
  tyler[7].style.opacity = 0.5
})

tyler[2].addEventListener('click', function(){
  document.querySelector('.expertname').innerHTML = expertdetails[2].expertname
  document.querySelector('.expertjob').innerHTML = expertdetails[2].expertjob
  document.querySelector('.expertexp').innerHTML = expertdetails[2].expertdetails
  document.querySelector('.expertimg').src = expertdetails[2].expertimage

  tyler[0].style.opacity = 0.5
  tyler[1].style.opacity = 0.5
  tyler[2].style.opacity = 1
  tyler[3].style.opacity = 0.5
  tyler[4].style.opacity = 0.5
  tyler[5].style.opacity = 0.5
  tyler[6].style.opacity = 0.5
  tyler[7].style.opacity = 0.5
})

tyler[3].addEventListener('click', function(){
  document.querySelector('.expertname').innerHTML = expertdetails[3].expertname
  document.querySelector('.expertjob').innerHTML = expertdetails[3].expertjob
  document.querySelector('.expertexp').innerHTML = expertdetails[3].expertdetails
  document.querySelector('.expertimg').src = expertdetails[3].expertimage

  tyler[0].style.opacity = 0.5
  tyler[1].style.opacity = 0.5
  tyler[2].style.opacity = 0.5
  tyler[3].style.opacity = 1
  tyler[4].style.opacity = 0.5
  tyler[5].style.opacity = 0.5
  tyler[6].style.opacity = 0.5
  tyler[7].style.opacity = 0.5
})

tyler[4].addEventListener('click', function(){
  document.querySelector('.expertname').innerHTML = expertdetails[4].expertname
  document.querySelector('.expertjob').innerHTML = expertdetails[4].expertjob
  document.querySelector('.expertexp').innerHTML = expertdetails[4].expertdetails
  document.querySelector('.expertimg').src = expertdetails[4].expertimage

  tyler[0].style.opacity = 0.5
  tyler[1].style.opacity = 0.5
  tyler[2].style.opacity = 0.5
  tyler[3].style.opacity = 0.5
  tyler[4].style.opacity = 1
  tyler[5].style.opacity = 0.5
  tyler[6].style.opacity = 0.5
  tyler[7].style.opacity = 0.5
})

tyler[5].addEventListener('click', function(){
  document.querySelector('.expertname').innerHTML = expertdetails[5].expertname
  document.querySelector('.expertjob').innerHTML = expertdetails[5].expertjob
  document.querySelector('.expertexp').innerHTML = expertdetails[5].expertdetails
  document.querySelector('.expertimg').src = expertdetails[5].expertimage

  tyler[0].style.opacity = 0.5
  tyler[1].style.opacity = 0.5
  tyler[2].style.opacity = 0.5
  tyler[3].style.opacity = 0.5
  tyler[4].style.opacity = 0.5
  tyler[5].style.opacity = 1
  tyler[6].style.opacity = 0.5
  tyler[7].style.opacity = 0.5
})

tyler[6].addEventListener('click', function(){
  document.querySelector('.expertname').innerHTML = expertdetails[6].expertname
  document.querySelector('.expertjob').innerHTML = expertdetails[6].expertjob
  document.querySelector('.expertexp').innerHTML = expertdetails[6].expertdetails
  document.querySelector('.expertimg').src = expertdetails[6].expertimage

  tyler[0].style.opacity = 0.5
  tyler[1].style.opacity = 0.5
  tyler[2].style.opacity = 0.5
  tyler[3].style.opacity = 0.5
  tyler[4].style.opacity = 0.5
  tyler[5].style.opacity = 0.5
  tyler[6].style.opacity = 1
  tyler[7].style.opacity = 0.5
})

tyler[7].addEventListener('click', function(){
  document.querySelector('.expertname').innerHTML = expertdetails[7].expertname
  document.querySelector('.expertjob').innerHTML = expertdetails[7].expertjob
  document.querySelector('.expertexp').innerHTML = expertdetails[7].expertdetails
  document.querySelector('.expertimg').src = expertdetails[7].expertimage

  tyler[0].style.opacity = 0.5
  tyler[1].style.opacity = 0.5
  tyler[2].style.opacity = 0.5
  tyler[3].style.opacity = 0.5
  tyler[4].style.opacity = 0.5
  tyler[5].style.opacity = 0.5
  tyler[6].style.opacity = 0.5
  tyler[7].style.opacity = 1
})



//ANIMATE SX5 CAROUSEL
// 