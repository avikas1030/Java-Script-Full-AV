// function colorChanger(){
//     var input = document.getElementById("color-picker");
//     var body = document.body;
//     body.style.backgroundColor = input.value;
// }

function login(event){
    event.preventDefault();
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    alert(username.value);
    alert(password.value);
}