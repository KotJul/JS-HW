let perPageCount = 10;
let originalData=[]
function loadDataInTable() {
  fetch('https://api.instantwebtools.net/v1/airlines')
    .then((response) => response.json())
    .then((data) => {
      originalData = data
})
.catch(error => {
      console.error(error)
    

    
}



// spinner.style.display = 'block';
// .catch(error => {
//     console.error(error)
//   })
//   .finally(() =>{
//     spinner.style.display = 'none';
//   })

// ?page=0&size=10