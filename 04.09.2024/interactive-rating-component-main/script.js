// Tüm numara elementlerini seç
const numbers = document.querySelectorAll('.number');

// Her numara için tıklama olayı ekle
numbers.forEach(number => {
  number.addEventListener('click', function() {
    // Daha önce aktif olan numaradan 'active' sınıfını kaldır
    numbers.forEach(num => num.classList.remove('active'));
    
    // Tıklanan numaraya 'active' sınıfını ekle
    this.classList.add('active');
  });
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini önler
    
    // Seçilen değeri al
    const selectedNumber = document.querySelector('.numbers .active').textContent;
  
    // `main` içeriğini değiştir
    const mainContent = `
      <div class="">
        <img src="images/illustration-thank-you.svg" alt="">
      </div>
      <div class="text">
        <div class="title">
            <p>You selected ${selectedNumber} out of 5.</p>
        </div>
        
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
        
      </div>
    `;
  
    // `main` elementine yeni içeriği yerleştir
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = mainContent;
  
    // 'centered' sınıfını ekle
    mainElement.classList.add('centered');
  });