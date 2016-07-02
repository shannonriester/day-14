var divParent = $('#photosContainer');
var photoBox = '<div class="photoBox"><p>Title</p><a href="#index"><img src="#" /></a></div>';
var $albumBox;
var $imgBox;
var navAlbums = '<ul><li>Outdoors</li><li>Earth Rocks</li><li>Cities</li><li>Surf n Turf</li><li>ETs</li><li>Cuties</li>';



data.forEach(function(album) {
    var $albumBox = $(photoBox);
    $albumBox.children('a').children('img').attr('src', album.cover);
    $albumBox.children('a').attr('href', album.aHREF);
    $albumBox.children('p').text(album.title);
    divParent.append($albumBox);
});

window.addEventListener('hashchange', function() {
    // var renderHomeData = location.hash.slice(2);
    // renderHome(renderHomeData);

    var dataToRender = location.hash.slice(1);
    renderAlbum(dataToRender);
});

// function renderHome(){
//   divParent.children().remove();
//
// data.forEach(function(album) {
//
//   var $albumBox = $(photoBox);
//   $albumBox.children('a').children('img').attr('src', album.cover);
//   $albumBox.children('a').attr('href', album.aHREF);
//   $albumBox.children('p').text(album.title);
//   divParent.append($albumBox);
//   });
// }

function renderAlbum(albumIndex) {
  divParent.children().remove();

  selectedObj = data[albumIndex].imgCollection;

  selectedObj.forEach(function(image) {
      var $imgBox = $(photoBox);
      $imgBox.children('a').children('img').attr('src', image.src);
      $imgBox.children('a').attr('href', image.aHREF);
      $imgBox.children('p').text(image.caption);
      divParent.append($imgBox);
  });
}

//to do...
//insert album nav elements

//make titles links to do the same thing as the divs...

//once img is clicked on, load only that img
