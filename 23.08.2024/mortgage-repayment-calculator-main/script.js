function calculateRepayment() {
    const amount = document.getElementById("amount").value;
    const term = document.getElementById("term").value;
    const rate = document.getElementById("rate").value;
    const mortgageType = document.querySelector('input[name="mortgage-type"]:checked').value;

    if (!amount || !term || !rate || !mortgageType) {
        alert("Please fill in all fields.");
        return;
    }

    // Aylık ödeme hesaplama (basit bir faiz hesaplama örneği, isteğinize göre daha karmaşık hesaplamalar eklenebilir)
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    const monthlyRepayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    const totalRepayment = monthlyRepayment * numberOfPayments;

    // Sonuçları güncelleme
    const resultsSection = document.getElementById("results-section");
    resultsSection.innerHTML = `
        <div class="result-card">
            <h2>Your result</h2>
            <p>Your results are shown below based on the information you provided. 
            To adjust the results, edit the form and click “calculate repayments” again.</p>
            <div class="payments">
                <div class="monthly">
                    <h4>Your monthly repayments</h4>
                    <h1>£${monthlyRepayment.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                    </div>
                    <div class="line">
                    </div>
                    <div class="total">
                    <p>Total you will repay over the term</p>
                    <h3>£${totalRepayment.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
                    </div>
            </div>
        </div>
    `;  
}

function clearAll() {

    document.getElementById("amount").value = '';
    document.getElementById("term").value = '';
    document.getElementById("rate").value = '';
    document.querySelector('input[name="mortgage-type"]:checked').checked = false;
    document.getElementById("results-section").innerHTML = `
        <img src="assets/images/illustration-empty.svg" alt="Mortgage Image">
        <h2>Results shown here</h2>
        <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
    `;
}2