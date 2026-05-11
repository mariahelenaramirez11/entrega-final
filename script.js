let puedeSonar = true;

puerta.addEventListener("mouseenter", () => {
  if (!puedeSonar) return;

  puedeSonar = false;
  sonido.currentTime = 0;
  sonido.play();

  setTimeout(() => {
    puedeSonar = true;
  }, 300);
});