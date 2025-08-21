/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        // both nullptr
        if (!p && !q) {
            return true;
        } ;
        
        // one is a nullptr and the other isn't
        if (!p || !q) {
            return false;
        };

        // checks values
        if (p->val != q->val) {
            return false;
        };
        // if at least one is false, then they're different
        bool is_left_subtree_equal = isSameTree(p->left, q->left);
        bool is_right_subtree_equal = isSameTree(p->right, q->right);
        
        return is_right_subtree_equal && is_left_subtree_equal;
    };
};