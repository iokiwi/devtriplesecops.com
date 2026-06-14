const el = document.getElementById('countdown');
const duration = 3000;
let start = null;

function tick(timestamp) {
  if (!start) start = timestamp;
  const remaining = Math.max(0, duration - (timestamp - start));

  el.textContent = (remaining / 1000).toFixed(2);

  if (remaining <= 0) {
    window.location.href = 'https://simonmerrick.com';
    return;
  }

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
