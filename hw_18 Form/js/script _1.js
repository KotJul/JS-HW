const form = document.forms[0];
  const button = document.querySelector('#button');
  const div = document.querySelector('div');
  const inputImage = document.querySelector('#img-url');
  
  form.addEventListener('submit', updateImageUrl);/*вешаем событие на сабмит формы*/
  function updateImageUrl(event){
    event.preventDefault();/*отменяем действия браузера по умолчанию, иначе не будет виден результат*/
    const img = document.createElement('img');/*создаем img*/
    img.src = inputImage.value;/*значение инпута будет равняться пути картинки*/
    div.append(img);/*помещаем img в div*/
  
  img.addEventListener('load', showErrors);/*вешаем обработчик на img, потому что мы должны следить за его изменением,используем событие load 
  чтобы прописать что загрузка прошла успешно*/
  function showErrors(){/*функция которая выдаст ошибку в случает если картинка не загрузилась*/
      if(img.src != inputImage.value){
          div.textContent = 'Ошибка';
      }
  }
  showErrors()
}