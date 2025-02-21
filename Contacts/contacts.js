$(document).ready(function(){
    const username = localStorage.getItem('Prakash');
    if (username) {
        const userDetails = JSON.parse(username);
        console.log(userDetails);
        if (userDetails) {
            $('.navbar').append('<div class="ml-auto user-info"><button class="btn btn-sm btn-outline-dark" id="userNameBtn"><i class="fa-solid fa-user mr-2"></i>' + userDetails.name + '</button><button class="btn btn-sm btn-outline-dark ml-2 d-none" id="logoutBtn">Logout</button></div>');
        } else {
            console.error('User details not found in local storage.');
        }
    } else {
        console.error('Username not found in local storage.');
        $('.navbar').append('<button class="btn btn-sm btn-outline-primary ml-auto" id="loginBtn">Login</button>');
    }

    $(document).on('click', '#userNameBtn', function() {
        $('#logoutBtn').toggleClass('d-none');
    });

    $(document).on('click', '#logoutBtn', function() {
        // Hide the user's name and show the login button without removing details from local storage
        $('.user-info').remove();
        $('.navbar').append('<button class="btn btn-sm btn-outline-dark ml-auto" id="loginBtn">Login</button>');
    });

    $(document).on('click', '#loginBtn', function() {
        window.location.href = '../login_signup/login.html'; // Redirect to the login page
    });

    $('form').on('submit', function(event){
        event.preventDefault();

        var valid = true;
        $('.form-control').each(function(){
            if ($(this).val() === '') {
                valid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        if (valid) {
            // Submit the form
            // You can use AJAX to submit the form data without reloading the page
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out all fields.');
        }
    });
    //navbar
});