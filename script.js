document.addEventListener('DOMContentLoaded', async() => {
    await fetchUsers();
});

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayUsers(users) {
    const container = document.getElementById('user-container');
    users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="section">
                <i class="fas fa-user"></i>
                <strong>${user.name} (${user.username})</strong>
            </div>

            <div class="section">
                <i class="fas fa-location-dot"></i>
                <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            </div>

            <div class="section">
                <i class="fas fa-building"></i>
                <p>${user.company.name}</p>
            </div>

            <div class="section">
                <i class="fas fa-envelope"></i>
                <p>${user.email}</p>
            </div>

           <div class="section">
                <i class="fas fa-phone"></i>
                <p>${user.phone}</p>  
            </div>

            <div class="section">
                <i class="fas fa-globe"></i>
                <p>${user.website}</p>
            </div>
        `;

        container.appendChild(card);
    });
}
