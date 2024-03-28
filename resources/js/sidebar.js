$(document).ready(function() {
    // Initially hide all submenus
    $('.sidebar-submenu').hide();

    // Show submenu of "Kas Masuk" on the first click
    $('.sidebar-link.dropdown-toggle').one('click', function(e) {
        e.preventDefault();
        $(this).next('.sidebar-submenu').slideDown();
    });

    // Handle subsequent clicks to toggle submenu visibility
    $('.sidebar-link.dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).next('.sidebar-submenu').slideToggle();
    });
});
