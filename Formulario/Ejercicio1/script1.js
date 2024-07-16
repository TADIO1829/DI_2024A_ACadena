
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


    const ul = document.getElementById('datos');
    const li = document.createElement('li');
    li.textContent = `Nombre: ${formData.nombre}, Correo: ${formData.email}, Edad: ${formData.edad}, Género: ${formData.genero}, País: ${formData.pais}`;
    ul.appendChild(li);

    
    document.getElementById('Formulario').reset();
}
