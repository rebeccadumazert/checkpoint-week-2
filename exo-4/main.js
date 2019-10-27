const node7 = {
  leftChildren: null,
  rightChildren: null,
  value: 7,
};
const node6 = {
  leftChildren: null,
  rightChildren: null,
  value: 6,
};
const node5 = {
  leftChildren: null,
  rightChildren: null,
  value: 5,
};
const node4 = {
  leftChildren: null,
  rightChildren: null,
  value: 4,
};
const node3 = {
  leftChildren: node6,
  rightChildren: node7,
  value: 3,
};
const node2 = {
  leftChildren: node4,
  rightChildren: node5,
  value: 2,
};
const node1 = {
  leftChildren: node2,
  rightChildren: node3,
  value: 1,
};

function reverseBrowseNode(node) {
  const hasLeft = node.leftChildren !== null;
  const hasRight = node.rightChildren !== null;
  if (hasLeft) {
    reverseBrowseNode(node.leftChildren);
  }
  if (hasRight) {
    reverseBrowseNode(node.rightChildren);
  }
  console.log(node.value);
}

reverseBrowseNode(node1);
