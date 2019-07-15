https://leetcode.com/problems/count-and-say/

var countAndSay = function(n) {
    var prev = '1';
    var say = '';
    i = 0;
    while (i < n) {
        var counter = 1;
        // look at first number check if next number is the same
        say = prev;
        prev = counter + say;
        i++;
    }; 
    
    return say;
};