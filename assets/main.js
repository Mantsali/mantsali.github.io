const navslide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu li');

  
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');//toggl;e nav

     //animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 5}s`;
      }
    });

    //burger animation
    burger.classList.toggle('toggle');

  });

 
}

const sendEmail = () =>{
  const contactForm = document.getElementById("contactForm");


  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const errEmail = document.querySelector(".email-err");
  const errMessage = document.querySelector(".message-err");
  const errName = document.querySelector(".name-err");

  async function submitForm(url , data ){

    await fetch(url, {
      method: 'POST', 
      body: data
    }).then(response => response.text()).then(response => {
      return response;
    }).catch(error => {return error});

  }
  const resetElem = (elem) =>{
    elem.classList.remove("invalid");
  }
  const validateEmail = () =>{

    resetElem(email);
    errEmail.innerText = '';

    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
      return true;
    }
    email.classList.add("invalid");
    errEmail.innerText = "Email is invalid";
    return false;
  }

  const validateInputs = () => {
    resetElem(name);
    resetElem(message);
    errMessage.innerText = '';
    errName.innerText = '';
    
    if(!name.value){
      email.classList.add("invalid");
      errName.innerText = "Please enter a name";
      return false;
    }
    if(!name.value){
      email.classList.add("invalid");
      errMessage.innerText = "Please write your message";
      return false;
    }
    

    return true;
  }


  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    //submitForm();

  if(validateEmail() && validateInputs()){

    const data = new URLSearchParams();

    for(const p of new FormData(contactForm)){
      data.append(p[0], p[1]);
    }

    
    
      document.querySelector('success-message').innerText = submitForm("send.php", data);
    }
  
});


}


navslide();
sendEmail();
