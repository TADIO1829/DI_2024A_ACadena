
function calculoTotal() {
    
    const principal = document.getElementById('principal').value;
    const postre = document.getElementById('postre').value;

   
    if (!principal || !postre) {
        alert('Debe seleccionar un plato fuerte y un postre.');
        return;
    }

   
    const prices = {
        'pollo': 10,
        'res': 15,
        'pescado': 12,
        'helado': 3,
        'pastel': 5,
        'fruta': 2
    };

   
    const costototal = prices[principal] + prices[postre];

   
    document.getElementById('costototal').textContent = `$${costototal}`;
}
