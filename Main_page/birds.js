$(document).ready(function() {
    // Sample bird data
    const birds = [
        {
            id: 1,
            name: "Tweety",
            age: "Adult",
            size: "Small",
            location: "New York",
            image: "../images/find_a_pet/bird1.jpg",
            description: "Singing and cheerful."
        },
        {
            id: 2,
            name: "Polly",
            age: "Young",
            size: "Medium",
            location: "Los Angeles",
            image: "../images/find_a_pet/bird2.jpg",
            description: "Talkative and friendly."
        }
    ];

    function displayBirds(birds) {
        $('#birdList').empty();
        birds.forEach(bird => {
            $('#birdList').append(`
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${bird.image}" class="card-img-top" alt="${bird.name}">
                        <div class="card-body">
                            <h5 class="card-title">${bird.name}</h5>
                            <p class="card-text">${bird.description}</p>
                            <button class="btn btn-outline-warning more-info" data-id="${bird.id}" data-toggle="modal" data-target="#birdModal">More Info</button>
                        </div>
                    </div>
                </div>
            `);
        });

        // Add event listener for "More Info" buttons
        $('.more-info').on('click', function() {
            const birdId = $(this).data('id');
            const bird = birds.find(b => b.id === birdId);
            $('#birdModalBody').html(`
                <img src="${bird.image}" class="img-fluid mb-3" alt="${bird.name}">
                <h5>Bird Name: ${bird.name}</h5>
                <h5>Age: ${bird.age}</h5>
                <h5>Size: ${bird.size}</h5>
                <p>Details: ${bird.description}</p>
            `);
        });
    }

    // Display all birds initially
    displayBirds(birds);
});
