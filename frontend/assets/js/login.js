let currentStep = 1;
let tipoPerfil = 'PF'; // PF = Pessoa Física, ONG = Instituição

document.addEventListener('DOMContentLoaded', () => {
    const viewLogin = document.getElementById('viewLogin');
    const viewCadastro = document.getElementById('viewCadastro');
    const linkCadastro = document.getElementById('linkIrParaCadastro');
    const linkLogin = document.getElementById('linkIrParaLogin');

    // Transição entre Login e Cadastro Geral
    if (linkCadastro && linkLogin) {
        linkCadastro.addEventListener('click', (e) => {
            e.preventDefault();
            viewLogin.style.display = 'none';
            viewCadastro.style.display = 'block';
            resetStepper();
        });

        linkLogin.addEventListener('click', (e) => {
            e.preventDefault();
            viewCadastro.style.display = 'none';
            viewLogin.style.display = 'block';
        });
    }
});

// Altera dinamicamente os formulários dependendo do tipo de usuário
function mudarTipoPerfil(perfilSelecionado) {
    tipoPerfil = perfilSelecionado;
    
    const btnPF = document.getElementById('btnPerfilPF');
    const btnONG = document.getElementById('btnPerfilONG');
    const dot4 = document.getElementById('dotEtapa4');

    if (!btnPF || !btnONG) return;

    if (perfilSelecionado === 'PF') {
        btnPF.classList.add('active');
        btnONG.classList.remove('active');
    } else {
        btnONG.classList.add('active');
        btnPF.classList.remove('active');
    }

    atualizarVisibilidadeCampos();
}

function atualizarVisibilidadeCampos() {
    const isPF = (tipoPerfil === 'PF');
    
    const e1PF = document.getElementById('etapa1PF');
    const e1ONG = document.getElementById('etapa1ONG');
    const e2PF = document.getElementById('etapa2PF');
    const e2ONG = document.getElementById('etapa2ONG');
    const e3PF = document.getElementById('etapa3PF');
    const e3ONG = document.getElementById('etapa3ONG');

    if(e1PF) e1PF.style.display = isPF ? 'block' : 'none';
    if(e1ONG) e1ONG.style.display = isPF ? 'none' : 'block';
    
    if(e2PF) e2PF.style.display = isPF ? 'block' : 'none';
    if(e2ONG) e2ONG.style.display = isPF ? 'none' : 'block';
    
    if(e3PF) e3PF.style.display = isPF ? 'block' : 'none';
    if(e3ONG) e3ONG.style.display = isPF ? 'none' : 'block';
}

function proximaEtapa() {
    if (currentStep < 4) {
        const stepAtual = document.querySelector(`.step-container[data-step="${currentStep}"]`);
        if (stepAtual) stepAtual.classList.remove('active');
        
        currentStep++;
        
        const proximoStep = document.querySelector(`.step-container[data-step="${currentStep}"]`);
        if (proximoStep) proximoStep.classList.add('active');
        
        // Esconde o seletor de perfil (Toggle) a partir da Etapa 2
        const toggleBox = document.getElementById('perfilToggleContainer');
        if (toggleBox) toggleBox.style.display = 'none';
        
        atualizarProgressoVisual();
    }
}

function etapaAnterior() {
    if (currentStep > 1) {
        const stepAtual = document.querySelector(`.step-container[data-step="${currentStep}"]`);
        if (stepAtual) stepAtual.classList.remove('active');
        
        currentStep--;
        
        const stepAnterior = document.querySelector(`.step-container[data-step="${currentStep}"]`);
        if (stepAnterior) stepAnterior.classList.add('active');
        
        // Se voltar para a etapa 1, mostra o seletor de perfil novamente
        if (currentStep === 1) {
            const toggleBox = document.getElementById('perfilToggleContainer');
            if (toggleBox) toggleBox.style.display = 'flex';
        }
        
        atualizarProgressoVisual();
    }
}

function atualizarProgressoVisual() {
    const dots = document.querySelectorAll('.step-dot');
    dots.forEach(dot => {
        const stepNum = parseInt(dot.getAttribute('data-step'));
        if (stepNum <= currentStep) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    const progressLine = document.getElementById('progressLine');
    if (progressLine) {
        const percent = ((currentStep - 1) / 3) * 100;
        progressLine.style.width = `${percent}%`;
    }
}

function resetStepper() {
    currentStep = 1;
    mudarTipoPerfil('PF');
    const toggleBox = document.getElementById('perfilToggleContainer');
    if (toggleBox) toggleBox.style.display = 'flex';
    
    document.querySelectorAll('.step-container').forEach(c => c.classList.remove('active'));
    const primeiroStep = document.querySelector('.step-container[data-step="1"]');
    if (primeiroStep) primeiroStep.classList.add('active');
    
    atualizarProgressoVisual();
}

function toggleCheckbox(id) {
    const checkbox = document.getElementById(id);
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
    }
}

function finalizarCadastro() {
    alert('Cadastro processado com Sucesso! No Back-end Java salvaremos este novo perfil no PostgreSQL.');
    window.location.href = 'index.html';
}