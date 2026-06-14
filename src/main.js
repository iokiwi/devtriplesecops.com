const el = document.getElementById('countdown');
let remaining = 3000;

function tick() {
  remaining -= 135;

  if (remaining <= 0) {
    window.location.href = 'https://simonmerrick.com';
    return;
  }

  el.textContent = (remaining / 1000).toFixed(2);
  setTimeout(tick, 135);
}

setTimeout(tick, 135);
