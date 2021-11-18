let mobileFixedHeader = document.querySelector('.show-header');
let header = document.querySelector('.header');

document.addEventListener('DOMContentLoaded', () => {
    new Splide( '.splide', { 
        pagination: false,
      } ).mount();

    let prevScroll = window.pageYOffset;
    window.onscroll = () => {
        let currentScroll = window.pageYOffset;
        if(currentScroll > 50 && currentScroll > prevScroll){
            mobileFixedHeader.style.top = '-50%';
        }else{
            if(currentScroll > 50){
                mobileFixedHeader.style.background = 'rgb(2,2,2)';
            }else{
                mobileFixedHeader.style.background = 'none';
            }
            mobileFixedHeader.style.top = '0px';
        }
        prevScroll = currentScroll;
    }

    // Close Header when click to items
    Array.from(header.children).forEach((element) => {
        if(element.classList[0] == 'header__search'){
            return;
        }
        if(screen.width < 900){
            element.addEventListener('click', function() {
                headerClose();
            });
        }
    });
});

function headerClose(){
    mobileFixedHeader.style.opacity = '100';
    header.style.left = '100vw';
}

function showPrev(el){
    mobileFixedHeader.style.opacity = '0';
    header.style.left = '0px';
}

function scrollToClassElement(e, clss){
    e.preventDefault();
    document.querySelector('.' + clss).scrollIntoView({block: "center", behavior: "smooth"});
}