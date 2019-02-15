/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myform = document.getElementById("userinfo");

myform.addEventListener("submit", event => {
    event.preventDefault();
    
   id = event.currentTarget.userid.value;
   userinfo(id);
});



const userinfo = (id) => {
    console.log('fra min myfunc '+id);
    fetch("https://jsonplaceholder.typicode.com/users/"+id).then( (res) => {
        return res.json()
    }).then( (data) => { 
      document.getElementById("name").value = data.name;
      document.getElementById("phone").value = data.phone;
      document.getElementById("street").value = data.address.street;
      document.getElementById("city").value = data.address.city;
      document.getElementById("zip").value = data.address.zipcode;
      document.getElementById("geo").value = data.address.geo.lat +" , "+data.address.geo.lng;
    })
}



//const myFunc = () => {
//    
//}

//(() => {
//    console.log('hey')
//})()




