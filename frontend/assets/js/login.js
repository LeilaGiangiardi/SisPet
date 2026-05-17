document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DAS ABAS (ENTRAR / CADASTRAR)
    // ==========================================
    const tabLogin = document.getElementById('tab-login');
    const tabCadastro = document.getElementById('tab-cadastro');
    const formLogin = document.getElementById('form-login');
    const formCadastro = document.getElementById('form-cadastro');

    tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('ativo');
        tabCadastro.classList.remove('ativo');
        formLogin.classList.remove('escondido');
        formCadastro.classList.add('escondido');
    });

    tabCadastro.addEventListener('click', () => {
        tabCadastro.classList.add('ativo');
        tabLogin.classList.remove('ativo');
        formCadastro.classList.remove('escondido');
        formLogin.classList.add('escondido');
    });

    // ==========================================
    // 2. LÓGICA DOS FORMULÁRIOS
    // ==========================================
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault(); 
        alert("Login efetuado com sucesso!");
        window.location.href = "index.html"; 
    });

    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault(); 
        alert("Conta básica criada! Redirecionando para completar seu perfil...");
        // No futuro, redirecionaremos para a tela de perfis
        // window.location.href = "completar-perfil.html"; 
    });
});