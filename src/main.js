import { session } from './user/Session.js';
import { handleSignUp, handleSignIn, handleLogout } from './Auth/Authscript.js';
import { initProfile } from './user/Profile/profile.js';
import { initMovieCards } from './Animations/Ui.js';


// Security check. Check user access permissions as soon as the script loads. This prevents unauthorized users from seeing restricted pages.
session.checkAccess();

// Event Listeners. Attach functions to their respective HTML elements. 
// The '?' (Optional Chaining) ensures no error occurs if the element is not on the current page.
document.getElementById('signUp')?.addEventListener('submit', handleSignUp);
document.getElementById('signIn')?.addEventListener('submit', handleSignIn);
document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);

// Initialization of UI and Data setups functions

// Load user data into the profile page if applicable
initProfile();

// Enable hover effects and trailers for movie cards
initMovieCards();