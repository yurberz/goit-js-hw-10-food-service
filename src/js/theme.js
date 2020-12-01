const bodyRef = document.querySelector("body");
const themeSwitchRef = document.querySelector("#theme-switch-toggle");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

//===

const theme = () => {
  if (bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
  } else {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
  }

  if (localStorage.getItem("theme") === Theme.DARK) {
    localStorage.setItem("theme", Theme.LIGHT);
  } else {
    localStorage.setItem("theme", Theme.DARK);
  }
};

themeSwitchRef.addEventListener("change", theme);

//===

const check = () => {
  if (localStorage.getItem("theme") === Theme.DARK) {
    themeSwitchRef.checked = true;
    bodyRef.classList.add(Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
};

check();
