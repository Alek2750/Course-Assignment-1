/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myCalForm = document.getElementById("mycalculator");

myCalForm.addEventListener("click", event => {
    event.preventDefault();
    var n1 = event.currentTarget.n1.value;
    var n2 = event.currentTarget.n2.value;
        
    cal(n1, n2, event.target.value);
    
    //document.getElementById("add").addEventListener("click", cal(n1, n2, "add"));
    //document.getElementById("sub").addEventListener("click", cal(n1, n2, "sub"));
    //document.getElementById("mul").addEventListener("click", cal(n1, n2, "mul"));
    //document.getElementById("div").addEventListener("click", cal(n1, n2, "div"));

});



const cal = (n1, n2, op) => {
    fetch("http://localhost:8084/Course_Assignment_1/calculator?operation=" + op + "&n1=" + n1 + "&n2=" + n2)
            .then((res) => {
                return res.text()
            }).then((data) => {
                document.getElementById("result").value = data;
            })
}