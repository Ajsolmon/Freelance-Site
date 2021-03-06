//HEADER CHANGE BG ONSCROLL
const header = document.querySelector('.header');

window.onscroll = function(){
    let scroll = window.scrollY
    scroll>50 ? header.classList.add('active') : header.classList.remove('active')
}



//MOBILE NAV BAR
let toggleCount = 0
const toggle  = document.querySelector('#hamburger');

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






//CHANGE SXN 3 EXPERT DETAILS
const expertdetails = [
  {
    expertname: "Tyler",
    expertjob: "Wordpress Expert",
    expertdetails: "\"I have been a Wordpress expert for over 6 years. It brings together my passion for creativity and my entrepreneurial spirit. There is nothing more rewarding than the joy of bringing someone's dream and vision to fruition.\"",
    expertimage: "https://ik.imagekit.io/jqo5wr6i8p6/tyler-big_gMgS0_F1DBE_.png"
  },
  {
    expertname: "Diane",
    expertjob: "Senior Developer & Digital Strategist",
    expertdetails: "\"After 15 years in the digital space, I still love diving deep into client problems and coming up with the best technical, marketing or design solution to get them the results they need.\"",
    expertimage: "https://ik.imagekit.io/jqo5wr6i8p6/diane-big_PbCdE1yF_B.png"
  },
  {
    expertname: "Blake",
    expertjob: "Senior Frontend Developer",
    expertdetails: "\"From Wordpress to Shopify to fully custom solutions, over the past 4 years I have had the pleasure of helping many different clients with many different development needs. I love taking a client's goals and finding the solution that is right for them, no matter how complex.\"",
    expertimage: "https://ik.imagekit.io/jqo5wr6i8p6/blake-big_uYoWIfLHBegg.png"
  },
  {
    expertname: "Christy",
    expertjob: "Senior Squarespace Designer",
    expertdetails: "\"I’ve been working as a freelance web designer based in the US, Texas for over 15 years. I love working with small business owners to create beautiful, functional Squarespace websites.\"",
    expertimage: "https://ik.imagekit.io/jqo5wr6i8p6/christy-big_U9SktA847KI1.png"
  },
  {
    expertname: "Ming",
    expertjob: "Developer and Digital Marketer",
    expertdetails: "\"I'm full of new ideas but backed by years of experience working in marketing, design, digital and visual content for clients all around the world. I work with a variety of businesses, startups, and even individuals to help establish, grow and nurture their online presence. With each project, I take the time to understand my client’s needs and work from the perspective of their brand.\"",
    expertimage: "https://ik.imagekit.io/jqo5wr6i8p6/ming-big_2rhg9HaeEWmV.png"
  },
  {
    expertname: "Scott",
    expertjob: "Senior Developer",
    expertdetails: "\"I’m both a designer & developer with 10+ years of experience bringing brands to life online. I specialize in WordPress, Shopify, and Squarespace, and am well versed in the advantages and limitations of each platform. My joy comes from working with businesses to find solutions and strategies to communicate their message clearly and beautifully.\"",
    expertimage: "https://ik.imagekit.io/jqo5wr6i8p6/scott-big_0jeWgzbRf.png"
  },
  {
    expertname: "Irene",
    expertjob: "HubSpot Developer",
    expertdetails: "\"Passionate about web design and conversion rate optimization, my mission is to help ambitious companies all around the globe grow. In 2015, I won the HubSpot Hack-A-Thon and fell in love with this all-in-one software solution. My goal is to deliver websites of tomorrow that convert visitors into clients.\"",
    expertimage: "https://ik.imagekit.io/jqo5wr6i8p6/irene-big_NlzTxdIse.png"
  },
  {
    expertname: "Mowu",
    expertjob: "Shopify Designer & Developer",
    expertdetails: "\"For the past ten years, I’ve enjoyed blending my skills in strategy, design, and development to build brands and sites with compelling narratives for entrepreneurs around the world, ultimately bringing their visions to life.\"",
    expertimage: "https://ik.imagekit.io/jqo5wr6i8p6/mowu-big_4gmPHYTYARAe.png"
  }
]



let bioLink       = document.getElementsByClassName('expertbiolink')
let expertName    = document.querySelector('.expertname')
let expertImage   = document.querySelector('.expertimg')
let expertJob     = document.querySelector('.expertjob')
let expertExp     = document.querySelector('.expertexp')
let expertInfoSxn     = document.querySelector('.expertinfosection')
bioLink[0].style.opacity = 1

bioLink[0].addEventListener('click', function(){  
  expertInfoSxn.classList.add('transition')

  setTimeout(() => {
    expertImage.src = expertdetails[0].expertimage
    expertName.innerHTML = expertdetails[0].expertname
    expertJob.innerHTML = expertdetails[0].expertjob
    expertExp.innerHTML = expertdetails[0].expertdetails
  
    bioLink[0].style.opacity = 1
    bioLink[1].style.opacity = 0.5
    bioLink[2].style.opacity = 0.5
    bioLink[3].style.opacity = 0.5
    bioLink[4].style.opacity = 0.5
    bioLink[5].style.opacity = 0.5
    bioLink[6].style.opacity = 0.5
    bioLink[7].style.opacity = 0.5
  
    expertInfoSxn.classList.remove('transition')    
  }, 300);


})

bioLink[1].addEventListener('click', function(){
  expertInfoSxn.classList.add('transition')

  setTimeout(() => {
    expertImage.src = expertdetails[1].expertimage
    expertName.innerHTML = expertdetails[1].expertname
    expertJob.innerHTML = expertdetails[1].expertjob
    expertExp.innerHTML = expertdetails[1].expertdetails
  
    bioLink[0].style.opacity = 0.5
    bioLink[1].style.opacity = 1
    bioLink[2].style.opacity = 0.5
    bioLink[3].style.opacity = 0.5
    bioLink[4].style.opacity = 0.5
    bioLink[5].style.opacity = 0.5
    bioLink[6].style.opacity = 0.5
    bioLink[7].style.opacity = 0.5
    
    expertInfoSxn.classList.remove('transition')       
  }, 300);

})

bioLink[2].addEventListener('click', function(){
  expertInfoSxn.classList.add('transition')

  setTimeout(() => {
    expertImage.src = expertdetails[2].expertimage
  expertName.innerHTML = expertdetails[2].expertname
  expertJob.innerHTML = expertdetails[2].expertjob
  expertExp.innerHTML = expertdetails[2].expertdetails

  bioLink[0].style.opacity = 0.5
  bioLink[1].style.opacity = 0.5
  bioLink[2].style.opacity = 1
  bioLink[3].style.opacity = 0.5
  bioLink[4].style.opacity = 0.5
  bioLink[5].style.opacity = 0.5
  bioLink[6].style.opacity = 0.5
  bioLink[7].style.opacity = 0.5
  
    expertInfoSxn.classList.remove('transition')       
  }, 300);
})

bioLink[3].addEventListener('click', function(){
  expertInfoSxn.classList.add('transition')

  setTimeout(() => {
    expertImage.src = expertdetails[3].expertimage
    expertName.innerHTML = expertdetails[3].expertname
    expertJob.innerHTML = expertdetails[3].expertjob
    expertExp.innerHTML = expertdetails[3].expertdetails

    bioLink[0].style.opacity = 0.5
    bioLink[1].style.opacity = 0.5
    bioLink[2].style.opacity = 0.5
    bioLink[3].style.opacity = 1
    bioLink[4].style.opacity = 0.5
    bioLink[5].style.opacity = 0.5
    bioLink[6].style.opacity = 0.5
    bioLink[7].style.opacity = 0.5
    
    expertInfoSxn.classList.remove('transition')       
  }, 300);

})

bioLink[4].addEventListener('click', function(){
  expertInfoSxn.classList.add('transition')

  setTimeout(() => {
    expertImage.src = expertdetails[4].expertimage
  expertName.innerHTML = expertdetails[4].expertname
  expertJob.innerHTML = expertdetails[4].expertjob
  expertExp.innerHTML = expertdetails[4].expertdetails

  bioLink[0].style.opacity = 0.5
  bioLink[1].style.opacity = 0.5
  bioLink[2].style.opacity = 0.5
  bioLink[3].style.opacity = 0.5
  bioLink[4].style.opacity = 1
  bioLink[5].style.opacity = 0.5
  bioLink[6].style.opacity = 0.5
  bioLink[7].style.opacity = 0.5
  
    expertInfoSxn.classList.remove('transition')       
  }, 300);
})

bioLink[5].addEventListener('click', function(){
  expertInfoSxn.classList.add('transition')

  setTimeout(() => {
    expertImage.src = expertdetails[5].expertimage
  expertName.innerHTML = expertdetails[5].expertname
  expertJob.innerHTML = expertdetails[5].expertjob
  expertExp.innerHTML = expertdetails[5].expertdetails

  bioLink[0].style.opacity = 0.5
  bioLink[1].style.opacity = 0.5
  bioLink[2].style.opacity = 0.5
  bioLink[3].style.opacity = 0.5
  bioLink[4].style.opacity = 0.5
  bioLink[5].style.opacity = 1
  bioLink[6].style.opacity = 0.5
  bioLink[7].style.opacity = 0.5
  
    expertInfoSxn.classList.remove('transition')       
  }, 300);

})

bioLink[6].addEventListener('click', function(){
  expertInfoSxn.classList.add('transition')

  setTimeout(() => {
    expertImage.src = expertdetails[6].expertimage
    expertName.innerHTML = expertdetails[6].expertname
    expertJob.innerHTML = expertdetails[6].expertjob
    expertExp.innerHTML = expertdetails[6].expertdetails

    bioLink[0].style.opacity = 0.5
    bioLink[1].style.opacity = 0.5
    bioLink[2].style.opacity = 0.5
    bioLink[3].style.opacity = 0.5
    bioLink[4].style.opacity = 0.5
    bioLink[5].style.opacity = 0.5
    bioLink[6].style.opacity = 1
    bioLink[7].style.opacity = 0.5
    
    expertInfoSxn.classList.remove('transition')       
  }, 300);

})

bioLink[7].addEventListener('click', function(){
  expertInfoSxn.classList.add('transition')
  setTimeout(() => {
    expertImage.src = expertdetails[7].expertimage
    expertName.innerHTML = expertdetails[7].expertname
    expertJob.innerHTML = expertdetails[7].expertjob
    expertExp.innerHTML = expertdetails[7].expertdetails

    bioLink[0].style.opacity = 0.5
    bioLink[1].style.opacity = 0.5
    bioLink[2].style.opacity = 0.5
    bioLink[3].style.opacity = 0.5
    bioLink[4].style.opacity = 0.5
    bioLink[5].style.opacity = 0.5
    bioLink[6].style.opacity = 0.5
    bioLink[7].style.opacity = 1
    
    expertInfoSxn.classList.remove('transition')       
  }, 300);

})



//ANIMATE SECTION 5 CAROUSEL

let leftstyle = 0

let sliderDivWidth = 500

let sliderWidthIncrement = 5

let indexCount = -1

let carouselControl = 100

let carouselControlCounter = -1

const carouselanim = document.getElementById('sliderdiv')
const carouselslides = document.getElementsByClassName('slider')

let sliderWidth;
const root = document.documentElement       //to access the css variables
const carouselCircle = document.getElementsByClassName('carousel-circle')

carouselCircle[0].style.backgroundColor = 'orange'        //initialize the carousel counter circles

carouselCircle[0].addEventListener('click', ()=>{
    carouselCircle[0].style.backgroundColor = 'orange'
    carouselCircle[1].style.backgroundColor = '#e0dbc9'
    carouselCircle[2].style.backgroundColor = '#e0dbc9'
    carouselCircle[3].style.backgroundColor = '#e0dbc9'
    carouselCircle[4].style.backgroundColor = '#e0dbc9'

    leftstyle = undefined
    carouselanim.style.left = 0 + '%'
    carouselControlCounter = NaN
})

carouselCircle[1].addEventListener('click', ()=>{
    carouselCircle[1].style.backgroundColor = 'orange'
    carouselCircle[0].style.backgroundColor = '#e0dbc9'
    carouselCircle[2].style.backgroundColor = '#e0dbc9'
    carouselCircle[3].style.backgroundColor = '#e0dbc9'
    carouselCircle[4].style.backgroundColor = '#e0dbc9'
    leftstyle = undefined
    carouselanim.style.left = -100 + '%'
    carouselControlCounter = NaN
})

carouselCircle[2].addEventListener('click', ()=>{
    carouselCircle[2].style.backgroundColor = 'orange'
    carouselCircle[0].style.backgroundColor = '#e0dbc9'
    carouselCircle[1].style.backgroundColor = '#e0dbc9'
    carouselCircle[3].style.backgroundColor = '#e0dbc9'
    carouselCircle[4].style.backgroundColor = '#e0dbc9'
    leftstyle = undefined
    carouselanim.style.left = -200 + '%'
    carouselControlCounter = NaN
})

carouselCircle[3].addEventListener('click', ()=>{
    carouselCircle[3].style.backgroundColor = 'orange'
    carouselCircle[0].style.backgroundColor = '#e0dbc9'
    carouselCircle[1].style.backgroundColor = '#e0dbc9'
    carouselCircle[2].style.backgroundColor = '#e0dbc9'
    carouselCircle[4].style.backgroundColor = '#e0dbc9'
    leftstyle = undefined
    carouselanim.style.left = -300 + '%'
    carouselControlCounter = NaN
})

carouselCircle[4].addEventListener('click', ()=>{
    carouselCircle[4].style.backgroundColor = 'orange'
    carouselCircle[0].style.backgroundColor = '#e0dbc9'
    carouselCircle[1].style.backgroundColor = '#e0dbc9'
    carouselCircle[2].style.backgroundColor = '#e0dbc9'
    carouselCircle[3].style.backgroundColor = '#e0dbc9'
    leftstyle = undefined
    carouselanim.style.left = -400 + '%'
    carouselControlCounter = NaN
})

setInterval(function(){
    indexCount = -1
    carouselControlCounter = -1
}, 50001)

setInterval(function(){
    carouselanim.style.left = 0 + '%'
    indexCount = -1
    leftstyle = 0
    sliderDivWidth = 500
    sliderWidthIncrement = 5

    while(carouselslides.length > 5){
        carouselslides[5].parentNode.removeChild(carouselslides[5])
    }
}, 1000001)  //this is to prevent the slide width from glitching

setInterval(() => {
indexCount += 1
carouselControlCounter +=1

    switch(carouselControlCounter){
        case 0:
            carouselCircle[1].style.backgroundColor = 'orange'
            carouselCircle[0].style.backgroundColor = '#e0dbc9'
            carouselCircle[2].style.backgroundColor = '#e0dbc9'
            carouselCircle[3].style.backgroundColor = '#e0dbc9'
            carouselCircle[4].style.backgroundColor = '#e0dbc9'
            break;
        case 1:
            carouselCircle[2].style.backgroundColor = 'orange'
            carouselCircle[0].style.backgroundColor = '#e0dbc9'
            carouselCircle[1].style.backgroundColor = '#e0dbc9'
            carouselCircle[3].style.backgroundColor = '#e0dbc9'
            carouselCircle[4].style.backgroundColor = '#e0dbc9'
            break;
        case 2:
            carouselCircle[3].style.backgroundColor = 'orange'
            carouselCircle[0].style.backgroundColor = '#e0dbc9'
            carouselCircle[1].style.backgroundColor = '#e0dbc9'
            carouselCircle[2].style.backgroundColor = '#e0dbc9'
            carouselCircle[4].style.backgroundColor = '#e0dbc9'
            break;
        case 3:
            carouselCircle[4].style.backgroundColor = 'orange'
            carouselCircle[0].style.backgroundColor = '#e0dbc9'
            carouselCircle[1].style.backgroundColor = '#e0dbc9'
            carouselCircle[2].style.backgroundColor = '#e0dbc9'
            carouselCircle[3].style.backgroundColor = '#e0dbc9'
            break;
        case 4:
            carouselCircle[0].style.backgroundColor = 'orange'
            carouselCircle[1].style.backgroundColor = '#e0dbc9'
            carouselCircle[2].style.backgroundColor = '#e0dbc9'
            carouselCircle[3].style.backgroundColor = '#e0dbc9'
            carouselCircle[4].style.backgroundColor = '#e0dbc9'
    }

    let newDiv  = document.getElementsByClassName('slider')[indexCount]
    let divClones = newDiv.cloneNode(true)
    // newDiv.id = colorIdArr[indexCount]
    carouselanim.appendChild(divClones)

    sliderDivWidth+=100
    sliderWidthIncrement+=1
    sliderWidth = ((1/sliderWidthIncrement)*100).toFixed(10)

    root.style.setProperty('--mainwidth', sliderDivWidth + '%');
    root.style.setProperty('--sectionwidth', sliderWidth + '%');

    leftstyle -= 100 
    carouselanim.style.left = leftstyle + '%'
}, 10000);





//section 5 testimonial carousel.
$(document).ready(() =>{
  $('#slideshower .slicker').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      dots: false,
      cssEase: 'linear',
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});






// TO RENDER THE GOOGLE LOGIN BUTTON
var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
    auth2 = gapi.auth2.init({
      client_id: '335325138627-7r3tloqnen7dktbdk4bo366dgka207hi.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
    });
    attachSignin(document.getElementById('customBtn'));
  });
};

function attachSignin(element) {
  // console.log(element.id);
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        // document.getElementById('name').innerText = "Signed in: " +
        //     googleUser.getBasicProfile().getName();
      }, function(error) {
        // alert(JSON.stringify(error, undefined, 2));
      });
}
startApp();




// TO RENDER FB LOGIN BUTTON

function getUserData() {
	FB.api('/me', {fields: 'name,email'}, (response) => {
		document.getElementById('response').innerHTML = 'Hello ' + response.name;
	});
}

FB.init({
  appId  : 748538615707937,
  cookie : true, // enable cookies to allow the server to access the session
  xfbml  : true,  // parse XFBML
  version    : 'v9.0'
  });
  
  document.getElementById('loginBtn').addEventListener('click', function() {
      //do the login
      FB.login(function(response) {
          if (response.authResponse) {
              //user just authorized your app
              getUserData();
          }
      }, {scope: 'email,public_profile', return_scopes: true});
  }, false);
  




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



//TO CLOSE THE LOGIN MODAL
const loginModal = document.getElementById('loginModal')
const loginModalIcon = document.getElementById('closemodal')
loginModalIcon.addEventListener('click', function(){
  loginModal.style.transform = 'scale(1.5)'
  loginModal.style.opacity = '0'

  setTimeout(() => {
    loginModal.style.display = 'none'
  }, 200);
})

function openLoginModal(){
  loginModal.style.display = 'grid'
  loginModal.style.transform = 'scale(1)'
  loginModal.style.opacity = '1'
}


