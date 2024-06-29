function clearFormInputs() {
    var inputs = document.querySelectorAll('input[type="text"], input[type="date"]');
    inputs.forEach(input => {
        input.value = ''; // Limpa o valor de cada campo selecionado
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form'); 
    form.addEventListener('submit', function(event) { 
        event.preventDefault();

        var inputs = document.querySelectorAll('input[type="text"]');
        inputs.forEach(input => {
            input.value = input.value.toUpperCase();
        });

        var formData = new FormData(form); 
        fetch(form.action, { 
            method: 'POST',
            body: formData,
        })
       .then(response => {
            if (!response.ok) { 
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
       .then(data => {
            console.log('Dados enviados com sucesso:', data);
            alert('Formulário enviado com sucesso!');
            clearFormInputs(); 
            location.reload(); 
        })
       .catch(error => {
            console.error('Erro ao enviar o formulário:', error);
            alert('Usuário inserido na liste de viagem com sucesso.');
            clearFormInputs(); 
        });
    });
});

