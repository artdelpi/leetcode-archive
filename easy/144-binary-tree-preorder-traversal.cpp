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
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> res_vec = {};
        helper(root, res_vec);
        return res_vec;
    }
private:
    void helper(TreeNode* node, vector<int>& res_vec) {
         // if it's a nullptr
        if (!node) {
            return;
        };
        res_vec.push_back(node->val);
        helper(node->left, res_vec);
        helper(node->right, res_vec);
    }
};