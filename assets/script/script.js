let elements = document.querySelectorAll(".draggableItem");
let areas = document.querySelectorAll(".area");

let startInnerX;
let startInnerY;

elements.forEach((n) => {
    n.addEventListener("dragstart", (ev) => {
        ev.dataTransfer.setData("elementId", ev.target.id);

        startInnerX = ev.offsetX;
        startInnerY = ev.offsetY;
    });
})

areas.forEach((n) => {
    n.addEventListener("dragover", (ev) => {
        ev.preventDefault();
    });
})

areas.forEach((n) => {
    n.addEventListener("drop", (ev) => {
        let itemId = ev.dataTransfer.getData("elementId");
        let item = document.getElementById(itemId);

        ev.target.appendChild(item);

        let offsetX = `${ev.offsetX - startInnerX}px`;
        let offsetY = `${ev.offsetY - startInnerY}px`;

        item.style.left = offsetX;
        item.style.top = offsetY;
    });
});

elements.forEach((n) => {
    n.addEventListener("dblclick", (ev) => {
        ev.target.classList.toggle("radius");
    });
});