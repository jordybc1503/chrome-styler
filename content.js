if (window.location.href.startsWith("https://www.freecodecamp.org")) {
  const main = document.querySelector('main');
  if (main) main.style.backgroundColor = '#b3b2b2';

  const postContent = document.querySelector('.post-full-content');
  if (postContent) postContent.style.backgroundColor = '#b3b2b2';
} else if (window.location.href.startsWith("https://play.google.com/books")) {

  const main = document.querySelector('.mat-app-background');
  if (main) postContent.style.backgroundColor = '#e7d9d9';
  const navBar = document.querySelector('.ng-star-inserted');
  if (navBar) {
    navBar.style.backgroundColor = '#e7d9d9';
  }

}
