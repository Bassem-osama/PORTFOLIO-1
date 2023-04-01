let banner = document.querySelector('.banner');
    let daynight = document.querySelector('.daynight');
    let about = document.querySelector('.about');
    let about_me = document.querySelector('.about-me');
  
    daynight.onclick = function(){
      banner.classList.toggle('night');
      about.classList.toggle('night');
      about_me.classList.toggle('night');
    };

    window.onscroll = function(){
      let value = scrollY;
    
      console.log(value);
      if(value = 785.5999755859375){

      }

    }