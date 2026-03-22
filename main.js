document.addEventListener('DOMContentLoaded', () => {
    const Input = document.getElementById('NovaTarefa');
    const Lista = document.getElementById('ListaTarefas');
    const form = document.getElementById('todo-form');
    const Contar = document.getElementById('contador');

    let contador = 0 ;

    function AdicionarTarefa() {
        const Texto = Input.value.trim();
        console.log('Função AdicionarTarefa chamada'); // Log principal

        if (Texto === "") {
            console.log('Campo vazio - alert será mostrado');
            alert("Por favor, digite uma tarefa");
            return;
        }

        console.log('Texto digitado:', Texto);

        // Criar li
        const li = document.createElement('li');
        li.innerText = Texto;
        Contagem(+1);

        // Botão excluir
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Excluir';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.onclick = () => {
            console.log('Tarefa removida:', Texto);
            li.remove();
            Contagem(-1);
        };

        // Marcar como concluída
        li.onclick = (e) => {
            if (e.target !== deleteBtn) {
                li.classList.toggle('concluida');
                console.log(`Tarefa "${Texto}" marcada como concluída?`, li.classList.contains('concluida'));
            }
        };

        li.appendChild(deleteBtn);
        Lista.appendChild(li);

        console.log('Tarefa adicionada com sucesso:', Texto);

        Input.value = '';
        Input.focus();
    }


    function Contagem(number){
        contador += number;
        Contar.innerText = contador

    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        console.log('Form submit detectado');
        AdicionarTarefa();
    });
});