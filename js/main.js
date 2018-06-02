class cat {
  constructor(catName, img, clickCount){
    this.catName = catName;
    this.img = img;
    this.clickCount = clickCount;
  }
}



//*** OLD CODE ***//
// const cats = $('.cat');
//
// // Separates cat imgs in separate div and names them
// cats.each(function(i) {
//   catNames = ['Littly', 'Bigby'];
//   $(this).wrap(`<div class="cat-section"></div>`);
//   $(this).before(`<p class="cat-name">${catNames[i]}</p>`)
// });
//
//
// // Click counter event
// let clickCount = 0;
//
// cats.click(function clickCounter() {
//   clickCount +=1;
//   $('.click-count').text(clickCount);
// });
