export function initSound() {
  // Create audio elements
  const bgm = new Audio('/mq-test/assets/bgm.mp3');
  bgm.loop = true;
  bgm.volume = 0.3;

  const clickSound = new Audio('https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3');
  clickSound.volume = 0.5;

  let isSoundOn = false;

  // Add toggle button to DOM
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'soundToggleBtn';
  toggleBtn.className = 'sound-toggle-btn';
  toggleBtn.innerHTML = '🔇';
  toggleBtn.setAttribute('aria-label', '소리 켜기/끄기');
  document.body.appendChild(toggleBtn);

  // Play click sound function (export to global so inline scripts can use it easily)
  window.playClickSound = () => {
    if (isSoundOn) {
      clickSound.currentTime = 0;
      clickSound.play().catch(e => console.warn('Click sound blocked', e));
    }
  };

  // Toggle sound logic
  toggleBtn.addEventListener('click', () => {
    isSoundOn = !isSoundOn;
    if (isSoundOn) {
      toggleBtn.innerHTML = '🔊';
      bgm.play().catch(e => {
        console.warn('BGM play blocked', e);
        isSoundOn = false;
        toggleBtn.innerHTML = '🔇';
      });
    } else {
      toggleBtn.innerHTML = '🔇';
      bgm.pause();
    }
  });
}
