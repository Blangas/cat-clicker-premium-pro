const cats = $('.cat');

// Separates cat images in separate div and names them
cats.each(function(i) {
  catNames = ['Littly', 'Bigby'];
  $(this).wrap(`<div class="cat-section"></div>`);
  $(this).before(`<p class="cat-name">${catNames[i]}</p>`)
});


// Click counter event
let clickCount = 0;

cats.click(function clickCounter() {
  clickCount +=1;
  $('.click-count').text(clickCount);
});
