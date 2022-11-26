const menu = document.querySelector('.menu');
const nav = document.querySelector('.list');
const links = document.querySelectorAll('.bar-list');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav.classList.toggle('show-links');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    nav.classList.remove('show-links');
  });
});

const speakers = [
  {
    image: 'Images/AFP9BM7Z7jpg.jpg',
    name: 'António Guterres',
    occupation: 'United Nation Secretary',
    description: ` We need a concrete global response that addresses the needs <br>of the world’s most vulnerable people, 
      communities and nations.`,
  },

  {
    image: 'Images/unnamed.jpg',
    name: 'Duale Salim',
    occupation: 'UNHRC Secretary',
    description: `Today’s meeting will ensure we get all the data on what we require in terms of food and
        water`,
  },

  {
    image: 'Images/AFP9BM7Z7jpg.jpg',
    name: 'Sabella Muthoni',
    occupation: 'Head Teacher of Angelina Jolie Girls Boarding School',
    description: ' The program has really improved the learners\' critical thinking.',
  },

  {
    image: 'Images/DROUGHT-PHOTO.jpg',
    name: 'Abbas Gullet',
    occupation: 'Kenya Red Cross Secretary General',
    description: ` The committee will notably be expected to design a data management framework capable of 
        computing disaggregate needs .`,
  },

  {
    image: 'Images/unnamed.jpg',
    name: 'William Samoei',
    occupation: 'President Of Kenya',
    description: ' I believe that the ultimate solution to food security in the country is irrigation',
  },

  {
    image: 'Images/DROUGHT-PHOTO.jpg',
    name: 'Dida ChirChir',
    occupation: 'County Commissioner Garissa',
    description: ` Very recently I hosted the Governor State of South Sudan, Louis Lobong, 
        to discuss about the LAPSSET Corridor and in particular
         the controversial Bridge between Nadapal in Kenya`,
  },
];

const speakersContainer = document.querySelector('.spks-main');
window.addEventListener('DOMContentLoaded', () => {
  const speakersString = speakers.map((item) => `  <article class="speakers">
        <div class="img-tg">
           <img  src=${item.image} alt="">
        </div>
        <div class="body-p2">
            <h2 class="h2-h2">${item.name}</h2>
            <h3 class="h3-h3">${item.occupation}</h3>
            <p class="p2-p3">${item.description}</p>
        </div>
    </article>`)
    .join('');
  speakersContainer.innerHTML = speakersString;
});