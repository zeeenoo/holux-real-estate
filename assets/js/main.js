// // show menu on click
// const navMenu=document.getElementById('nav-menu'),
//      navToggle=document.getElementById('nav-toggle'),
//      navClose=document.getElementById('nav-close')
// //show menu
//     // Validate if constant exists
//      if(navToggle){
//      }
//       navToggle.addEventListener('click',()=>{
//           navMenu.classList.add('show-menu')
//       })

//       //menu hidden
//       /*Validate if constant exists*/
// if(navClose){
// }
//     navClose.addEventListener('click',()=>{
//    })
//        navMenu.classList.remove('show-menu')



//        //=== REMOVE MENU MOBILE ==
//        const navLink=document.querySelectorAll('.nav_link')
//        function linkAction(){
//        const navMenu=document.getElementById('nav-menu')
//        // When we click on each nav_link,we remove the show-menu class
//        navMenu.classList.remove('show-menu')
//        }
//        navLink.forEach(n=>n.addEventListener('click',linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header=document.getElementById('header')
    // When the scroll is greater than 50 viewport height,add the scroll-header class to the header tag
if(this.scrollY>=50)header.classList.add('scroll-header');
else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
                                                   

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 30, // space between each slide
    grapCursor: true, // enable grab cursor
    autoplay: {
        delay: 2500, // delay between each slide
        disableOnInteraction: false, // stop autoplay when we interact with the slider
    },
    centredSlides: true, // center the slides
    slidesPerView: 'auto', // number of slides to show
    loop: true, // enable loop mode
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*=============== VALUE ACCORDION ===============*/
const accordionItems=document.querySelectorAll('.value__accordion-item') // get all the accordion items in the page
accordionItems.forEach(item=>{ // for each item in the array
    item.addEventListener('click',()=>{ // add an event listener to the item
        const accordionHeader=item.querySelector('.value__accordion-header') // get the header of the item clicked on the page  and store it in a constant
        accordionHeader.addEventListener('click',()=>{
            //show by one click
            const openItem = document.querySelector('.accoding-open') // get the open item in the page and store it in a constant

            toggleItem(item) // call the toggleItem function and pass the item as parameter
            if(openItem && openItem!==item) { // if there is an open item in the page
                toggleItem(openItem)// call the toggleItem function and pass the open item as parameter
            }
        })// add an event listener to the header of the item clicked on the page
    })
    const toggleItem = (item) => { // create a function to toggle the item
        const accordionContent=item.querySelector('.value__accordion-content') // get the content of the item clicked on the page  and store it in a constant
        if(item.classList.contains('accordion-open')){ 
           accordionContent.removeAttribute('style') // remove the style attribute from the content 
              item.classList.remove('accordion-open') // remove the accordion-open class from the item
        }else{


        accordionContent.style.height=accordionContent.scrollHeight+'px' // set the height of the content to the height of the content plus the scroll height of the content
        item.classList.add('accordion-open') // add the active class to the item clicked on the page
    }
    }
} )



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]')
function scrollActive(){

   const scrollY=window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
              sectionTop=current.offsetTop -58,
              sectionId=current.getAttribute('id')
        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
           document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active-link')
        }else{
           document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active-link')
        }
    } )
}
    window.addEventListener('scroll',scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
   // When the scroll is higher than 350 viewport height,add the show-scroll class to theatag with the scroll
   if(this.scrollY>=350) scrollUp.classList.add('show-scroll');                                                                
   else scrollUp.classList.remove('show-scroll')}

window.addEventListener('scroll',scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='bx-sun'
// Previously selected topic(if user selected)
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?'bx bx-moon':'bx bx-sun'
// We validate if the user previously choseatopic
if(selectedTheme){
    // If the validation is fulfilled,we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme ==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon ==='bx bx-moon'?'add':'remove'](iconTheme)
}
// Activate/deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    // Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
                                               
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    
})
    

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal('.home__title,.popular__container,.subscribe__container,.footer__container',{})
sr.reveal('.home__description,.footer__info',{delay:500})
sr.reveal('.home__search',{delay:600})
sr.reveal('.home__value',{delay:700})
sr.reveal('.home__images',{delay:800,origin:'bottom'})   
sr.reveal('.logo__img',{interval:100}) 
sr.reveal('.value__images,.contact__content',{origin:'left'})   
sr.reveal('.value__content,.contact__images',{origin:'right'})  



