
var divParent = $('.photosContainer');
var sectionContainer = $('.sectionContainer');
var photoBox = '<div class="photoBox"><p><a href="#"></p></a><a href="#"><img src="#" /></a></div>';
var navParent = $('#navParent');
var sideNav = '<li><a href="#">AlbumMenuTitle</a></li>';
var headerParent = $('#header');
var $albumH1;
var albumObjects;

data.forEach(function(album, i) {
    headerParent.addClass('mainHeader');
    $('section').removeClass('sectionContainer');
    var $albumBox = $(photoBox);
    $albumBox.children('p').children('a').attr('href', '#' + i).text(album.title);
    $albumBox.children('a').children('img').attr('src', album.cover);
    $albumBox.children('a').attr('href', album.aHREF);
    divParent.append($albumBox);
});

window.addEventListener('hashchange', function(albums, images) {

    var dataToRender = location.hash.slice(1);

    if (dataToRender < data.length){
    renderAlbum(dataToRender);
    console.log(albumObjects);
  }
    else {
    renderImage(dataToRender);
  }
});

function renderAlbum(albumObj) {
  //these reset/add whatever is needed to be styles in the css and not affect the home page
  navParent.children().remove();
  divParent.children().remove();
  sectionContainer.removeClass('mainHeader');
  sectionContainer.addClass('albumHeader');
  divParent.removeClass('homeView');

    //this displays the album name in the heading for the selected album
    headerParent.children('h1').text(data[albumObj].title);


  //this displays the images in the album that was selected
  var selectedObj = data[albumObj].imgCollection;
  selectedObj.forEach(function(imageObj, i) {
    sectionContainer.addClass('sectionContainer');
      var $imgBox = $(photoBox);
      $imgBox.children('a').children('img').attr('src', imageObj.src);
      $imgBox.children('a').attr('href', imageObj.aHREF);
      $imgBox.children('p').children('a').attr('href', imageObj.aHREF).text(imageObj.caption);
      divParent.append($imgBox);
  });

  //this displays the side navigation menu
  data.forEach(function(albumObj, i){
      var $sideNav = $(sideNav);
      $sideNav.children('li').text(albumObj.title);
      $sideNav.children('a').text(albumObj.title).attr('href', albumObj.aHREF);
      navParent.append($sideNav);
  });

}


//why isn't this image rendering function working?!??!?!
function renderImage(imageObj) {

  headerParent.children('h1').text(data[imageObj].caption);
  navParent.children().remove();
  divParent.children().remove();
  divParent.removeClass('homeView');
  sectionContainer.removeClass('albumView');

    var selectedImg = data.imgCollection[imageObj];
    selectedImg.forEach(function(image) {

    var $pictureBox = $(photoBox);
    $imageObj.children('a').children('img').attr('src', image.src);
    $imageObj.children('a').attr('href', image.aHREF);
    $imageObj.children('p').children('a').attr('href', image.aHREF).text(image.caption);
    divParent.append($pictureBox);
  });
}
