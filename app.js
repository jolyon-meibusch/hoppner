const current = document.querySelector('#current');
const enlargeMessages = document.querySelectorAll('.photo-overlay');
const modal = document.getElementById('modal');
const overlay = document.querySelectorAll('.photo-overlay');
const modalContainer = document.querySelector('.modal-container');
const about = $('#about').offset().top;

// add event listener to every enlarge message
enlargeMessages.forEach(message => message.addEventListener('click', imgClick));

window.addEventListener('click', clickOutside);

function imgClick(e){
  modal.style.display = 'block';
  if(e.target.classList.contains('photo-overlay')){
    console.log(123);
    current.src = e.target.previousElementSibling.src;
  } else {
    current.src = e.target.parentNode.previousElementSibling.src;
  }
}

function clickOutside(e){
  if(e.target == modal || e.target == modalContainer){
  modal.style.display = 'none';}
}

$(document).scroll(function() {
  let scrollPos = $(document).scrollTop();
  if (scrollPos >= about) {
    $('.main-header').css('background-color', '#383d30');
  } else {
    $('.main-header').css('background-color', 'transparent');
  }
});


// scroll spy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {
      scrollOffset:   0
    });
