const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.getElementById("toggleBtn");



/* SIDEBAR */
toggleBtn.onclick = () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
};
overlay.onclick = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
};

/* THEME */
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.checked = true;
}

themeToggle.onchange = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
};

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

/* SLIDER */
let slides = document.querySelectorAll(".slide");
let index = 0;
setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3500);

// GALERI MODAL
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
