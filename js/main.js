let clickCount = 0;
const cats = $('.cat');

cats.click(function clickCounter() {
  clickCount +=1;
  $('.click-count').text(clickCount);
});

catNames = ['Littly', 'Bigby'];

cats.each(function(i) {
  $(this).wrap(function() {
    return `<label>${catNames[i]}</label>`;
  });
});
