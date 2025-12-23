import { session } from '../Session.js';

// Initialize the profile page with the current user's data
export function initProfile() {
    // Retrieve the logged-in user's information from the session
    const user = session.getCurrentUser();

    // Select UI elements
    const profileName = document.getElementById('username');
    const profileForm = document.getElementById('profileForm');

    // If no user is found, we stop the execution to prevent errors
    if (!user) {
        return;
    }

    // Display the full name in the header/title section if the element exists
    if (profileName) {
        profileName.textContent = `${user.firstName} ${user.lastName}`;
    }

    // Fill the form inputs with the user's data if the form exists
    if (profileForm && user) {
        document.getElementById('lastName').value = user.lastName;
        document.getElementById('firstName').value = user.firstName;
        document.getElementById('mail').value = user.email;

        // Use a placeholder for the password to hide the actual hash for security
        document.getElementById('password').value = "********";
    }
}