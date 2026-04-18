// CLOCK FUNCTION
function updateClocks(){

  // LOCAL TIME
  const local = new Date();
  document.getElementById("localClock").innerText =
    local.toLocaleTimeString();

  // NEPAL TIME (Asia/Kathmandu)
  const nepal = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kathmandu"
  });

  document.getElementById("nepalClock").innerText = nepal;
}

setInterval(updateClocks, 1000);
updateClocks();


// AUTO DARK / LIGHT MODE
function autoTheme(){

  const hour = new Date().getHours();
  const body = document.body;

  if(hour >= 6 && hour < 18){
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
  }
}

autoTheme();
setInterval(autoTheme, 60000);