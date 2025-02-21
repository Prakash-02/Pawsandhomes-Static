$(document).ready(function(){
    $('#login-form').submit(function(event){
        event.preventDefault(); // Prevent form submission

        const username = $('.login-box input[type="text"]').val();
        const password = $('.login-box input[type="password"]').val();

        const userDetails = localStorage.getItem(username);
        if(userDetails){
            const userDetailsObj = JSON.parse(userDetails);

            if(userDetailsObj.password === password){
                alert('You are now logged in.');
                window.location.href = '../Main_page/main.html'; // Redirect to main.html
            }else{
                alert('Incorrect password. Please try again.');
            }
        } else {
            alert('Username does not exist. Please register.');
        }
    });
});

