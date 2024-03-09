function mergeTrees(root1, root2) {
    // If either tree is null, return the other
    if (!root1) {
        return root2;
    }
    if (!root2) {
        return root1;
    }
    
    // Merge the values of the nodes if both exist
    root1.val += root2.val;
    
    // Recursively merge the left and right subtrees
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    
    return root1;
}
