function toggleContact() {
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo.classList.contains('hidden')) {
        contactInfo.classList.remove('hidden');
        contactInfo.classList.add('visible');
    } else {
        contactInfo.classList.remove('visible');
        contactInfo.classList.add('hidden');
    }
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
}

function handleTileClick(id) {
    const tile = document.querySelector(`.tile:nth-child(${id})`);
    tile.style.backgroundColor = "#ff5722";
    tile.style.color = "white";
    tile.style.transition = "background-color 0.3s, transform 0.3s";
    tile.style.transform = "scale(1.1)";
    setTimeout(() => {
        location.href = `/details/${id}`;
    }, 500);
}
