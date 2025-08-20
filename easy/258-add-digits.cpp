#include <iostream>
#include <string>

class Solution {
public:
    int addDigits(int num) {
        int sum = 0;
        // to_string to take each individual num and add
        std::string num_as_str = std::to_string(num);
        while(num_as_str.length() > 1) {
            for (char c: num_as_str) {
                int c_int = int(c) - 48; // ASCII nums start @ 48
                sum += c_int;
            }
            num_as_str = std::to_string(sum); // update num_as_str
            sum = 0; // resets sum for the next iteration
        }
        return std::stoi(num_as_str);
    }
};