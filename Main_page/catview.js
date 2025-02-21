$(document).ready(function() {
    // Sample cat data
    const cats = [
        {
            id: 1,
            name: "Luna",
            age: "Adult",
            size: "Medium",
            location: "New York",
            image: "../images/find_a_pet/cat1.jpg",
            description: "Curious and affectionate."
        },
        {
            id: 2,
            name: "Milo",
            age: "Kitten",
            size: "Small",
            location: "Los Angeles",
            image: "../images/find_a_pet/cat2.jpg",
            description: "Playful and energetic."
        }
    ];

    function displayCats(cats) {
        $('#catList').empty();
        cats.forEach(cat => {
            $('#catList').append(`
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
                        <div class="card-body">
                            <h5 class="card-title">${cat.name}</h5>
                            <p class="card-text">${cat.description}</p>
                            <button class="btn btn-outline-warning more-info" data-id="${cat.id}" data-toggle="modal" data-target="#catModal">More Info</button>
                        </div>
                    </div>
                </div>
            `);
        });

        // Add event listener for "More Info" buttons
        $('.more-info').on('click', function() {
            const catId = $(this).data('id');
            const cat = cats.find(c => c.id === catId);
            $('#catModalBody').html(`
                <img src="${cat.image}" class="img-fluid mb-3" alt="${cat.name}">
                <h5>Cat Name: ${cat.name}</h5>
                <h5>Age: ${cat.age}</h5>
                <h5>Size: ${cat.size}</h5>
                <p>Details: ${cat.description}</p>
            `);
        });
    }

    // Display all cats initially
    displayCats(cats);
});
