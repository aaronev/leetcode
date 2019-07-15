https://leetcode.com/problems/count-and-say/

var countAndSay = function(n) {
    var prev = '1';
    var say = '';
    i = 0;
    while (i < n) {
        var counter = '';
        // look at first number check if next number is the same
        for (i = 0; i < prev.length; i++) {
            if (prev[i] === prev[i+1]) { counter++; };
            prev = counter + prev;
        };
        say = prev;
        i++;
    }; 
    return say;
};