// Los formularios con [data-whatsapp-form] abren WhatsApp con el mensaje ya escrito (no se envía correo).
document.querySelectorAll('[data-whatsapp-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const phone = (data.get('phone') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();
    const number = (data.get('number') || '59177235102').toString();

    const lines = ['Hola, soy ' + name + '.'];
    if (phone) lines.push('Mi teléfono: ' + phone);
    lines.push('', message);

    const url = 'https://wa.me/' + number + '?text=' + encodeURIComponent(lines.join('\n'));
    const win = window.open(url, '_blank', 'noopener');
    if (!win) window.location.href = url;

    form.querySelector('.form-message').textContent = 'Abriendo WhatsApp…';
    form.reset();
  });
});
