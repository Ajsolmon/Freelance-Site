const header = document.querySelector('.header');
const toggle  = document.querySelector('#hamburger')

window.onscroll = function(){
    let scroll = window.scrollY
    
    if(scroll<50){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}

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