const dropdownButton = document.getElementById("feature-btn");
const dropdownContent = document.getElementById("dropdown-content");

const companyDropdownBtn = document.getElementById("company-feature-btn");

dropdownButton.onclick = function showDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

companyDropdownBtn.onclick = () => {
    document.getElementById("company-dropdown-content").classList.toggle("show");
}

// window.onclick = function (event) {
//     if (!event.target.matches('.feature-btn')) {
//         document.getElementById('dropdown-content').classList.remove("show");
//     }
// }


