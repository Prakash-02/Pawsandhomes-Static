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

  var orders = [
    { id: 1, name: 'Buddy', date: 'January 1, 2024' },
    { id: 2, name: 'Whiskers', date: 'February 14, 2024' },
    { id: 3, name: 'Shadow', date: 'March 3, 2024' },
    { id: 4, name: 'Luna', date: 'April 25, 2024' },
    { id: 5, name: 'Max', date: 'May 12, 2024' },
    { id: 6, name: 'Daisy', date: 'June 20, 2024' }
  ];
  // navbar
  
  orders.forEach(function(order) {
    var cardHtml = `
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">${order.name}</h5>
            <p class="card-text">Adopted on: ${order.date}</p>
            <button class="btn btn-outline-warning details-btn" data-toggle="modal" data-target="#detailsModal" data-id="${order.id}">View Details</button>
          </div>
        </div>
      </div>
    `;
    $('#ordersContainer').append(cardHtml);
  });

  $('.details-btn').click(function() {
    var orderId = $(this).data('id');
    
    // Simulating an AJAX request to fetch order details based on orderId
    var orderDetails = getOrderDetails(orderId);
    
    // Load the details into the modal
    $('#detailsModal .modal-body').html(orderDetails);
  });

  function getOrderDetails(orderId) {
    var orderData = {
      1: '<h6>Order: Buddy</h6><p>Date Adopted: January 1, 2024</p><p>Details: [Additional details about Buddy]</p>',
      2: '<h6>Order: Whiskers</h6><p>Date Adopted: February 14, 2024</p><p>Details: [Additional details about Whiskers]</p>',
      3: '<h6>Order: Shadow</h6><p>Date Adopted: March 3, 2024</p><p>Details: [Additional details about Shadow]</p>',
      4: '<h6>Order: Luna</h6><p>Date Adopted: April 25, 2024</p><p>Details: [Additional details about Luna]</p>',
      5: '<h6>Order: Max</h6><p>Date Adopted: May 12, 2024</p><p>Details: [Additional details about Max]</p>',
      6: '<h6>Order: Daisy</h6><p>Date Adopted: June 20, 2024</p><p>Details: [Additional details about Daisy]</p>'
    };
    
    return orderData[orderId] || '<p>No details found for this order.</p>';
  }
});