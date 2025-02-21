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

    // Sample pet data
    const pets = [
        {
            id: 1,
            name: "Bella",
            type: "Dog",
            age: "Adult",
            size: "Medium",
            location: "New York",
            image: "../images/find_a_pet/pet1.jpg",
            description: "Friendly and energetic."
        },
        {
            id: 2,
            name: "Max",
            type: "Dog",
            age: "Puppy",
            size: "Small",
            location: "Los Angeles",
            image: "../images/find_a_pet/pet2.jpg",
            description: "Loyal and playful."
        }
    ];
    //navbar
    function displayPets(pets) {
        $('#petList').empty();
        pets.forEach(pet => {
            $('#petList').append(`
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${pet.image}" class="card-img-top" alt="${pet.name}">
                        <div class="card-body">
                            <h5 class="card-title">${pet.name}</h5>
                            <p class="card-text">${pet.description}</p>
                            <button class="btn btn-outline-warning more-info" data-id="${pet.id}" data-toggle="modal" data-target="#petModal">More Info</button>
                        </div>
                    </div>
                </div>
            `);
        });

        // Add event listener for "More Info" buttons
        $('.more-info').on('click', function() {
            const petId = $(this).data('id');
            const pet = pets.find(p => p.id === petId);
            $('#petModalBody').html(`
                <img src="${pet.image}" class="img-fluid mb-3" alt="${pet.name}">
                <h5>Pet Name: ${pet.name}</h5>
                <h5>Age: ${pet.age}</h5>
                <h5>Size: ${pet.size}</h5>
                <p>Details: ${pet.description}</p>
            `);
        });
    }

    // Display all pets initially
    displayPets(pets);
    // Filter pets
    $('#filterButton').on('click', function() {
        const type = $('#petType').val();
        const age = $('#petAge').val();
        const size = $('#petSize').val();
        const location = $('#petLocation').val().toLowerCase();

        const filteredPets = pets.filter(pet => {
            return (type === 'All' || pet.type === type) &&
                   (age === 'All' || pet.age === age) &&
                   (size === 'All' || pet.size === size) &&
                   (location === '' || pet.location.toLowerCase().includes(location));
        });
        displayPets(filteredPets); 
    }); 
});      