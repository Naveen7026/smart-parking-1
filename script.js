const parkingLot = document.getElementById("parking-lot");

// Load saved data
let slots = JSON.parse(localStorage.getItem("slots")) || [];

// Initialize slots
if (slots.length === 0) {
    for (let i = 1; i <= 20; i++) {
        slots.push({ id: i, occupied: false });
    }
}

function saveData() {
    localStorage.setItem("slots", JSON.stringify(slots));
}

function renderSlots() {
    parkingLot.innerHTML = "";

    slots.forEach((slot, index) => {
        let div = document.createElement("div");
        div.classList.add("slot");

        if (slot.occupied) {
            div.classList.add("occupied");
        }

        div.innerText = slot.id;

        div.onclick = () => {
            if (!slot.occupied) {
                slot.occupied = true;
                startTimer(index);
            } else {
                alert("Already booked!");
            }
            saveData();
            renderSlots();
        };

        parkingLot.appendChild(div);
    });
}

function startTimer(index) {
    setTimeout(() => {
        slots[index].occupied = false;
        saveData();
        renderSlots();
        alert("Slot " + slots[index].id + " is now free");
    }, 10000); // 10 sec demo
}

renderSlots();