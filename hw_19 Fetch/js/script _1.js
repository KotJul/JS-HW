function loadUserInTable(page){
  fetch('https://randomuser.me/api/?page=${page}')
  .then ((response) => response.json())
  .then((user)=>{
  console.log(user);
  const photo = document.body.querySelector('#photo');
  photo.src = user.results[0].picture.medium;
  const gender = document.body.querySelector('#gender');
  gender.textContent = user.results[0].gender;
  const name = document.body.querySelector('#name');
  name.textContent = `${user.results[0].name.first} ${user.results[0].name.last}`;
  const email = document.body.querySelector('#email');
  email.textContent = user.results[0].email;
  const phone = document.body.querySelector('#phone');
  phone.textContent = user.results[0].phone;
  window.user=user.results[0];
   
  })
}
  
  const buttonAdd = document.body.querySelectorAll('button')[0];
   console.log(buttonAdd);
   buttonAdd.addEventListener('click', (e)=>{
      e.preventDefault();
      loadUserInTable();
       })
  
  const buttonNext = document.body.querySelectorAll('button')[1];
  console.log(buttonNext);
  buttonNext.addEventListener('click', (e)=>{
  e.preventDefault();
  e++;
  loadNextUser();
   })