const themes = [
  {
    background: "#1A1A2E",
    color: "#FFFFFF",
    primaryColor: "#0F3460"
  },
  {
    background: "#461220",
    color: "#FFFFFF",
    primaryColor: "#E94560"
  },
  {
    background: "#192A51",
    color: "#FFFFFF",
    primaryColor: "#967AA1"
  },
  {
    background: "#F7B267",
    color: "#000000",
    primaryColor: "#F4845F"
  },
  {
    background: "#F25F5C",
    color: "#000000",
    primaryColor: "#642B36"
  },
  {
    background: "#231F20",
    color: "#FFF",
    primaryColor: "#BB4430"
  }
];

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--color", theme.color);
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
  const btnContainer = document.querySelector(".theme-btn-container");
  themes.forEach((theme) => {
    const div = document.createElement("div");
    div.className = "theme-btn";
    div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
    btnContainer.appendChild(div);
    div.addEventListener("click", () => setTheme(theme));
  });
};

displayThemeButtons();
// ... JavaScript code ka shuruati hissa
if (username === 'student' && password === 'pass123') {
    // Agar success hai toh yeh block run hona chahiye
    messageElement.textContent = 'Login Successful!';
    messageElement.style.color = 'green';
    
    // REDIRECTION LINE: Yeh line file ko kholegi
    window.location.href = 'student_dashboard.html'; 
    
    // Note: Maine yahan se 'setTimeout' hata diya hai.
    // Agar aapka dashboard file 'student_dashboard.html' nahi hai, 
    // toh is naam ko theek karein (jaise: 'student-dashboard.html').

} else {
    // ... agar fail hua toh yeh block chalta hai
    messageElement.textContent = 'Invalid username or password.';
    messageElement.style.color = 'red';
}
window.location.href = 'student-dashboard.html';
// ... JavaScript code ka aakhri hissa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Menu ko dikhane ya chhupane ke liye 'active' class toggle karein
            navMenu.classList.toggle('active');
            
            // Icon badalne ke liye (Bars to Cross)
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
});