const current = document.querySelector('#current');
const enlargeMessages = document.querySelectorAll('.photo-overlay');
const modal = document.getElementById('modal');
const overlay = document.querySelectorAll('.photo-overlay');
const examplesModalContainer = document.querySelector('.examples-modal-container');
const signupBtns = document.querySelectorAll('.signup-btn');
const signupForm = document.querySelector('.signup-form');
const toggleBtn = document.querySelector('.menu-toggle-button');
const mobileNav = document.querySelector('.nav-links-mobile');
const contactForm = document.querySelector('.contactForm');
const closeBtn = document.querySelector('closeBtn');
const body = document.querySelector('body');
const thankYouMessage = document.querySelector('.thank-you-message');
const about = $('#about').offset().top;
const inputFields = document.querySelectorAll('.input-field');
const mobileLink = document.querySelectorAll('.mobileLink');

function toggleMenu(){
  mobileNav.classList.toggle('active');
  if(toggleBtn.firstElementChild.classList.contains('fa-bars')){
    toggleBtn.firstElementChild.className = 'fas fa-times';
  } else {
    toggleBtn.firstElementChild.className = 'fas fa-bars';
  }
}

function imgClick(e){
  modal.style.display = 'block';
  examplesModalContainer.style.display = 'flex';
  if(e.target.classList.contains('photo-overlay')){
    current.src = e.target.previousElementSibling.src;
  } else {
    current.src = e.target.parentNode.previousElementSibling.src;
  }
}

function closeModal(e){
  if(e.target.classList.contains('closeBtn')){
    modal.style.display = 'none';
    thankYouMessage.style.display = 'none';
  }
}

function clickOutside(e){
  if(e.target == modal || e.target == examplesModalContainer){
  modal.style.display = 'none';
  signupForm.style.display = 'none';
  inputFields.forEach(inputField => {
    inputField.classList.remove('input-error');
  });
  const errorMessages = document.querySelectorAll('.error-text');
  errorMessages.forEach(message => {
    message.remove();
  });
  }
}

function openSignupModal(){
  examplesModalContainer.style.display = 'none';
  thankYouMessage.style.display = 'none';
  modal.style.display = 'block';
  signupForm.style.display = 'block';
}

function submitContactForm(e){
  e.preventDefault();
  const name = document.getElementById('contactName');
  const email = document.getElementById('contactEmail');
  const message = document.getElementById('contactMessage');
  if(name.value !== '' && email.value !== '' && message.value !== ''){
    email.value = '';
    message.value = '';
    openThankYouMessage(`Thanks for the message ${name.value}! <br><br> We will be in touch as soon as possible!`);
    name.value ='';
  } else {
    if(!name.value){
      sendInputErrorMessage(name, 'name', contactForm);
    }
    if(!email.value){
      sendInputErrorMessage(email, 'email', contactForm);
    }
    if(!message.value){
      sendInputErrorMessage(message, 'message', contactForm);
    }
  }
}

function submitSignupForm(e){
  e.preventDefault();
  const signupName = document.getElementById('signupName');
  const signupEmail = document.getElementById('signupEmail');
  const signupPassword = document.getElementById('signupPassword');
  const signupConfirmPassword = document.getElementById('signupConfirmPassword');

  if(signupName.value !== '' && signupEmail.value !== '' && signupPassword.value !== '' && signupConfirmPassword.value !== '') {
    if(signupPassword.value === signupConfirmPassword.value){
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      signupForm.style.display = 'none';
      openThankYouMessage(`Welcome ${name}! <br><br> Thanks for signing up! <br><br> A confirmation email has now been sent to ${email}.`)
    } else {
      sendInputErrorMessage(signupConfirmPassword, 'confirm password', signupForm);
    }
  } else {
    if(!signupName.value){
      sendInputErrorMessage(signupName, 'name', signupForm);
    }
    if(!signupEmail.value){
      sendInputErrorMessage(signupEmail, 'email', signupForm);
    }
    if(!signupPassword.value){
      sendInputErrorMessage(signupPassword, 'password', signupForm);
    }
    if(!signupConfirmPassword.value){
      sendInputErrorMessage(signupConfirmPassword, 'confirm password', signupForm);
    }
  }
}

function sendInputErrorMessage(inputName, inputNameString, parent){
  inputName.classList.add('input-error');
  const errorMessage = document.createElement('label');
  errorMessage.classList.add ('error-text');
  if(inputName !== signupConfirmPassword){
    errorMessage.textContent = `Please fill in ${inputNameString} field.`;
    parent.insertBefore(errorMessage, inputName);
  } else {
    errorMessage.textContent = `Both passwords do not match.`;
    parent.insertBefore(errorMessage, inputName);
  }
}

function openThankYouMessage(message){
  clearAllInputFields();
  modal.style.display = 'block';
  thankYouMessage.innerHTML = `<i class="fas fa-times closeBtn"></i><p>${message}</p>`;
  thankYouMessage.style.display = 'block';
}

function clearAllInputFields(){
  inputFields.forEach(input => input.value = '');
}

function clearErrorMessages(e){
  e.target.classList.remove('input-error');
  if(e.target.previousElementSibling.classList.contains('error-text')){
    e.target.previousElementSibling.remove();
  }
}

function hideSideNav(){
  if(mobileNav.classList.contains('active')){
    mobileNav.classList.remove('active');
    toggleBtn.firstElementChild.className = 'fas fa-bars';
  }
}

// add event listener for toggle button
toggleBtn.addEventListener('click', toggleMenu);

// add event listener to open sign up form modal
signupBtns.forEach(button => button.addEventListener('click', openSignupModal));
// set up event listener to close modal on click outside
window.addEventListener('click', clickOutside);

// add event listener to every enlarge message
enlargeMessages.forEach(message => message.addEventListener('click', imgClick));

// add event listener to contact form submission
contactForm.addEventListener('submit', submitContactForm);

// add event listener for close thankyou modal using event delegation
body.addEventListener('click', closeModal);

// add event listener for submitting sign up form
signupForm.addEventListener('submit', submitSignupForm);

// add event listener to clear error styling on input focus
inputFields.forEach(inputField => {
  inputField.addEventListener('focus', clearErrorMessages);
});

// add event listener to hide sidenav once link has been clicked
mobileLink.forEach(link => {
  link.addEventListener('click', hideSideNav);
});

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
