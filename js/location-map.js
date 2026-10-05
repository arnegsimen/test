document.querySelectorAll(".location-map").forEach(function (container) {
    if (typeof L === "undefined") {
        return;
    }

    var latitude = Number(container.dataset.lat);
    var longitude = Number(container.dataset.lon);
    container.replaceChildren();

    var map = L.map(container, {
        scrollWheelZoom: false
    }).setView([latitude, longitude], 16);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup("Mulighetsrommet Muskler og Ledd");
});
