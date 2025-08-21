#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }
        // compare letter freq. hash map
        unordered_map<char, int> s_freq_hm;
        unordered_map<char, int> t_freq_hm;

        for (int i=0; i<s.length(); i++) {
            if (!s_freq_hm[s[i]]) {
                s_freq_hm[s[i]] = 1; 
            } else {
                s_freq_hm[s[i]] = s_freq_hm[s[i]] + 1;
            }
        };

        for (int i=0; i<t.length(); i++) {
            if (!t_freq_hm[t[i]]) {
                t_freq_hm[t[i]] = 1; 
            } else {
                t_freq_hm[t[i]] = t_freq_hm[t[i]] + 1;
            }
        };

        return s_freq_hm == t_freq_hm;
    };
};