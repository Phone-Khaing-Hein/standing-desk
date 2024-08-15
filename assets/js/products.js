let standingDesks = [
    { id: 1, name: "Shaped Standing Desk, 3-Leg", price: 1149, image: "assets/images/standing-desk-1.jpg" },
    { id: 2, name: "Degree Standing Desk", price: 999, image: "assets/images/standing-desk-2.jpg" },
    { id: 3, name: 'Pneumatic Standing Desk', price: 599, image: "assets/images/standing-desk-3.jpg" },
    { id: 4, name: "Height Adjustable Bistro Desk", price: 399, image: "assets/images/standing-desk-4.jpg" },
    { id: 5, name: "Height Adjustable Conference Desk", price: 809, image: "assets/images/standing-desk-5.jpg" },
    { id: 6, name: "Height Adjustable Conference Desk", price: 809, image: "assets/images/standing-desk-6.jpg" },
    { id: 7, name: "Custom Laminate Standing Desk", price: 899, image: "assets/images/standing-desk-7.jpg" },
    { id: 8, name: "Standing Desk, 4-Leg", price: 1209, image: "assets/images/standing-desk-8.jpg" },
    { id: 9, name: "Height Adjustable Conference Desk", price: 2349, image: "assets/images/standing-desk-9.jpg" },
    { id: 10, name: "2-Leg Standing Desk Frame", price: 469, image: "assets/images/standing-desk-10.jpg" },
    { id: 11, name: "Narrative Standing Desk", price: 2999, image: "assets/images/standing-desk-11.jpg" },
    { id: 12, name: "Height Adjustable Craft Desk", price: 1539, image: "assets/images/standing-desk-12.jpg" }
];

let fixedDesks = [
    { id: 1, name: "Seated Height 2-Leg Desk", price: 449, image: "assets/images/fixed-desk-1.jpg" },
    { id: 2, name: "Seated Height O-Leg Desk", price: 399, image: "assets/images/fixed-desk-2.jpg" },
    { id: 3, name: 'Offset Seated Height 4-Leg Desk', price: 409, image: "assets/images/fixed-desk-3.jpg" },
    { id: 4, name: "Offset Standing Height 4-Leg", price: 469, image: "assets/images/fixed-desk-4.jpg" },
    { id: 5, name: "Flip Top Desk", price: 499, image: "assets/images/fixed-desk-5.jpg" },
    { id: 6, name: "Fixed Height Conference Desk", price: 654, image: "assets/images/fixed-desk-6.jpg" },
    { id: 7, name: "Coffee Desk", price: 299, image: "assets/images/fixed-desk-7.jpg" },
    { id: 8, name: "Flip Top Desk", price: 499, image: "assets/images/fixed-desk-8.jpg" },
    { id: 9, name: "Fixed Height Conference Desk", price: 654, image: "assets/images/fixed-desk-9.jpg" },
    { id: 10, name: "Dillo Side Desk", price: 149, image: "assets/images/fixed-desk-10.jpg" },
    { id: 11, name: "Offset Seated Height 4-Leg Desk", price: 409, image: "assets/images/fixed-desk-11.jpg" },
    { id: 12, name: "Coffee Desk", price: 299, image: "assets/images/fixed-desk-12.jpg" }
];

function displayProductCards(data) {
    const container = document.getElementById('productCards');
    container.innerHTML = '';

    data.forEach(desk => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${desk.image}" alt="${desk.name}" />
            <h4>${desk.name}</h4>
            <p>$${desk.price}</p>
            <button class="btn">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

document.getElementById('productSearch').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredDesks = (localStorage.getItem('deskType') == "standing" ? standingDesks : fixedDesks).filter(desk => desk.name.toLowerCase().includes(searchTerm));
    displayProductCards(filteredDesks);
});

displayProductCards(localStorage.getItem('deskType') == "standing" ? standingDesks : fixedDesks);
