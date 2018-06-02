class cat {
  constructor(catName, altText, img){
    this.catName = catName;
    this.altText = altText;
    this.img = img;
    this.clickCount = 0;
  }
}

const cat1 = new cat('Littly', 'Little white kitten with interested expresion', 'img/kitty-cat-kitten-pet-45201.jpeg');
const cat2 = new cat('Bigby', 'Grown-up cat with bored expresion', 'img/animal-sitting-animals-inside.jpg');
const cat3 = new cat('Mrs Grey', 'Grey cat standing on two legs', 'img/Grey Kitten On Floor.jpeg');
const cat4 = new cat('Snowzy', 'Sadly exited cat', 'img/pexels-photo-156934.jpeg');
const cat5 = new cat('Scare-cat', 'Scared cat face', 'img/pexels-photo-399647.jpeg');
const cats = [cat1, cat2, cat3, cat4, cat5];

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
