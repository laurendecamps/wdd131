document.addEventListener('DOMContentLoaded', function() {
  const themeSelector = document.getElementById('themeSelector');
  const logo = document.querySelector('.logo');

  function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
      document.body.classList.add('dark');
      logo.src = 'byui-logo_white.webp'; // Assuming the new logo image name is 'byui-logo_white.webp'
    } else {
      document.body.classList.remove('dark');
      logo.src = 'byui-logo_blue.webp'; // Original logo image name
    }
  }

  themeSelector.addEventListener('change', changeTheme);
});
