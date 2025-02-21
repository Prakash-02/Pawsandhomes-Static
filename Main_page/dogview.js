$(document).ready(function() {
    // Sample dog data
    const dogs = [
        {
            id: 1,
            name: "Bella",
            age: "Adult",
            size: "Medium",
            location: "New York",
            image: "../images/find_a_pet/pet1.jpg",
            description: "Friendly and energetic."
        },
        {
            id: 2,
            name: "Max",
            age: "Puppy",
            size: "Small",
            location: "Los Angeles",
            image: "../images/find_a_pet/pet2.jpg",
            description: "Loyal and playful."
        }
    ];

    function displayDogs(dogs) {
        $('#dogList').empty();
        dogs.forEach(dog => {
            $('#dogList').append(`
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${dog.image}" class="card-img-top" alt="${dog.name}">
                        <div class="card-body">
                            <h5 class="card-title">${dog.name}</h5>
                            <p class="card-text">${dog.description}</p>
                            <button class="btn btn-outline-warning more-info" data-id="${dog.id}" data-toggle="modal" data-target="#dogModal">More Info</button>
                        </div>
                    </div>
                </div>
            `);
        });

        // Add event listener for "More Info" buttons
        $('.more-info').on('click', function() {
            const dogId = $(this).data('id');
            const dog = dogs.find(d => d.id === dogId);
            $('#dogModalBody').html(`
                <img src="${dog.image}" class="img-fluid mb-3" alt="${dog.name}">
                <h5>Dog Name: ${dog.name}</h5>
                <h5>Age: ${dog.age}</h5>
                <h5>Size: ${dog.size}</h5>
                <p>Details: ${dog.description}</p>
            `);
        });
    }

    // Display all dogs initially
    displayDogs(dogs);
});
