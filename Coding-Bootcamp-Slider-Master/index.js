const data = [
  {
    name: 'Tanya Sinclair',
    position: 'UX Engineer',
    image: './images/image-tanya.jpg',
    description:
      "I've been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
  },
  {
    name: 'John Tarkpor',
    position: 'Junior Front-end Developer',
    image: './images/image-john.jpg',
    description:
      'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
  },
];

const container = document.querySelector('.container');
const template = document.getElementById('template');

let currentIndex = 0;

function renderPerson() {
  container.innerHTML = '';

  const personSection = document.importNode(template.content, true);
  const currentPerson = data[currentIndex];

  const personImage = personSection.querySelector('.hero_image_container img');
  personImage.src = currentPerson.image;

  const personName = personSection.querySelector('.name');
  personName.textContent = currentPerson.name;

  const personPosition = personSection.querySelector('.position');
  personPosition.textContent = currentPerson.position;

  const personInfo = personSection.querySelector('.info_text');
  personInfo.textContent = `" ${currentPerson.description} "`;

  const prevPersonArrow = personSection.querySelector('.prev');
  const nextPersonArrow = personSection.querySelector('.next');

  prevPersonArrow.addEventListener('click', loadPrevPerson);
  nextPersonArrow.addEventListener('click', loadNextPerson);

  container.appendChild(personSection);
}

renderPerson();

function loadPrevPerson() {
  currentIndex = checkIndex(currentIndex - 1);
  renderPerson();
}

function loadNextPerson() {
  currentIndex = checkIndex(currentIndex + 1);
  renderPerson();
}

function checkIndex(index) {
  if (index < 0) {
    return data.length - 1;
  }

  if (index > data.length - 1) {
    return 0;
  }

  return index;
}
