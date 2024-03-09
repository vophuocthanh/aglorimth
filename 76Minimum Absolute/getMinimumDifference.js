var getMinimumDifference = function (root) {
  let minDiff = Infinity;
  let prev = null;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    if (prev !== null) {
      minDiff = Math.min(minDiff, Math.abs(node.val - prev));
    }

    prev = node.val;

    inorder(node.right);
  }

  inorder(root);

  return minDiff;
};
