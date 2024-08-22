const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const suffix = counter.innerText.replace(/[0-9]/g, ''); // Metin içinde rakam olmayan kısımları bul ve sakla
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText.replace(suffix, ''); // Suffix'i çıkararak sayıyı al

    const increment = target / 500;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}${suffix}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = `${target}${suffix}`;
    }
  };

  updateCounter();
});
