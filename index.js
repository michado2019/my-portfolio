




const menu = document.getElementById("menu--icon")
const cancel = document.getElementById("cancel")

menu.addEventListener("click", displayMenu)
cancel.addEventListener("click", clearMenu)

function displayMenu(){
    document.getElementById("nav--links").style.display = "block"
}

function clearMenu(){
    document.getElementById("nav--links").style.display = "none"
}