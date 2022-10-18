const featureBtn = document.getElementById("feature-btn");
const dropdown = document.querySelector(".dropdown-content");

featureBtn.onclick = dropdownToggle();

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownToggle() {
    dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('featureBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}