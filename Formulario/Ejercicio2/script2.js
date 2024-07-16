
function submitForm() {
   
    const name = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('edad').value;
    const gender = document.getElementById('genero').value;
    const country = document.getElementById('pais').value;
    const terms = document.getElementById('terminos').checked;

    
    if (!terms) {
        alert('Debe aceptar los términos y condiciones.');
        return;
    }

    
    const formData = {
        nombre: name,
        email: email,
        edad: age,
        genero: gender,
        pais: country,
    };

    
    const tbody = document.querySelector('#submittedData tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${formData.nombre}</td>
        <td>${formData.email}</td>
        <td>${formData.edad}</td>
        <td>${formData.genero}</td>
        <td>${formData.pais}</td>
    `;
    tbody.appendChild(row);

    
    document.getElementById('Formulario').reset();
}
