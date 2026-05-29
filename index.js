let scores = { home: 0, guest: 0 };

function addScore(team, points) {
  scores[team] += points;

  const el = document.getElementById(team + '-score');
  el.textContent = scores[team];

  // Trigger pop animation
  el.classList.remove('pop');
  void el.offsetWidth; // force reflow to restart animation
  el.classList.add('pop');

  updateLeadIndicators();
  flashBoard(team);
}

function updateLeadIndicators() {
  const homeLead  = document.getElementById('home-lead');
  const guestLead = document.getElementById('guest-lead');
  homeLead.classList.toggle('visible',  scores.home  > scores.guest);
  guestLead.classList.toggle('visible', scores.guest > scores.home);
}

function flashBoard(team) {
  const board = document.getElementById('board');
  board.classList.remove('flash-home', 'flash-guest');
  void board.offsetWidth; // force reflow
  board.classList.add('flash-' + team);
  setTimeout(() => board.classList.remove('flash-home', 'flash-guest'), 500);
}

function resetScores() {
  scores = { home: 0, guest: 0 };
  document.getElementById('home-score').textContent  = '0';
  document.getElementById('guest-score').textContent = '0';
  document.getElementById('home-lead').classList.remove('visible');
  document.getElementById('guest-lead').classList.remove('visible');
}