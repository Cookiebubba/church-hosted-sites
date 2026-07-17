(function () {
  var sidebar = document.getElementById('sidebar');
  var scrim = document.getElementById('scrim');
  var menuBtn = document.getElementById('menuBtn');
  var closeBtn = document.getElementById('closeBtn');

  function openMenu() {
    sidebar.classList.add('open');
    scrim.hidden = false;
    requestAnimationFrame(function () { scrim.classList.add('show'); });
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    sidebar.classList.remove('open');
    scrim.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', 'false');
    setTimeout(function () { scrim.hidden = true; }, 300);
  }

  menuBtn.addEventListener('click', function () {
    if (sidebar.classList.contains('open')) { closeMenu(); } else { openMenu(); }
  });
  closeBtn.addEventListener('click', closeMenu);
  scrim.addEventListener('click', closeMenu);

  // Collapse the sidebar after any chapter link is clicked
  sidebar.addEventListener('click', function (e) {
    if (e.target.closest('a')) { closeMenu(); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) { closeMenu(); }
  });
})();
