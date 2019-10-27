const friends = ['remi', 'lou', 'cannelle', 'mehdi', 'pierre', 'kams'];

function displayTable(table, i = 0) {
  console.log(friends[i]);
  if (i < friends.length - 1) {
    displayTable(table, i + 1);
  }
}
displayTable(friends);
