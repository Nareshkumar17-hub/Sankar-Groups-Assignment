

  // this code is for mobile navbar 
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");


    menuBtn.addEventListener("click" , () => {

      
        mobileMenu.classList.toggle("max-h-64") ;
  
  



    }) 


   

    // this is for form validation  

    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    successMessage.classList.remove("hidden");
    contactForm.reset();
});