const professionals = [
  {name:'Karina Luján Burgos',initials:'KB',category:'Psicopedagogía',role:'Lic. en Psicopedagogía',specialty:'Maestranda en Neuropsicología Infantojuvenil',phone:'2215485965',display:'221 548-5965',email:'lic.karinaburgos@gmail.com'},
  {name:'Camila Lamiño',initials:'CL',category:'Psicopedagogía',role:'Lic. en Psicopedagogía',phone:'2214955975',display:'221 495-5975',email:'Camilalaminio.psp@gmail.com'},
  {name:'Claudia Catalina Repetto',initials:'CR',category:'Fonoaudiología',role:'Fonoaudióloga',specialty:'Lenguaje, alteraciones respiratorias y deglución atípica.',phone:'2214281418',display:'221 428-1418',email:'catalinarepetto25@gmail.com'},
  {name:'Daiana Ferrero',initials:'DF',category:'Psicopedagogía',role:'Lic. en Psicopedagogía',phone:'2392554546',display:'2392 55-4546',email:'daianaferrero@hotmail.com'},
  {name:'Anahí Gomez',initials:'AG',category:'Fonoaudiología',role:'Fonoaudióloga',phone:'2223431172',display:'2223 43-1172',email:'anahigom95@gmail.com'},
  {name:'Mariana Bonfigli',initials:'MB',category:'Psicología',role:'Psicología clínica',specialty:'Atención a adultos, adolescentes y niños.',phone:'2215437390',display:'221 543-7390',email:'marianabonfigli@gmail.com'},
  {name:'Claudia Peralta',initials:'CP',category:'Psicopedagogía',role:'Lic. en Psicopedagogía',phone:'2215467348',display:'221 546-7348',email:'clau.peralta@hotmail.com'},
  {name:'Cecilia Collazo',initials:'CC',category:'Psicología',role:'Especialista en Psicología Clínica',phone:'2215471873',display:'221 547-1873',email:'psic_collazo@hotmail.com'},
  {name:'M. Juliana Brandi',initials:'JB',category:'Psicopedagogía',role:'Lic. en Psicopedagogía',phone:'2215587073',display:'221 558-7073',email:'mjbrandi74@hotmail.com'},
  {name:'Pilar Payer',initials:'PP',category:'Musicoterapia',role:'Musicoterapeuta',phone:'2215701831',display:'221 570-1831',email:'lic.pilarpayer@gmail.com'}
];
function renderProfessional(p) {
  const message = encodeURIComponent(`Hola ${p.name}, te contacto desde la página de EPSI. Quisiera hacer una consulta.`);
  return `<article class="card"><div class="person"><span class="avatar" aria-hidden="true">${p.initials}</span><div><h3>${p.name}</h3><p class="role">${p.role}</p></div></div>${p.specialty ? `<p class="specialty">${p.specialty}</p>` : ''}<div class="actions"><a class="contact whatsapp" href="https://wa.me/549${p.phone}?text=${message}" target="_blank" rel="noopener noreferrer" aria-label="Contactar a ${p.name} por WhatsApp (abre en otra pestaña)"><svg aria-hidden="true"><use href="#wa"/></svg>WhatsApp</a><a class="contact email" href="mailto:${p.email}" aria-label="Enviar un correo a ${p.name}"><svg aria-hidden="true"><use href="#mail"/></svg>Mail</a></div><div class="details"><div class="detail-row"><a href="tel:+549${p.phone}" aria-label="Llamar a ${p.name}">Cel. ${p.display}</a><button class="copy" type="button" data-copy="${p.phone}" aria-label="Copiar teléfono de ${p.name}">Copiar</button></div><div class="detail-row"><a href="mailto:${p.email}">${p.email}</a><button class="copy" type="button" data-copy="${p.email}" aria-label="Copiar correo de ${p.name}">Copiar</button></div></div></article>`;
}

const categories = ['Psicopedagogía', 'Fonoaudiología', 'Psicología', 'Neurodesarrollo', 'Musicoterapia'];
document.getElementById('team').innerHTML = categories.map((category, index) => {
  const cards = professionals.filter(p => p.category === category).map(renderProfessional).join('');
  const content = cards || `<div class="card"><p class="role">Para más información sobre ${category}, escribinos por Instagram.</p><a class="contact email" href="https://www.instagram.com/epsi.citybell.laplata/" target="_blank" rel="noopener noreferrer" aria-label="Consultar por ${category} en Instagram (abre en otra pestaña)"><svg aria-hidden="true"><use href="#instagram"/></svg>Consultar por Instagram</a></div>`;
  return `<details class="professional-group specialty" name="specialties"><summary class="specialty-toggle"><span><span class="specialty-name">${category}</span><span class="specialty-hint">${cards ? 'Ver profesionales' : 'Consultar por esta especialidad'}</span></span><svg class="specialty-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary><div class="category-cards">${content}</div></details>`;
}).join('');

const chooseButton = document.getElementById('choose-professional');
const teamSection = document.getElementById('equipo');
chooseButton.addEventListener('click', () => {
  const opening = teamSection.hidden;
  teamSection.hidden = !opening;
  chooseButton.setAttribute('aria-expanded', String(opening));
  document.getElementById('choose-label').textContent = opening ? 'Ocultar especialidades' : 'Elegí a tu profesional';
  if (opening) {
    teamSection.focus({preventScroll:true});
    teamSection.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start'});
  }
});

let toastTimer;
document.getElementById('team').addEventListener('click', async event => {
  const button = event.target.closest('[data-copy]');
  if (!button) return;
  const toast = document.getElementById('toast');
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    toast.textContent = 'Copiado al portapapeles';
  } catch {
    toast.textContent = 'Mantené presionado el dato para copiarlo.';
  }
  clearTimeout(toastTimer);
  toast.classList.add('visible');
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2500);
});

if (window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--light-x', `${(event.clientX - bounds.left) / bounds.width * 100}%`);
      card.style.setProperty('--light-y', `${(event.clientY - bounds.top) / bounds.height * 100}%`);
    });
  });
}


