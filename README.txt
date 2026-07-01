EL KARAOKE DE DIEGO - VERSION FINAL AUTOMATICA

Subir a GitHub:
- index.html
- styles.css
- script.js
- hero-video.mp4 si está incluido
- ambiente-1.mp4 / ambiente-2.mp4 / ambiente-3.mp4 si están incluidos

La web usa las fotos ya subidas en la raíz:
foto-1.jpg, foto-2.jpg, foto-3.jpg, foto-4.jpg, foto-5.jpg, foto-6.jpg

Calendario automático:
- Arranca el viernes 3 de julio de 2026.
- Genera próximas fechas cada 14 días.
- Muestra cuenta regresiva a la próxima fecha.
- Cada botón de fecha abre WhatsApp con mensaje automático.

Para cambiar la fecha base:
Abrí script.js y modificá:
const scheduleStart = new Date("2026-07-03T21:00:00-03:00");
