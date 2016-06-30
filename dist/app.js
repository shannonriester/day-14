var data = [
  {
    title: 'album 1',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/jump.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City Port'
    }]
}, {
    title: 'album 2',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/paper.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City Port'
    }]
}, {
    title: 'album 3',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/candy.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City Port'
    }]
}, {
    title: 'album 4',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/hello.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City Port'
    }]
}, {
    title: 'album 5',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/bye.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City Port'
    }]
}, {
    title: 'album 6',
    cover: 'https://dl.dropboxusercontent.com/u/19411356/day14/hi.jpeg',
    imgCollection: [{
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City'
    }, {
        src: 'https://dl.dropboxusercontent.com/u/19411356/day14/cityPort.jpeg',
        caption: 'City Port'
    }]
}];

var divParent = $('#photosContainer');
var photoBox = '<div><p>Title1</p><a href="#"><img src="#" /></a></div>';

data.forEach(function(object, index) {
    var $albumBox = $(photoBox);
    console.log($albumBox);
    $albumBox.children('img').attr('src', object.cover);
    divParent.prepend($albumBox);
});
