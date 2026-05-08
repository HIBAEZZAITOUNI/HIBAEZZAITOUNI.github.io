$(document).ready(function () {

  // Skills animation
  $(".progress").each(function () {
    let value = $(this).data("value");
    $(this).animate({ width: value + "%" }, 1000);
  });

  //  Contact form validation (UPDATED)
  $("#contactForm").submit(function (e) {

    e.preventDefault();

    
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    //  email pattern validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {

      $("#error")
        .css("color", "red")
        .text("⚠ Please fill all fields!");

    }
    else if (!emailPattern.test(email)) {

      $("#error")
        .css("color", "red")
        .text("⚠ Invalid email format!");

    }
    else {

      $("#error")
        .css("color", "green")
        .text("✅ Message sent successfully!");

      // 🧹 clear form after success
      $("#contactForm")[0].reset();
    }

  });

});