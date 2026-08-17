// Element selection
form_add_resource = document.getElementById("form_add_resource");
add_resource_btn = document.getElementById("add_resource_btn");
close_form_btn = document.getElementById("close_form");


// Event listeners
add_resource_btn.addEventListener("click", display_add_resource_form);
close_form_btn.addEventListener("click", close_add_resource_form)


// Functions
function display_add_resource_form() {
    form_add_resource.classList.remove("hidden");
}

function close_add_resource_form() {
    form_add_resource.classList.add("hidden");
}