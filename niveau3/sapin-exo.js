function starNb(nb, i = 0) {
  if (i < nb) {
    return '*'.concat(starNb(nb, i + 1));
  }

  return i < nb ? '*'.concat(starNb(nb, i + 1)) : '';
}

function sapin(heightSapin, counter = 0) {
  if (counter < heightSapin) {
    console.log(starNb(counter + 1));
    sapin(heightSapin, counter + 1);
  }
}

sapin(5);
