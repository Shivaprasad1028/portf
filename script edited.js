document.getElementById("menu").addEventListener('click', opensidebar)
document.getElementById("close").addEventListener('click', closesidebar)
document.querySelector(".backdrop").addEventListener('click', closesidebar)

function opensidebar() {
    document.body.classList.add("open");
}
function closesidebar() {
    document.body.classList.remove("open");
}