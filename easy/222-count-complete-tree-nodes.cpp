struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
 
class Solution {
public:
    int counter = 0;

    int countNodes(TreeNode* root) {
        count_node(root);
        return counter;
    }

    void count_node(TreeNode* n) {
        if (n) {
            // if is a node
            counter += 1;
        } else {
            // not a node
            return;
        }
        count_node(n->left);
        count_node(n->right);
    };
    
};