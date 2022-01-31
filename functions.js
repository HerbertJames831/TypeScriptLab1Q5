//For this exercise, refer to the following web page: (http://www.typescriptlang.org/docs/handbook/functions.html)
//For this exercise you are required to implement parameter types and return types for a function.
//Complete the following 3 exercises to demonstrate knowledge of this:
//(a) Create a function which accepts a string parameter and returns a count of the number of characters in that string.
//For example if the string provided as an input is "test 1" then the count returned is 6
//(b) Create a function which accepts a string parameter and returns a count of the number of characters in that string, excluding spaces.
//For example if the string provided as an input is "test 1" then the count returned is 5.
//(c) Combine both function created in 1 and 2, into one function which accepts an optional parameter
//so character count on input string can include or exclude spaces.
//Solution
function str_len(value) {
    var num = value.length;
    return num;
}
function str_len_nospaces(value) {
    var num = value.replace(/\s + /, "").length;
    return num;
}
console.log("String length with spaces and all is:" + str_len("test 1"));
console.log("String length with spaces not included in the count:  " + str_len_nospaces("test 1"));
function str_len_both(value, spaces) {
    //note ? for optional parameter
    //so will default to false due to
    //code in the function but I could
    //change from optional and provide
    //a default to the parameter by writing
    //the signature as 
    //function str_len_both(value: string, spaces: boolean - false): number{
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log("Function combined: String length with spaces and all that is: " + str_len_both("test 1", false));
console.log("Function combined: String length with spaces not included in the count:   " + str_len_both("test 1", true));
console.log("Function combined: String length with spaces and all is, not setting spaces parameter so will default to false: " + str_len_both("test 1"));
