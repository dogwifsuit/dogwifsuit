AOS.init();

simplyCountdown('.countdown-mobile', {
    year: 2024, // required
    month: 6, // required
    day: 28, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: ' :', plural: ' :' },
        hours: { singular: ' :', plural: ' :' },
        minutes: { singular: ' :', plural: ' :' },
        seconds: { singular: '', plural: '' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

simplyCountdown('.countdown-desktop', {
  year: 2024, // required
  month: 6, // required
  day: 28, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: ' day', plural: ' days' },
      hours: { singular: ' hour', plural: ' hours' },
      minutes: { singular: ' minute', plural: ' minutes' },
      seconds: { singular: ' second', plural: ' seconds' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

// Selecciona todos los links dentro del navbar
const scrollableLink = document.querySelectorAll('.scrollable-link');

// Itera por cada uno de los links
scrollableLink.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento default del link

    // Obtiene el ID al que el link hace referencia
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Si el elemento existe, realiza el scroll
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Habilita el scroll suave
        block: 'start'      // Alinea el elemento con el inicio del viewport
      });
    }
  });
});