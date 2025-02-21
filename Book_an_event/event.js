$(document).ready(function() {
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
    const events = [
        { id: 1, name: "Dog Show 2024", date: "January 12, 2024", location: "Central Park", description: "Join us for an exciting dog show!", image: "../images/pet_events/Event1.jpg" },
        { id: 2, name: "Pet Adoption Fair", date: "February 5, 2024", location: "City Hall", description: "Find your perfect pet companion.", image: "../images/pet_events/event2.jpg" }
    ];
    // navbar
    // Function to display event cards
    function displayEventCards(events) {
        $('#eventCards').empty();
        events.forEach(event => {
            const eventCard = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${event.image}" class="card-img-top" alt="${event.name}">
                        <div class="card-body">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text">${event.date} - ${event.location}</p>
                            <p class="card-text">${event.description}</p>
                            <button class="btn btn-primary book-now" data-event="${event.name}">Book Now</button>
                        </div>
                    </div>
                </div>
            `;
            $('#eventCards').append(eventCard);
        });
    }

    // Function to display registered event cards
    function displayRegisteredEventCards(events) {
        $('#registeredEventCards').empty();
        events.forEach(event => {
            const eventCard = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${event.image}" class="card-img-top" alt="${event.name}">
                        <div class="card-body">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text">${event.date} - ${event.location}</p>
                            <p class="card-text">${event.description}</p>
                        </div>
                    </div>
                </div>
            `;
            $('#registeredEventCards').append(eventCard);
        });
    }

    // Initial display of event cards
    displayEventCards(events);

    // Filter events based on search input
    $('#filterBtn').click(function() {
        const searchTerm = $('#searchInput').val().toLowerCase();
        const filteredEvents = events.filter(event =>
            event.name.toLowerCase().includes(searchTerm) ||
            event.date.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm)
        );
        displayEventCards(filteredEvents);
    });

    // Handle book now button click
    $(document).on('click', '.book-now', function() {
        const selectedEvent = $(this).data('event');
        $('#event').val(selectedEvent);
        $('html, body').animate({
            scrollTop: $("#registrationForm").offset().top
        }, 1000);
    });

    // Handle registration form submission
    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        const registeredEvent = events.find(event => event.name === $('#event').val());
        displayRegisteredEventCards([registeredEvent]); // Display only the registered event
        alert('Thank you for registering for ' + $('#event').val() + '!');
        this.reset();
    });

    // Handle create event form submission
    $('#createEventForm').submit(function(e) {
        e.preventDefault();
        const newEvent = {
            id: events.length + 1,
            name: $('#createEventName').val(),
            date: $('#createEventDate').val(),
            location: $('#createEventLocation').val(),
            description: $('#createEventDescription').val(),
            image: $('#createEventImage').val()
        };
        events.push(newEvent);
        displayCreatedEventCards([newEvent]); // Display only the newly created event
        alert('Event created successfully!');
        this.reset();
    });
});
