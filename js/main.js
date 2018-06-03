class cat {
  constructor(id, catName, altText, img){
    this.id = id;
    this.catName = catName;
    this.altText = altText;
    this.img = img;
    this.clickCount = 0;
  }
}


$(function() {
  const model = {
    cats: [
      new cat(0, 'Littly', 'Little white kitten with interested expresion', 'img/kitty-cat-kitten-pet-45201.jpeg'),
      new cat(1, 'Bigby', 'Grown-up cat with bored expresion', 'img/animal-sitting-animals-inside.jpg'),
      new cat(2, 'Mrs Grey', 'Grey cat standing on two legs', 'img/Grey Kitten On Floor.jpeg'),
      new cat(3, 'Snowzy', 'Sadly exited cat', 'img/pexels-photo-156934.jpeg'),
      new cat(4, 'Scare-cat', 'Scared cat face', 'img/pexels-photo-399647.jpeg')
    ],
    activeCat: {}
  };

  const octopus = {
    init: function() {
      view.initList(model.cats);
    },
    catEvents: function() {
      // Cat list events
      $('.cat-list').on('click', 'a', function() {
        const kitten = model.cats[$(this).data('id')];
        view.loadCat(kitten);
        model.activeCat = kitten;
      });
      model.activeCat = model.cats[0];
      view.loadCat(model.activeCat);
      // admin buttons events
      $('#admin').on('click', function(evn) {
        evn.preventDefault();
        view.showAdmin(model.activeCat);
      });
      $('#cancel').on('click', function(evn) {
        evn.preventDefault();
        view.showAdmin();
      });
      $('#submit').on('click', function(evn) {
        evn.preventDefault();
        model.activeCat.catName = $('#cat-name').val();
        model.activeCat.img = $('#cat-url').val();
        model.activeCat.clickCount = parseInt($('#cat-clicks').val());
        view.loadCat(model.activeCat);
        view.changeLink(model.activeCat);
        $('.modal').toggleClass('hidden');
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
      for (let cat of cats) {
        $('.cat-list').append(`<li><a href="#" data-id="${cat.id}">${cat.catName}</a></li>`);
      }
      octopus.catEvents();
    },
    loadCat: function(cat, link) {
      const container = $('.cat-container');

      container.html('');

      container.append(function() {
        const disCounter = `<p class="click-count">${cat.clickCount}</p>`;
        const disName = `<p class="cat-name">${cat.catName}</p>`;
        const disImg = `<img src="${cat.img}" alt="${cat.altText}">`
        return `${disCounter}, ${disName}, ${disImg}`;
      });

      octopus.catClick(cat);
    },
    changeLink: function(cat) {
      const link = $(`a[data-id=${cat.id}]`);
      link.html(cat.catName);
    },
    showAdmin: function(cat) {
      $('.modal').toggleClass('hidden');
      $('#cat-name').val(cat.catName);
      $('#cat-url').val(cat.img);
      $('#cat-clicks').val(cat.clickCount);
    }
  };

  octopus.init();
});
