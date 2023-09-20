const img = document.getElementById('placeholder_image');
const lazyContainer = document.getElementById('lazy_container');

const options = {
  root: null,
  rootMargin: '0px', // edit for viewports
  threshold: 0.5, // Trigger when img is 50% visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // remove the img
      lazyContainer.removeChild(img);
      // create a video instead
      const videoElement = document.createElement('video');
      videoElement.src = '../video/1 Stable Summit at ETHcc6 - Aftermovie.mp4';
      videoElement.alt = 'Lazy-loaded Video';
      videoElement.poster = '../img/1 Stable Summit at ETHcc6 - Aftermovie.jpg';
      videoElement.controls = true;
      videoElement.preload = 'none';
      // swap it in for the img
      lazyContainer.appendChild(videoElement);
      // load video
      videoElement.load();
      // disconnect observer
      observer.unobserve(img);
    }
  });
}, options);

observer.observe(img);
