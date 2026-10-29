const professionals = [
  {name:'Karina Lujan Burgos',initials:'KB',role:'Psicopedagoga',phone:'2215485965',display:'221 548-5965',email:'lic.karinaburgos@gmail.com'},
  {name:'Camila Lamiño',initials:'CL',role:'Psicopedagoga',phone:'2214955975',display:'221 495-5975',email:'Camilalaminio.psp@gmail.com'},
  {name:'Claudia Catalina Repetto',initials:'CR',role:'Fonoaudióloga',specialty:'Lenguaje, alteraciones respiratorias y deglución atípica.',phone:'2214281418',display:'221 428-1418',email:'catalinarepetto25@gmail.com'},
  {name:'Daiana Ferrero',initials:'DF',role:'Lic. en Psicopedagogía',phone:'2392554546',display:'2392 55-4546',email:'daianaferrero@hotmail.com'}
];
document.getElementById('team').innerHTML = professionals.map(p => {
  const message = encodeURIComponent(`Hola ${p.name}, te contacto desde la página de EPSI. Quisiera hacer una consulta.`);
  return `<article class="card"><div class="person"><span class="avatar" aria-hidden="true">${p.initials}</span><div><h2>${p.name}</h2><p class="role">${p.role}</p></div></div>${p.specialty ? `<p class="specialty">${p.specialty}</p>` : ''}<div class="actions"><a class="contact whatsapp" href="https://wa.me/549${p.phone}?text=${message}" target="_blank" rel="noopener noreferrer" aria-label="Contactar a ${p.name} por WhatsApp (abre en otra pestaña)"><svg aria-hidden="true"><use href="#wa"/></svg>WhatsApp</a><a class="contact email" href="mailto:${p.email}" aria-label="Enviar un correo a ${p.name}"><svg aria-hidden="true"><use href="#mail"/></svg>Mail</a></div><div class="details"><div class="detail-row"><a href="tel:+549${p.phone}" aria-label="Llamar a ${p.name}">Cel. ${p.display}</a><button class="copy" type="button" data-copy="${p.phone}" aria-label="Copiar teléfono de ${p.name}">Copiar</button></div><div class="detail-row"><a href="mailto:${p.email}">${p.email}</a><button class="copy" type="button" data-copy="${p.email}" aria-label="Copiar correo de ${p.name}">Copiar</button></div></div></article>`;
}).join('');

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
