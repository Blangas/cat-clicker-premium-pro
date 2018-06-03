class cat {
  constructor(catName, altText, img){
    this.catName = catName;
    this.altText = altText;
    this.img = img;
    this.clickCount = 0;
  }
}


$(function() {
  const model = {
    cats: [
      new cat('Littly', 'Little white kitten with interested expresion', 'img/kitty-cat-kitten-pet-45201.jpeg'),
      new cat('Bigby', 'Grown-up cat with bored expresion', 'img/animal-sitting-animals-inside.jpg'),
      new cat('Mrs Grey', 'Grey cat standing on two legs', 'img/Grey Kitten On Floor.jpeg'),
      new cat('Snowzy', 'Sadly exited cat', 'img/pexels-photo-156934.jpeg'),
      new cat('Scare-cat', 'Scared cat face', 'img/pexels-photo-399647.jpeg')
    ]
  };

  const octopus = {
    init: function() {
      view.initList(model.cats);
    },
    catSelect: function() {
      $('.cat-list').on('click', 'a', function() {
        view.loadCat(model.cats[$(this).data('id')]);
      });
    },
    catClick: function(cat) {
      $('.cat-container').find('img').on('click', function() {
        cat.clickCount +=1;
        $('.click-count').text(cat.clickCount);
      });
    }
  };

  const view = {
    initList: function(cats) {
      let catId = 0;

      for (let cat of cats) {
        $('.cat-list').append(`<li><a href="#" data-id="${catId}">${cat.catName}</a></li>`);
        catId +=1;
      }
      octopus.catSelect();
    },
    loadCat: function(cat) {
      const container = $('.cat-container');

      container.html('');

      container.append(function() {
        const disCounter = `<p class="click-count">${cat.clickCount}</p>`;
        const disName = `<p class="cat-name">${cat.catName}</p>`;
        const disImg = `<img src="${cat.img}" alt="${cat.altText}">`
        return `${disCounter}, ${disName}, ${disImg}`;
      });

      octopus.catClick(cat);
    }
  };

  octopus.init();
});
