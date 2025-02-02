const signup = (event)=>{
    
    event.preventDefault();
    var form =  document.forms.register;
    var user = {
        fullname : form.elements.fullname.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        phone: form.elements.phonenumber.value
    };
    console.log(user);
};