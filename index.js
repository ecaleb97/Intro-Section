const menuMobileIcon = document.querySelector("#icon-menu-mobile");
const closeIcon = document.querySelector("#icon-close-container");
const featuresDropdown = document.querySelector("#features");
const companyDropdown = document.querySelector("#company");

// console.log(document.querySelector(".features-dropdown-mobile").classList.toggle("vertical-menu-mobile-visible"));


function openMenuMobile() {
    document.querySelector(".menu-mobile").classList.add("menu-mobile-visible");
}

function closeMenuMobile() {
    document.querySelector(".menu-mobile").classList.remove("menu-mobile-visible");
}

function showFeaturesDropdown() {
    document.querySelector(".features-dropdown-mobile").classList.toggle("vertical-menu-mobile-visible");

}

function showCompanyDropdown() {
    document.querySelector(".company-dropdown-mobile").classList.toggle("vertical-menu-mobile-visible");
}

menuMobileIcon.addEventListener("click", openMenuMobile);
closeIcon.addEventListener("click", closeMenuMobile);
featuresDropdown.addEventListener("click", showFeaturesDropdown);
companyDropdown.addEventListener("click", showCompanyDropdown);