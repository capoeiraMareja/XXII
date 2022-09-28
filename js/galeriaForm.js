//Listen for a submit
/*
var name = document.getElementById('name');
var number = document.getElementById('number');
var msg = document.getElementById('subject');

function myclick() {
  var name = document.contato.name.value;
  var number = document.contato.number.value;
  var subject = document.contato.subject.value;
  window.alert(name, number, subject);
} */

 


 const contactForm = document.querySelector(".form-contact");
 const nome = document.querySelector(".nome");
 const number = document.querySelector(".number");
 const subject = document.querySelector(".subject");

 const submit = document.querySelector(".submit-form");

 

   submit.addEventListener('click', (e) => {
      e.preventDefault();
      db.collection('form-contact').doc().set({
         Nome: nome.value,
         Numero: number.value,
         Subject: subject.value
      }).then(() =>{
         contactForm.reset();
      })
    });

 

 

