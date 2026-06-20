const el = document.getElementById('countdown');
const pauseBtn = document.getElementById('pause-btn');
const duration = 10000;
const testMode = window.location.hostname !== 'devtriplesecops.com';
let start = null;
let paused = false;
let elapsed = 0;
let rafId = null;

function tick(timestamp) {
  if (!start) start = timestamp;
  elapsed = Math.min(elapsed + (timestamp - start), duration);
  start = timestamp;

  const remaining = Math.max(0, duration - elapsed);
  el.textContent = (remaining / 1000).toFixed(2);

  if (remaining <= 0) {
    if (!testMode) window.location.href = 'https://simonmerrick.com';
    return;
  }

  rafId = requestAnimationFrame(tick);
}

function togglePause() {
  paused = !paused;
  pauseBtn.textContent = paused ? 'Resume' : 'Pause';
  if (!paused) {
    start = null;
    rafId = requestAnimationFrame(tick);
  } else {
    cancelAnimationFrame(rafId);
  }
}

rafId = requestAnimationFrame(tick);
