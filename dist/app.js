var divParent = $('#photosContainer');
var photoBox = '<div class="photoBox"><p><a href="#"></p></a><a href="#"><img src="#" /></a></div>';
var navParent = $('#navParent');
var sideNav = '<li><a href="#">AlbumMenuTitle</a></li>';


data.forEach(function(album, i) {
    var $albumBox = $(photoBox);
    $albumBox.children('p').children('a').attr('href', '#' + i).text(album.title);
    $albumBox.children('a').children('img').attr('src', album.cover);
    $albumBox.children('a').attr('href', album.aHREF);
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
      $sideNav.children('a').text(albumObj.title).attr('href', albumObj.aHREF);
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
