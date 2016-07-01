var data = [
  {
    title: 'album 1',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/jump.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/hotballoon.jpeg',
        caption: 'Hot Air Balloon'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/canoe-mountains-lake.jpeg',
        caption: 'Canoe Lake Mountains'
    }]
}, {
    title: 'Earth Rocks',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/desert.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/earth-crust-river.jpeg',
        caption: 'View from Above'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/grandCanyon.jpeg',
        caption: 'Canyon cave'
    }]
}, {
    title: 'Cities',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/NYCdowntown.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/skyscraper.jpeg',
        caption: 'Skyscraper'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City Port'
    }]
}, {
    title: 'Surf\'s Up, Bra!',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/surfer-underwater.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/surfer-big-wave.jpeg',
        caption: 'Gnarley bra'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/jellies.jpeg',
        caption: 'Wicked'
    }]
}, {
    title: 'ETs',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/universe-earth-sky.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/teepee-universe-night-sky.jpeg',
        caption: '....'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/universe-fireworks-sky.jpeg',
        caption: '....'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/nightMountainSky.jpeg',
        caption: '....'
    }]
}, {
    title: 'Cuties',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/pug-blanket.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/golden-puppy.jpeg',
        caption: 'Smile'
    },
    {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/pug-blanket-outside.jpeg',
        caption: 'Brrr..!'
    },
    {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/baby-fawn.jpeg',
        caption: 'Fawn!'
    },
    {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/bear-cubs.jpeg',
        caption: 'BRRrr..cubs!'
    }
  ]
}];

var divParent = $('#photosContainer');
var photoBox = '<div class="photoBox"><p>Title</p><a href="#"><img src="#" /></a></div>';
var $imgButton = $(photoBox);

// data.forEach(function(album) {
//     var $albumBox = $(photoBox);
//     $albumBox.children('a').children('img').attr('src', album.cover);
//       console.log($albumBox.children('a').children('img'));
//     divParent.append($albumBox);
// });


var $imagesPage = data.forEach(function(object, index, arr){
  var $imgBox = $(photoBox);
  $imgBox.children('a').children('img').attr('src', object.imgCollection.src);
  console.dir(object.imgCollection[0].src + ' object.imageCollection[0]');
  divParent.append($imgBox);
});


$imgButton.on('click', function(){
return $imagesPage;
});

// var $imgCollectionSrc =
