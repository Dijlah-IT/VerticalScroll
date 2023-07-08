document.querySelectorAll(".slider").forEach((elem) => {
  let slider = noUiSlider.create(elem, {
    start: 50,
    tooltips: true,
    connect: "lower",
    orientation: "vertical",
    range: {
      min: 1,
      max: 100,
    },
    format: wNumb({
      decimals: 0,
    }),
  });
});
