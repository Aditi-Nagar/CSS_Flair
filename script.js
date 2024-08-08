var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var bottomPicture = document.querySelector('.bottom-picture-wrapper');

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Check if user is scrolling downwards
  if (scrollTop > lastScrollTop) {
    // Get the distance scrolled from the top of the document
    var scrollDistance = scrollTop;

    // Calculate the offset from the bottom for animation start
    var windowHeight = window.innerHeight;
    var bottomPictureHeight = bottomPicture.clientHeight;
    var offset = windowHeight - bottomPictureHeight;

    // Check if the scroll distance has reached the offset
    if (scrollDistance > offset) {
      // Apply the animation class to the image wrapper
      bottomPicture.classList.add('rotate-and-disappear');
    }
  }

  lastScrollTop = scrollTop;
});
