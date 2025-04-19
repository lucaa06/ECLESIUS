// Rileva se è un dispositivo mobile
if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    document.getElementById('mobile-warning').classList.remove('d-none');
  } else {
    // Neon glow effect a catena per i banner-box
    const banners = document.querySelectorAll('.banner-box');
    banners.forEach((box, i) => {
      setTimeout(() => {
        box.classList.add('neon-glow');
      }, 1000 + i * 500);
    });
  }
  
  // Bottone animato con effetto onda e suono
  document.getElementById('startBtn').addEventListener('click', () => {
    // Effetto onda (ripple)
    const button = document.getElementById('startBtn');
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    button.appendChild(ripple);
  
    setTimeout(() => {
      ripple.remove();
    }, 600);
  
    // Messaggio da scrivere inizialmente
    const msg = "ah...hai cliccato seriamente? a ok vabbè ";
    let i = 0;
  
    const terminalBox = document.createElement('div');
    terminalBox.className = 'terminal-box';
    document.body.appendChild(terminalBox);
  
    // Effetto scrittura
    const typeEffect = setInterval(() => {
      terminalBox.textContent += msg[i];
      i++;
      if (i >= msg.length) {
        clearInterval(typeEffect);
  
        // Bottone finto
        const fakeBtn = document.createElement('button');
        fakeBtn.textContent = "scrivimi qui...";
        fakeBtn.className = 'link-button';
  
        fakeBtn.onclick = () => {
          // Rimuovi bottone finto
          fakeBtn.remove();
  
          // Effetto cancellazione testo
          let j = msg.length - 1;
          const deleteEffect = setInterval(() => {
            terminalBox.textContent = terminalBox.textContent.slice(0, j);
            j--;
            if (j < 0) {
              clearInterval(deleteEffect);
  
              // Nuovo messaggio da scrivere
              const newMsg = "Scherzo... :)                              il bottone è questo:";
              let k = 0;
  
              const writeNew = setInterval(() => {
                terminalBox.textContent += newMsg[k];
                k++;
                if (k >= newMsg.length) {
                  clearInterval(writeNew);
  
                  // Bottone vero
                  const realBtn = document.createElement('button');
                  realBtn.textContent = "inviami una mail";
                  realBtn.className = 'link-button';
                  realBtn.onclick = () => {
                    window.location.href = "mailto:lucacutrono06@gmail.com?subject=mi%20serve%20un%20sito%20web&body=ciao%20NEXORA,%0Ami%20serve%20che%20mi%20crei%20un%20sito%20web!";
                  };
  
                  terminalBox.appendChild(document.createElement('br'));
                  terminalBox.appendChild(realBtn);
                }
              }, 50);
            }
          }, 30);
        };
  
        terminalBox.appendChild(document.createElement('br'));
        terminalBox.appendChild(fakeBtn);
      }
    }, 50);
  });
  
  
  if (!/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    // Neon effect già presente...
    const banners = document.querySelectorAll('.banner-box');
    banners.forEach((box, i) => {
      setTimeout(() => {
        box.classList.add('neon-glow');
      }, 1000 + i * 500);
    });
  
    // Easter Egg 1: rotating logo
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('mouseenter', () => logo.classList.add('rotate-logo'));
      logo.addEventListener('mouseleave', () => logo.classList.remove('rotate-logo'));
    }
  
    // Easter Egg 2: emoji rain
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'e') createEmojiRain();
    });
  
    function createEmojiRain() {
      for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji-rain';
        emoji.textContent = ['✨', '🚀', '🔥', '😎', '💡','❤️','🌈','💸','👌','🤣','😭','😂','💕'][Math.floor(Math.random() * 10)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = 2 + Math.random() * 8 + 's';
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 7000);
      }
    }
  
    // Easter Egg 3: rainbow title
    const title = document.querySelector('h1');
    if (title) {
      title.addEventListener('mouseenter', () => title.classList.add('rainbow-text'));
      title.addEventListener('mouseleave', () => title.classList.remove('rainbow-text'));
    }
  }
  // Mostra popup easter egg al click (solo desktop)
if (!/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    const btn = document.getElementById('easterEggBtn');
    const popup = document.getElementById('easterEggPopup');
    
    btn.classList.remove('d-none'); // Mostra il bottone
  
    btn.addEventListener('click', () => {
      popup.classList.toggle('d-none');
    });
  
    // Chiudi il popup se clicchi fuori
    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !popup.contains(e.target)) {
        popup.classList.add('d-none');
      }
    });
  }
  // JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const easterEggBtn = document.getElementById("easterEggBtn");
    
    function isDesktop() {
      return window.matchMedia("(min-width: 992px) and (hover: hover) and (pointer: fine)").matches;
    }
  
    function toggleEgg() {
      easterEggBtn.style.display = isDesktop() ? "block" : "none";
    }
  
    toggleEgg();
    window.addEventListener("resize", toggleEgg);
  });