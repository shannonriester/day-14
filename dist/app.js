var divParent = $('#photosContainer');
var photoBox = '<div class="photoBox"><p>Title</p><a href="#"><img src="#" /></a></div>';

var navParent = $('#navParent');
var sideNav = '<ul><li><a href="#">AlbumMenuTitle</a></li></ul>';


data.forEach(function(album) {


    var $albumBox = $(photoBox);
    $albumBox.children('a').children('img').attr('src', album.cover);
    $albumBox.children('a').attr('href', album.aHREF);
    $albumBox.children('p').text(album.title);
    divParent.append($albumBox);
});

window.addEventListener('hashchange', function() {
    // if (divParent.hasClass(''))
    // renderHome(renderHomeData);
    var dataToRender = location.hash.slice(1);
    renderAlbum(dataToRender);
});



function renderAlbum(albumObj) {
  divParent.children().remove();

  var selectedObj = data[albumObj].imgCollection;
  selectedObj.forEach(function(imageObj) {
      var $imgBox = $(photoBox);
      $imgBox.children('a').children('img').attr('src', imageObj.src);
      $imgBox.children('a').attr('href', imageObj.aHREF);
      $imgBox.children('p').text(imageObj.caption);
      divParent.append($imgBox);
  });

  data.forEach(function(albumObj){
      var $sideNav = $(sideNav);
      // $sideNav.children('li').text(albumObj.title);
      $sideNav.children('li').children('a').text(albumObj.title).attr('href', albumObj.aHREF);
      navParent.append($sideNav);
  });

}


//
// function renderImage(imageIndex) {
//
// }





//to do...
//insert album nav elements

//make titles links to do the same thing as the divs...

//once img is clicked on, load only that img
