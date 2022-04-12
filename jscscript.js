function getapi(){
fetch('https://reqres.in/api/users?page=1').then((data)=>{
  return data.json();
}).then((completedata)=>{


  let val="";
  completedata.data.map((values)=>{
    val+=`<div class="data1">
    <img src=${values.avatar} alt="image" class="pictures">
<div class="ID">${"ID -"+ values.id}</div>
<p class="email">${"Email -"+values.email}</p>
<p class="firstname">${"First Name -"+values.first_name}</p>
  <p class="lastname">${"Last Name -"+values.last_name}</p>
  </div>`
  });
  document.getElementById("data").innerHTML=val;

}).catch((er)=>{
  console.log(er)
})

      
}
    
