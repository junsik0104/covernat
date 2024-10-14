document.addEventListener(`DOMContentLoaded`,function(){
    new Swiper(".sec1_Swiper", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      loop: true,
      breakpoints:{
        375:{
          slidesPerView: 3,
        },

        760:{
          slidesPerView: 5,
        }
      }
      
    });

    var swiper = new Swiper(".sec2_Swiper", {
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
        loop: true,
        slidesPerView: 3,
    });

    // hamburgerBtn
    const hamBtn = document.querySelector(`.hambur`);
    const hamMenu = document.querySelector(`.ham_menu`);
    const closeBtn = document.querySelector(`.menu_close`);

    hamBtn.addEventListener(`click`,() =>{
      hamMenu.classList.add(`active`);
      closeBtn.addEventListener(`click`,() =>{
        hamMenu.classList.remove(`active`);
      });
    });

    // scroll

    const headerArea = document.querySelector(`.header_area`);

    window.addEventListener(`scroll`,function(){
      const height = window.scrollY;

      console.log(height);

      if(height >= 600){
        headerArea.classList.add(`active`);
      } else{
        headerArea.classList.remove(`active`);
      }
    });

    const tabBtns = document.querySelectorAll(`.sec2_new_container .menu li`);

    for(const tabBtn of tabBtns){
      tabBtn.addEventListener(`click`,function(){
        this.classList.add(`on`);

        for(removeBtn of tabBtns){
          if(removeBtn != this){
             removeBtn.classList.remove(`on`);
          }
        }

        const tab = this.getAttribute(`data-tab`);
        const tabBox = document.querySelectorAll(`.sec2_new_container .container`);

        for(const tabContent of tabBox){
          tabContent.classList.remove(`on`);
        }

        const changeTeb = document.querySelector(`#${tab}`);
        changeTeb.classList.add(`on`);
      });
    }
});