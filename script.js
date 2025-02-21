$(document).ready(function() {
    let count = 0;
    const interval = setInterval(function() {
        count++;
        $('#count').text(count);
        if (count >= 500) {
            clearInterval(interval);
        }
    }, 5); // Adjust the interval time as needed
});
$(document).ready(function() {
    console.log("jQuery is working!");
    // Your countdown code here
});
