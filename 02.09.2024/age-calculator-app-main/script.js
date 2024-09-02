document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', validateInput);
  });
  
  function validateInput() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
  
    const today = new Date();
    let isValid = true;
  
    // Temizle
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('input').forEach(el => el.style.borderColor = '');
    document.querySelectorAll('label').forEach(el => el.style.color = '');
  
    // Gün, ay ve yıl validasyonu
    if (day) {
      const dayNum = parseInt(day);
      if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
        showError('day', 'Must be a valid day.');
        isValid = false;
      }
    }
  
    if (month) {
      const monthNum = parseInt(month);
      if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
        showError('month', 'Must be a valid month.');
        isValid = false;
      }
    }
  
    if (year) {
      const yearNum = parseInt(year);
      if (isNaN(yearNum) || yearNum > today.getFullYear()) {
        showError('year', 'Must be in the past.');
        isValid = false;
      }
    }
  
    // Geçerli değilse sonuçları sıfırla
    if (!isValid || !day || !month || !year) {
      document.querySelector('.year-data').textContent = '- -';
      document.querySelector('.month-data').textContent = '- -';
      document.querySelector('.day-data').textContent = '- -';
      return;
    }
  
    calculateAge(parseInt(day), parseInt(month), parseInt(year), today);
  }
  
  function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const labelElement = inputElement.previousElementSibling;
    inputElement.style.borderColor = 'red';
    labelElement.style.color = 'red';
  
    const errorMessage = document.createElement('span');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    inputElement.parentNode.appendChild(errorMessage);
  }
  
  function calculateAge(day, month, year, today) {
    let birthDate = new Date(year, month - 1, day);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.querySelector('.year-data').textContent = years;
    document.querySelector('.month-data').textContent = months;
    document.querySelector('.day-data').textContent = days;
  }
  