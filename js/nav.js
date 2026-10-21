// Shared navigation behaviour (owner: UI/UX).
// Mark the current page if the markup did not.
(function () {
  if (document.querySelector('.site-header [aria-current]')) return;
  var here = location.pathname.replace(/\/$/, '/index.html');
  document.querySelectorAll('.site-header nav a').forEach(function (a) {
    if (a.pathname === here) a.setAttribute('aria-current', 'page');
  });
})();
