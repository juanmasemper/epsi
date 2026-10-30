const professionals = [
  {name:'Lucía Blanch',initials:'LB',photo:'profesionales/optimized/lucia-blanch.jpg',category:'Psicología',role:'Lic. en Psicología',specialty:'Niños, adolescentes y adultos.',phone:'1131428145',display:'11 3142-8145',email:'Lucia_blanch@hotmail.com'},
  {name:'Sofía Mauro',initials:'SM',photo:'profesionales/optimized/sofia.jpg',category:'Psicopedagogía',role:'Lic. en Psicopedagogía',phone:'3775444982',display:'3775 44-4982',email:'sofiamauro18@gmail.com'},
  {name:'Karina Luján Burgos',initials:'KB',photo:'profesionales/optimized/karina-lujan-burgos.jpg',category:'Psicopedagogía',role:'Lic. en Psicopedagogía',specialty:'Maestranda en Neuropsicología Infantojuvenil',phone:'2215485965',display:'221 548-5965',email:'lic.karinaburgos@gmail.com'},
  {name:'Camila Lamiño',initials:'CL',photo:'profesionales/optimized/camila-lamino.jpg',category:'Psicopedagogía',role:'Psicopedagoga',phone:'2214955975',display:'221 495-5975',email:'Camilalaminio.psp@gmail.com'},
  {name:'Claudia Catalina Repetto',initials:'CR',photo:'profesionales/optimized/claudia-repetto.jpg',category:'Fonoaudiología',role:'Fonoaudióloga',specialty:'Lenguaje, alteraciones respiratorias y deglución atípica.',phone:'2214281418',display:'221 428-1418',email:'catalinarepetto25@gmail.com'},
  {name:'Daiana Ferrero',initials:'DF',photo:'profesionales/optimized/daiana-ferrero.jpg',category:'Psicopedagogía',role:'Lic. en Psicopedagogía',phone:'2392554546',display:'2392 55-4546',email:'daianaferrero@hotmail.com'},
  {name:'Anahí Gomez',initials:'AG',photo:'profesionales/optimized/anahi-gomez.jpg',category:'Fonoaudiología',role:'Fonoaudióloga',phone:'2223431172',display:'2223 43-1172',email:'anahigom95@gmail.com'},
  {name:'Mariana Bonfigli',initials:'MB',photo:'profesionales/optimized/mariana-bonfigli.jpg',category:'Psicología',role:'Psicología clínica',specialty:'Atención a adultos, adolescentes y niños.',phone:'2215437390',display:'221 543-7390',email:'marianabonfigli@gmail.com'},
  {name:'Claudia Peralta',initials:'CP',photo:'profesionales/optimized/claudia-peralta.jpg',category:'Psicopedagogía',role:'Lic. en Psicopedagogía',phone:'2215467348',display:'221 546-7348',email:'clau.peralta@hotmail.com'},
  {name:'Cecilia Collazo',initials:'CC',photo:'profesionales/optimized/cecilia-collazo.jpg',category:'Psicología',role:'Especialista en Psicología Clínica',phone:'2215471873',display:'221 547-1873',email:'psic_collazo@hotmail.com'},
  {name:'M. Juliana Brandi',initials:'JB',photo:'profesionales/optimized/juliana-brandi.jpg',category:'Psicopedagogía',role:'Psicopedagoga',phone:'2215587073',display:'221 558-7073',email:'mjbrandi74@hotmail.com'},
  {name:'Pilar Payer',initials:'PP',photo:'profesionales/optimized/pilar-payer.jpg',category:'Musicoterapia',role:'Musicoterapeuta',phone:'2215701831',display:'221 570-1831',email:'lic.pilarpayer@gmail.com'},
  {name:'Agustina Vericat',initials:'AV',photo:'profesionales/optimized/agustina-vericat.jpg',category:'Neurodesarrollo',role:'Dra. en Neurodesarrollo',phone:'2215234150',display:'221 523-4150',email:'agustinavericat@gmail.com'},
  {name:'Sandra Marder',initials:'SM',photo:'profesionales/optimized/sandra-marder.jpg',category:'Psicología',role:'Dra. en Psicología',specialty:'Neuropsicología. Aprendizaje y desarrollo en niños y adolescentes',phone:'1166447155',display:'11 6644-7155',email:'sandramarder@gmail.com'}
];
function renderProfessional(p) {
  const message = encodeURIComponent(`Hola ${p.name}, te contacto desde la página de EPSI. Quisiera hacer una consulta.`);
  const avatar = p.photo
    ? `<span class="avatar avatar-photo"><img src="${p.photo}" alt="${p.name}" width="56" height="56" loading="eager" decoding="async"></span>`
    : `<span class="avatar" aria-hidden="true">${p.initials}</span>`;
  const whatsapp = p.phone ? `<a class="contact whatsapp" href="https://wa.me/549${p.phone}?text=${message}" target="_blank" rel="noopener noreferrer" aria-label="Contactar a ${p.name} por WhatsApp (abre en otra pestaña)"><svg aria-hidden="true"><use href="#wa"/></svg>WhatsApp</a>` : '';
  const mail = p.email ? `<a class="contact email" href="mailto:${p.email}" aria-label="Enviar un correo a ${p.name}"><svg aria-hidden="true"><use href="#mail"/></svg>Mail</a>` : '';
  const phoneDetail = p.phone ? `<div class="detail-row"><a href="tel:+549${p.phone}" aria-label="Llamar a ${p.name}">Cel. ${p.display}</a><button class="copy" type="button" data-copy="${p.phone}" aria-label="Copiar teléfono de ${p.name}">Copiar</button></div>` : '';
  const mailDetail = p.email ? `<div class="detail-row"><a href="mailto:${p.email}">${p.email}</a><button class="copy" type="button" data-copy="${p.email}" aria-label="Copiar correo de ${p.name}">Copiar</button></div>` : '';
  return `<article class="card"><div class="person">${avatar}<div><h3>${p.name}</h3><p class="role">${p.role}</p></div></div>${p.specialty ? `<p class="specialty">${p.specialty}</p>` : ''}${whatsapp || mail ? `<div class="actions">${whatsapp}${mail}</div><div class="details">${phoneDetail}${mailDetail}</div>` : ''}</article>`;
}

const categories = ['Psicopedagogía', 'Fonoaudiología', 'Psicología', 'Neurodesarrollo', 'Musicoterapia'];
document.getElementById('team').innerHTML = categories.map((category, index) => {
  const cards = professionals.filter(p => p.category === category).map(renderProfessional).join('');
  const content = cards || `<div class="card"><p class="role">Para más información sobre ${category}, escribinos por Instagram.</p><a class="contact email" href="https://www.instagram.com/epsi.citybell.laplata/" target="_blank" rel="noopener noreferrer" aria-label="Consultar por ${category} en Instagram (abre en otra pestaña)"><svg aria-hidden="true"><use href="#instagram"/></svg>Consultar por Instagram</a></div>`;
  return `<details class="professional-group specialty" name="specialties"><summary class="specialty-toggle"><span><span class="specialty-name">${category}</span><span class="specialty-hint">${cards ? 'Ver profesionales' : 'Consultar por esta especialidad'}</span></span><svg class="specialty-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary><div class="category-cards">${content}</div></details>`;
}).join('');

// Fetch and decode portraits while the specialty panels are still closed.
document.querySelectorAll('.avatar-photo img').forEach(img => {
  if (img.decode) img.decode().catch(() => {});
});
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

