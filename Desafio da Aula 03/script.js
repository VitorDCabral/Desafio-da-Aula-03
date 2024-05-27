deposito = document.getElementById('deposito')
saque = document.getElementById('saque')
saldo = document.getElementById('saldo')
depositoInput = document.getElementById('deposito-input')
saqueInput = document.getElementById('saque-input')
depositoBtn = document.getElementById('deposito-btn')
saqueBtn = document.getElementById('saque-btn')


depositoBtn.addEventListener('click', () => {
    const value = depositoInput.value;
    const depositoValue = Number(deposito.innerText) + Number(value);
    const saldoValue = Number(saldo.innerText) + Number(value);
    deposito.innerText = depositoValue;
    saldo.innerText = saldoValue;
    depositoInput.value = '';
})

saqueBtn.addEventListener('click', () => {
    const value = saqueInput.value;
    if (Number(value) === 0) {
        alert("Você não possui saldo suficiente");
    } else if (Number(value) > Number(saldo.innerText)) {
        alert("Você não possui saldo suficiente");
    } else {
        const saldoValue = Number(saldo.innerText) - Number(value);
        const saqueValue = Number(saque.innerText) + Number(value);
        saque.innerText = saqueValue;
        saldo.innerText = saldoValue;
        saqueInput.value = '';
    }
})