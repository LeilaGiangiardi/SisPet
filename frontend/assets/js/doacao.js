document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalPix');
    const botoesAjudar = document.querySelectorAll('.btn-sos-action');
    const fecharModalBtn = document.querySelector('.close-modal');
    
    // Elementos internos do modal
    const viewPagamento = document.getElementById('viewPagamento');
    const viewSucesso = document.getElementById('viewSucesso');
    const btnCopiar = document.getElementById('btnCopiarPix');
    const inputPix = document.getElementById('chavePix');
    const btnConfirma = document.getElementById('btnConfirmarDoacao');
    
    let animalAtualCard = null; // Para saber qual barra de progresso atualizar

    // Abre o Modal ao clicar em "Ajudar"
    botoesAjudar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            e.preventDefault(); // Impede de recarregar a página
            animalAtualCard = e.target.closest('.sos-card'); // Guarda o card do animal
            
            // Reseta o modal para o estado inicial
            viewPagamento.style.display = 'block';
            viewSucesso.style.display = 'none';
            btnConfirma.innerHTML = 'Já fiz o PIX';
            btnConfirma.disabled = false;
            
            modal.classList.add('ativo');
        });
    });

    // Fechar Modal
    fecharModalBtn.addEventListener('click', () => modal.classList.remove('ativo'));
    window.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('ativo'); });

    // Copiar Chave PIX
    btnCopiar.addEventListener('click', () => {
        inputPix.select();
        document.execCommand('copy');
        btnCopiar.innerHTML = '<i class="fa-solid fa-check"></i> Copiado!';
        btnCopiar.style.backgroundColor = '#2A9D8F';
        setTimeout(() => {
            btnCopiar.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
            btnCopiar.style.backgroundColor = '';
        }, 3000);
    });

    // Simular Confirmação e Atualizar Barra de Progresso
    btnConfirma.addEventListener('click', () => {
        // Efeito de carregamento
        btnConfirma.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processando...';
        btnConfirma.disabled = true;

        setTimeout(() => {
            // Esconde pagamento e mostra o sucesso
            viewPagamento.style.display = 'none';
            viewSucesso.style.display = 'flex';

            // Magia do Frontend: Atualiza a barra de progresso do animal em tempo real visualmente
            if(animalAtualCard) {
                const barra = animalAtualCard.querySelector('.progress-fill');
                const textoProgresso = animalAtualCard.querySelector('.progress-text strong');
                
                // Exemplo simulado: aumenta a barra visualmente
                barra.style.width = '100%';
                barra.style.backgroundColor = '#2A9D8F'; // Fica verde
                textoProgresso.innerText = '100% alcançado!';
                textoProgresso.style.color = '#2A9D8F';
            }
        }, 1500); // 1.5 segundos de simulação
    });
});