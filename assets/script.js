console.log('im alive');

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

// variabili
let rowElement = document.querySelector('.row');
let formElement = document.querySelector('form');
let teamElement = document.getElementById('team');

// creazione funzione per creare markup
function generateMember(member) {

  // individua le proprietà degli oggetti
  let { name, role, email, img } = member;

  // crea il markup
  return markup = `
    <div class="col-lg-4 col-md-6 col-sm-1">
      <div class="d-flex flex-row bg-black text-light">
          <div class="d-block">
            <img src="${img}" class="" alt="">
          </div>  
          <div class="m-auto">
            <h5 class="text-uppercase">
            ${name}
            </h5>
            <p>
            ${role}
            </p>
            <a href="mailto:${email}" class="link-info link-underline-opacity-0">
            ${email}
            </a>
          </div>
      </div>
    </div>`;
}

// ciclo for dell'array per creare il markup
for (let i = 0; i < teamMembers.length; i++) {

  // individua l'oggetto singolo
  let member = teamMembers[i];

  // richiamo funzione
  let markup = generateMember(member);

  // stampalo a schermo (addition assignment)
  rowElement.innerHTML += markup;
}

console.log(formElement);

formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  // aggiungi valori input
  let inputName = document.getElementById('name').value;
  let inputRole = document.getElementById('role').value;
  let inputEmail = document.getElementById('email').value;
  let inputImage = document.getElementById('img').value;
  console.log(inputEmail, inputImage, inputName, inputRole);

  // nuovo oggetto
  const newMember = {
    name: inputName,
    role: inputRole,
    email: inputEmail,
    img: inputImage
  };

  console.log(newMember);

  // aggiunta oggetto all'array
  teamMembers.push(newMember);

  // richiamo funzione
  let newMemberMarkup = generateMember(newMember);

  // stampa a schermo (addition assignment)
  teamElement.innerHTML += newMemberMarkup;
})