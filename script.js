const send = document.getElementById('send');
const list = document.getElementById('list');
const zapis = document.getElementById('zapis');
const dayNight = document.getElementById('day-night');

dayNight.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  dayNight.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌑';
});

send.addEventListener('click', () => {
  if (zapis.value == '') {
    alert('Вы ничего не ввели!');
    return;
  }

  const newElement = document.createElement('li');
  newElement.className = 'list-item';

  const textSection = document.createElement('div');
  textSection.className = 'text-section';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const textNode = document.createTextNode(zapis.value);

  textSection.appendChild(checkbox);
  textSection.appendChild(textNode);

  const div = document.createElement('div');
  div.className = 'edit-delete';

  const editBtn = document.createElement('button');
  editBtn.textContent = '🖊';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🪣';

  div.appendChild(editBtn);
  div.appendChild(deleteBtn);

  newElement.appendChild(textSection);
  newElement.appendChild(div);

  const hr = document.createElement('hr');

  list.appendChild(newElement);
  list.appendChild(hr);

  zapis.value = '';

  editBtn.addEventListener('click', () => {
    const newText = prompt('Изменить запись:', textNode.nodeValue);
    if (newText !== null) {
      textNode.nodeValue = newText;
    }
  });

  deleteBtn.addEventListener('click', () => {
    newElement.remove();
    hr.remove();
  });
});
