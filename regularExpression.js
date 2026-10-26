//Dom Event handling:-
//<--//is a delimiter for regular expression boundry-->
//$ -identify last character
//[]is one character then 10 [] is character
//\d is 0-9 digits
//{} is range how many times used multiply
console.log(document);
console.log(document.querySelector("button"));
document.querySelector("button").onclick = function () {
  let pancard = document.getElementById("x1").value;
    console.log(pancard);
    let regularExpr = /^[a-zA-Z]{5}[0 - 9][0 - 9][0 - 9][\d][a-zA - Z]$ / ;
    let answer = regularExpr.test(pancard);
    let msg = answer ? "valid" : "invalid";
    document.getElementById("msg").innerHTML = msg;
};
