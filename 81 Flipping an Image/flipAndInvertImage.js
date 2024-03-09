const flipAndInvertImage = function (image) {
  const n = image.length;

  // Flip the image horizontally
  for (let i = 0; i < n; i++) {
    image[i] = image[i].reverse();
  }

  // Invert the image
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      image[i][j] = image[i][j] === 0 ? 1 : 0;
    }
  }

  return image;
};
