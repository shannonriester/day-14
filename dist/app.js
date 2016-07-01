var data = [{
    title: 'Outdoors',
    aHREF: '#0',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/jump.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/hotballoon.jpeg',
        caption: 'Hot Air Balloon',
        aHREF: '#HotAirBalloon'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/canoe-mountains-lake.jpeg',
        caption: 'Canoe Lake Mountains',
        aHREF: '#Canoe_Lake_Mountains'
    }]
}, {
    title: 'Earth Rocks',
    aHREF: '#1',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/desert.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/earth-crust-river.jpeg',
        caption: 'View from Above',
        aHREF: '#View_from_Above'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/grandCanyon.jpeg',
        caption: 'Canyon Cave',
        aHREF: '#Canyon_Cave'
    }]
}, {
    title: 'Cities',
    aHREF: '#2',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/NYCdowntown.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/skyscraper.jpeg',
        caption: 'Skyscraper',
        aHREF: '#Skyscraper'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City Port',
        aHREF: '#City_Port'
    }]
}, {
    title: 'Surf\'s Up, Bra!',
    aHREF: '#3',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/surfer-big-wave.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/surfer-underwater.jpeg',
        caption: 'Gnarley, Bra!',
        aHREF: '#Gnarley_Bra'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/jellies.jpeg',
        caption: 'Wicked'
    }]
}, {
    title: 'ETs',
    aHREF: '#4',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/universe-earth-sky.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/teepee-universe-night-sky.jpeg',
        caption: '....',
        aHREF: '#Tee-Pee_Universe_Night_Sky'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/universe-fireworks-sky.jpeg',
        caption: '....',
        aHREF: '#Universe_Fireworks_Sky'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/nightMountainSky.jpeg',
        caption: '....',
        aHREF: '#Night_Mountain_Sky'
    }]
}, {
    title: 'Cuties',
    aHREF: '#5',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/pug-blanket.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/golden-puppy.jpeg',
        caption: 'Smile',
        aHREF: '#Smile'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/pug-blanket-outside.jpeg',
        caption: 'Brrr..!',
        aHREF: '#Brrr..'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/baby-fawn.jpeg',
        caption: 'Fawn!',
        aHREF: '#Fawn'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/bear-cubs.jpeg',
        caption: 'BRRrr..cubs!',
        aHREF: '#BRRrr_cubs'
    }]
}];

var divParent = $('#photosContainer');
var photoBox = '<div class="photoBox"><p>Title</p><a href="#"><img src="#" /></a></div>';
var navAlbums = '<ul><li>Outdoors</li><li>Earth Rocks</li><li>Cities</li><li>Surf n Turf</li><li>ETs</li><li>Cuties</li>';

data.forEach(function(album) {
    var $albumBox = $(photoBox);
    $albumBox.children('a').children('img').attr('src', album.cover);
    $albumBox.children('a').attr('href', album.aHREF);
    $albumBox.children('p').text(album.title);
    divParent.append($albumBox);
});

window.addEventListener('hashchange', function() {
    var dataToRender = location.hash.slice(1);
    console.log(dataToRender);
    // var dataToRemove =
    // removeContent();

    renderContent(dataToRender);

});

function renderContent(albumIndex) {
  selectedObj = data[albumIndex].imgCollection;

  selectedObj.forEach(function(image) {
      var $imgBox = $(photoBox);
      $imgBox.children('a').children('img').attr('src', image.src);
      $imgBox.children('a').attr('href', image.aHREF);
      $imgBox.children('p').text(image.caption);
      divParent.append($imgBox);
  });
}


function removeContent(object){
  var currentObject = data[object];
  var currentImgObj = data[object].imgCollection;

  if (currentObject.location.hash !== location.hash || currentImgObj.location.hash !== location.hash)
  {
    $albumBox.addClass('.hidden');

  }
}

//to do...
//insert album nav elements

//make titles links to do the same thing as the divs...

//once img is clicked on, load only that img
