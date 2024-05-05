document.addEventListener('DOMContentLoaded', function() {
  const themeSelector = document.getElementById('themeSelector');
  const logo = document.getElementById('logo');

  function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
      document.body.classList.add('dark');
      logo.src = 'white-logo.png';
    } else {
      document.body.classList.remove('dark');
      logo.src = 'dark-logo.png';
    }
  }

  themeSelector.addEventListener('change', changeTheme);
});
