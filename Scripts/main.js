const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

const visibilityBtn = document.getElementById("visibilityBtn")
visibilityBtn.addEventListener("click",toggleVisibilty)

function toggleVisibilty(){
    const passwordInput = document.getElementById("password")
    const icon = document.getElementById("icon")
    if (passwordInput.type==="password"){
        passwordInput.type="text"
        icon.innerText= "visibility_off"
    }
    else{
            passwordInput.type="password"
            icon.innerText= "visibility"
    }
}

const visibilityBut = document.getElementById("visibilityBut")
visibilityBut.addEventListener("click",tVisibility)

function tVisibility(){
    const CpasswordInput = document.getElementById("Cpassword")
    const icons = document.getElementById("icons")
    if (CpasswordInput.type==="password"){
        CpasswordInput.type="text"
        icons.innerText= "visibility_off"
    }
    else{
            CpasswordInput.type="password"
            icons.innerText= "visibility"
    }
}



class FormValidator {
    constructor(form, fields) {
      this.form = form
      this.fields = fields
    }
  
    initialize() {
      this.validateOnEntry()
      this.validateOnSubmit()
    }
  
    validateOnSubmit() {
      let self = this
  
      this.form.addEventListener('submit', e => {
          e.preventDefault()
          self.fields.forEach(field => {
          const input = document.querySelector(`#${field}`)
          self.validateFields(input)
        })
      })
    }
  
    validateOnEntry() {
      let self = this
      this.fields.forEach(field => {
        const input = document.querySelector(`#${field}`)
  
        input.addEventListener('input', event => {
          self.validateFields(input)
        })
      })
    }
  
    validateFields(field) {
  
      
      if (field.value.trim() === "") {
        this.setStatus(field, `${field.previousElementSibling.innerText} cannot be blank`, "error")
      } else {
        this.setStatus(field, null, "success")
      }
  
      
      if (field.type === "email") {
        const re = /\S+@\S+\.\S+/
        if (re.test(field.value)) {
          this.setStatus(field, null, "success")
        } else {
          this.setStatus(field, "Please enter valid email address", "error")
        }
      }
  
      
      if (field.id === "Cpassword") {
        const passwordField = this.form.querySelector('#password')
  
        if (field.value.trim() == "") {
          this.setStatus(field, "Password confirmation required", "error")
        } else if (field.value != passwordField.value) {
          this.setStatus(field, "Password does not match", "error")
        } else {
          this.setStatus(field, null, "success")
        }
      }
    }
  
    setStatus(field, message, status) {
      const successIcon = field.parentElement.querySelector('.icon-success')
      const errorIcon = field.parentElement.querySelector('.icon-error')
      const errorMessage = field.parentElement.querySelector('.error-message')
  
      if (status === "success") {
        if (errorIcon) { errorIcon.classList.add('hidden') }
        if (errorMessage) { errorMessage.innerText = "" }
        successIcon.classList.remove('hidden')
        field.classList.remove('input-error')
      }
  
      if (status === "error") {
        if (successIcon) { successIcon.classList.add('hidden') }
        field.parentElement.querySelector('.error-message').innerText = message
        errorIcon.classList.remove('hidden')
        field.classList.add('input-error')
      }
    }
  }
  
  
 
function submit_by_class() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phonenumber = document.getElementById("phonenumber").value;
        var Cpassword = document.getElementById("Cpassword").value;
        var male = document.getElementById("gridRadios1").value;
        var female = document.getElementById("gridRadios2").value;
    
        if (validator()) // Calling validation function
        {
            var x = document.getElementsByClassName("form");
        x[0].submit(); //form submission
        }
        }

