
$(document).ready(function() {
    const username = localStorage.getItem('Prakash');
    if (username) {
        const userDetails = JSON.parse(username);
        console.log(userDetails);
        if (userDetails) {
            $('.navbar').append('<div class="ml-auto user-info"><button class="btn btn-sm btn-outline-dark" id="userNameBtn">' + userDetails.name + '</button><button class="btn btn-sm btn-outline-dark ml-2 d-none" id="logoutBtn">Logout</button></div>');
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
    // visited events
const visitedEvents = [
    { id: 1, title: "Pet Adoption Fair", date: "January 15, 2024", visitedDate: "January 15, 2024", description: "Join us for a day of pet adoption and find your perfect companion." },
    { id: 2, title: "Charity Walkathon", date: "February 20, 2024", visitedDate: "February 20, 2024", description: "Participate in our charity walkathon to support animal shelters." },
    { id: 3, title: "Animal Shelter Fundraiser", date: "March 10, 2024", visitedDate: "March 10, 2024", description: "Help us raise funds for local animal shelters." },
    { id: 4, title: "Community Clean-Up Day", date: "April 15, 2024", visitedDate: "April 15, 2024", description: "Join us in cleaning up our local parks and streets." },
    { id: 5, title: "Charity Fun Run", date: "May 20, 2024", visitedDate: "May 20, 2024", description: "Participate in our 5K run to support children's education." },
    { id: 6, title: "Food Drive", date: "June 5, 2024", visitedDate: "June 5, 2024", description: "Help us collect non-perishable food items for families in need." }
];
// navbar

// Function to display visited event cards
function displayVisitedEventCards(events) {
    $('#visitedEventCards').empty();
    events.forEach(event => {
        const eventCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">Visited on: ${event.visitedDate}</p>
                        <button class="btn btn-outline-warning details-btn" data-toggle="modal" data-target="#detailsModal" data-id="${event.id}">View Details</button>
                    </div>
                </div>
            </div>
        `;
        $('#visitedEventCards').append(eventCard);
    });
}

// Initial display of visited event cards
displayVisitedEventCards(visitedEvents);

// Event handler for details button click
$('#detailsModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var eventId = button.data('id'); // Extract info from data-* attributes
    
    var eventDetails = visitedEvents.find(event => event.id === eventId).description; // Fetch event details
    
    // Update the modal's content
    var modal = $(this);
    modal.find('.modal-body').text(eventDetails);
});
});
