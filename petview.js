$(document).ready(function() {
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
                            <button class="btn btn-outline-warning more-info  mx-2 my-2" data-id="${pet.id}" data-toggle="modal" data-target="#petModal">More Info</button>
                            <button class="btn btn-outline-primary update-pet  mx-2 my-2" data-id="${pet.id}">Update</button>
                            <button class="btn btn-outline-danger delete-pet mx-2 my-2" data-id="${pet.id}">Delete</button>
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

        // Add event listener for "Update" buttons
        $('.update-pet').on('click', function() {
            const petId = $(this).data('id');
            const pet = pets.find(p => p.id === petId);
            // Logic to update pet details goes here
            alert('Update pet details for: ' + pet.name);
        });

        // Add event listener for "Delete" buttons
        $('.delete-pet').on('click', function() {
            const petId = $(this).data('id');
            // Logic to delete the pet goes here
            alert('Delete pet with ID: ' + petId);
        });
    }

    // Display all pets initially
    displayPets(pets);

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
