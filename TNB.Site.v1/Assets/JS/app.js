
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    // document.getElementById("main-header").style.fontSize = "30px";
    document.getElementById("main-header").classList.add("scrolled");
    document.getElementById("logo-img").classList.add("scrolled");
    document.querySelector('ul.header-links').classList.add("scrolled");
    document.querySelector('.menu-buttons').classList.add("scrolled");

  } else {
    // document.getElementById("main-hedear").style.fontSize = "90px";
    document.getElementById("main-header").classList.remove("scrolled");
    document.getElementById("logo-img").classList.remove("scrolled");
    document.querySelector('ul.header-links').classList.remove("scrolled");
    document.querySelector('.menu-buttons').classList.remove("scrolled");



  }
}







// function focusFunc(){
//   console.log(this.getAttribute('placeholder'));
//   attr = this.getAttribute('placeholder');
//   this.style.direction = "ltr";
//   this.setAttribute('placeholder', '');
//   return attr;
// }

// function focusOut(){
//   console.log(this);
//   this.style.direction = "ltr";
//   this.setAttribute('placeholder', 'a');
// }


/*add this html to page in hamicon







<!--
article: https://raygun.io/blog/2014/07/making-svg-html-burger-button/
-->

<div id="hamburger" class="hamburglar is-open">

    <div class="burger-icon">
      <div class="burger-container">
        <span class="burger-bun-top"></span>
        <span class="burger-filling"></span>
        <span class="burger-bun-bot"></span>
      </div>
    </div>
    
    <!-- svg ring containter -->
    <div class="burger-ring">
      <svg class="svg-ring">
	      <path class="path" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4" d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2" />
      </svg>
    </div>
    <!-- the masked path that animates the fill to the ring -->
    
 		<svg width="0" height="0">
       <mask id="mask">
    <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" stroke-miterlimit="10" stroke-width="4" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />
       </mask>
     </svg>
    <div class="path-burger">
      <div class="animate-path">
        <div class="path-rotation"></div>
      </div>
    </div>
      
  </div>

<h4>Click the Icon</h4>



*/ 

// let tst_section = document.querySelectorAll('.testimonials-section');

// tst_section.forEach(function(box, index){
//   if((index%2 )== 0){
    
//   }
// })
// console.log(tst_section);

