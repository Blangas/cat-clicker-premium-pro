let clickCount = 0;

$('.cat').click(function clickCounter() {
  clickCount +=1;
  $('.click-count').text(clickCount);
});
