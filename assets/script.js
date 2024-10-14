console.log('im alive');

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// variabili
let rowElement = document.querySelector('.row');

// ciclo for dell'array per creare il markup
for (let i = 0; i < teamMembers.length; i++) {
  
  // 1. individua l'oggetto singolo
  let member = teamMembers[i];

  // 2. individua le proprietà degli oggetti
  let {name, role, email, img} = member;
  console.log(member);

  // 3. crea il markup
  let markup = `
  <div class="col-4">
    <div class="card">
        <img src="" alt="">
        <h3>

        </h3>
        <p>

        </p>
        <a href="mailto:">
        </a>
    </div>
  </div>`;
  console.log(markup);

  // 4. stampalo a schermo (addition assignment)
}