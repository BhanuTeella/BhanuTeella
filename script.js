function toggleTheme() {
  var element = document.documentElement;
  var currentTheme = element.dataset.bsTheme == 'dark' ? 'light' : 'dark';
  element.dataset.bsTheme = currentTheme;
  localStorage.setItem('theme', currentTheme);
}

// Apply the theme at the start
document.addEventListener('DOMContentLoaded', (event) => {
  var storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    document.documentElement.dataset.bsTheme = storedTheme;
  }
});

$(document).ready(function() {
  var allCards = $('.card').detach(); // detach and store all cards
  var allCols = $('.col').detach(); // detach and store all columns
  $('.row').append(allCols); // append all columns
  allCols.each(function(i, col) {
    $(col).append(allCards[i]); // append each card to its original column
  });

  $('.badge').click(function() {
    var filter = $(this).data('filter');
    $('.card').detach(); // detach all cards
    if (filter === 'all') {
      allCols.each(function(i, col) {
        $(col).append(allCards[i]); // append each card to its original column
      });
    } else {
      var filteredCards = allCards.filter('[data-badge="' + filter + '"]');
      allCols.each(function(i, col) {
        if (filteredCards[i]) {
          $(col).append(filteredCards[i]); // append each filtered card to a column
        }
      });
    }
  });
});