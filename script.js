// ================= CLOCK FUNCTIONALITY =================
function updateClocks() {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  // LOCAL TIME
  const local = new Date();
  document.getElementById("localClock").innerText = local.toLocaleTimeString([], options);

  // NEPAL TIME (Asia/Kathmandu)
  const nepal = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kathmandu",
    ...options
  });

  document.getElementById("nepalClock").innerText = nepal;
}

// Initial call and interval setup
updateClocks();
setInterval(updateClocks, 1000);


// ================= THEME TOGGLE FUNCTIONALITY =================
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.remove('light');
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
  }
}

function initTheme() {
  // Check user preference in localStorage first
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Automate based on the time of day if no preference is saved
    const hour = new Date().getHours();
    // Light mode from 6 AM (6) to 6 PM (18)
    const isDayTime = hour >= 6 && hour < 18;
    applyTheme(isDayTime ? 'light' : 'dark');
  }
}

// Handle toggle click
themeToggleBtn.addEventListener('click', () => {
  const isCurrentlyDark = body.classList.contains('dark');
  const newTheme = isCurrentlyDark ? 'light' : 'dark';
  
  applyTheme(newTheme);
  
  // Save user's explicit preference
  localStorage.setItem('theme', newTheme);
});

// Run theme initialization
initTheme();

// Optional: check time periodically to update theme if user hasn't set a manual preference
setInterval(() => {
  if (!localStorage.getItem('theme')) {
    initTheme();
  }
}, 60000); // Check every minute