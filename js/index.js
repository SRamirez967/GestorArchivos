// Element selection
const form_add_resource = document.getElementById("form_add_resource");
const add_resource_btn = document.getElementById("add_resource_btn");
const close_form_btn = document.getElementById("close_form");


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

// Adding resources logic
const resources = [];

// Event listener for Add button
const save_btn = document.getElementById("save_btn");

save_btn.addEventListener("click", create_resource);

// Parameter access means link/file
function create_resource() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("desc").value;
    const access = document.getElementById("link").value;

    const resource = {
        name: name,
        description: description,
        access: access
    }

    resources.unshift(resource);

    close_add_resource_form()

    display_reosurce()
}

// Adding it to the DOM
function display_reosurce() {
    const container = document.getElementById("add_resource_btn");

    const new_resource = resources[0]

    const HTML_resource = `
        <div id="fileTemplate" class="size-70 rounded-lg shadow-xl">
            <div id="image" class="h-45 bg-[url(/imgs/placeholderimg.jpg)] bg-no-repeat bg-cover relative">
                <button class="text-red-700 absolute top-2 right-2 bg-amber-300">3 dots</button>
            </div>
            <div id="description" class="px-3 py-2">
                <div class="flex justify-between">
                    <h1>${new_resource.name}</h1>
                    <button class="bg-amber-300">Open</button>
                </div>
                <p class="text-gray-400">${new_resource.description}</p>
            </div>
        </div>`
        
    container.insertAdjacentHTML('afterend', HTML_resource);
}
