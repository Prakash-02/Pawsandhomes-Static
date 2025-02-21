$(document).ready(function(){
    $('#signupForm').on('submit', function(event){
        event.preventDefault();
        storeSignUp();
    });
    function storeSignUp(){
        const username = $('#username').val();
        const name = $('#signupname').val();
        const password = $('#signuppassword').val();
        const rePassword = $('#signupre-enterpassword').val();

        if(localStorage.getItem(username)){
            alert('Username already exists, please choose another.');
            return;
        }

        if(password === rePassword){
            localStorage.setItem(username, JSON.stringify({ name: name, password: password}));
            alert('You are now registered.');
           // event.preventDefault();
        }else{
            alert('Passwords do not match, please try again.');
        }
    }
});