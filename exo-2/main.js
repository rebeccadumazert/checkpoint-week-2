const sentence = 'coucou petite fleur des bois';

function reverseSentence(text, i = 0) {
  const letter = text[text.length - 1 - i];
  if (i < text.length - 1) {
    return letter.concat(reverseSentence(text, i + 1));
  } else {
    return letter;
  }
}

reverseSentence(sentence);
