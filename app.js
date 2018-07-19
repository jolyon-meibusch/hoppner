
// slider
  const slider = document.querySelector('.slider');
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });

// scroll spy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {
      scrollOffset:   0
    });
