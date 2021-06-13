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

navslide();

let contactForm = document.getElementById("contactForm");

let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");


async function submitForm(url , data ){

  const response = await fetch(url, {
    method: 'POST', headers: {
      "content-type": "application/json"

    }, 
    body: JSON.stringify(data)
  });


  return response.json();
}

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    //submitForm();
      const data = new URLSearchParams();

    for(const p of new FormData(contactForm)){
      data.append(p[0], p[1]);
    }

    fetch('send.php',{
      method: 'POST',
      body: data
    }).then(response => response.text()).then(response => {
      console.log(response);
    }).catch(error => console.log(error));
    //submitForm("test.php", {name: name.value});
});