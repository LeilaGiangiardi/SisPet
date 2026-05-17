const bancoDeAnimais = [
    { 
        nome: "Mingau", especie: "Gato", sexo: "Macho", idade: "Adulto", porte: "Pequeno", 
        pelagem: "Curta", cor: "Rajado", castrado: "Sim", comportamento: "Calmo", 
        local: "Restaurante Universitário", ong: "DECA", 
        descricao: "Carinhoso e adora um cafuné.", 
        imagem: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
    },
    { 
        nome: "Paçoca", especie: "Cachorro", sexo: "Fêmea", idade: "Filhote", porte: "Médio", 
        pelagem: "Curta", cor: "Caramelo", castrado: "Não", comportamento: "Brincalhão", 
        local: "Entrada Principal", ong: "DECA", 
        descricao: "Muito brincalhona e cheia de energia.", 
        imagem: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
    },
    { 
        nome: "Salem", especie: "Gato", sexo: "Macho", idade: "Adulto", porte: "Pequeno", 
        pelagem: "Longa", cor: "Preto", castrado: "Sim", comportamento: "Calmo", 
        local: "Bloco de Engenharia", ong: "DECA", 
        descricao: "Tranquilo, dorminhoco e super companheiro.", 
        imagem: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
    },
    { 
        nome: "Luna", especie: "Cachorro", sexo: "Fêmea", idade: "Adulto", porte: "Médio", 
        pelagem: "Média", cor: "Mesclado", castrado: "Sim", comportamento: "Calmo", 
        local: "Restaurante Universitário", ong: "DECA", 
        descricao: "Dócil e se dá muito bem com outros animais.", 
        imagem: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
    },
    { 
        nome: "Fred", especie: "Cachorro", sexo: "Macho", idade: "Filhote", porte: "Grande", 
        pelagem: "Curta", cor: "Branco", castrado: "Não", comportamento: "Tímido", 
        local: "Bloco de Engenharia", ong: "DECA", 
        descricao: "Um pouco tímido, mas extremamente leal.", 
        imagem: "https://images.unsplash.com/photo-1583511657372-78a0f913d8a5?q=80&w=400&auto=format&fit=crop" 
    }
];

// Simulando usuário logado (Mude para false para ver o banner sumir)
const usuarioEstaLogado = true; 

document.addEventListener('DOMContentLoaded', () => {
    const bannerRecomendacao = document.getElementById('banner-recomendacao');
    const resultadosContainer = document.getElementById('resultados-container');
    const formBusca = document.getElementById('form-busca');
    const btnLimpar = document.getElementById('btn-limpar');
    
    // Elementos da expansão dos filtros
    const btnToggleFiltros = document.getElementById('btn-toggle-filtros');
    const painelFiltrosAvancados = document.getElementById('filtros-avancados');

    const filtros = {
        nome: document.getElementById('busca-nome'),
        especie: document.getElementById('busca-especie'),
        sexo: document.getElementById('busca-sexo'),
        idade: document.getElementById('busca-idade'),
        porte: document.getElementById('busca-porte'),
        pelagem: document.getElementById('busca-pelagem'),
        cor: document.getElementById('busca-cor'),
        castrado: document.getElementById('busca-castrado'),
        comportamento: document.getElementById('busca-comportamento'),
        local: document.getElementById('busca-local'),
        ong: document.getElementById('busca-ong')
    };

    // LÓGICA DO BANNER DE MATCHES
    if (usuarioEstaLogado) {
        bannerRecomendacao.classList.remove('escondido');
    } else {
        bannerRecomendacao.classList.add('escondido');
    }

    // LÓGICA DE EXPANSÃO (ABRIR/FECHAR FILTROS)
    btnToggleFiltros.addEventListener('click', () => {
        painelFiltrosAvancados.classList.toggle('escondido');
        
        if (painelFiltrosAvancados.classList.contains('escondido')) {
            btnToggleFiltros.innerHTML = '<i class="fa-solid fa-sliders"></i> Filtros Avançados';
        } else {
            btnToggleFiltros.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Menos Filtros';
        }
    });

    function renderizarAnimais(lista) {
        if (lista.length === 0) {
            resultadosContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-light); padding: 40px 0;">Nenhum peludinho encontrado com esses filtros. Tente mudar algumas opções! 🐾</p>`;
            return;
        }
        resultadosContainer.innerHTML = gerarHtmlCards(lista);
    }

    function gerarHtmlCards(lista) {
        return lista.map(animal => {
            const tagSaude = animal.castrado === "Sim" ? `<span class="tag" style="background-color: #E6F4EA; color: #1E8E3E;">✓ Castrado</span>` : '';
            return `
            <div class="pet-card">
                <img src="${animal.imagem}" alt="Foto de ${animal.nome}">
                <div class="pet-info">
                    <h3>${animal.nome}</h3>
                    <span class="tag">${animal.especie} • ${animal.sexo} • ${animal.idade}</span>
                    <div style="margin-bottom: 10px;">${tagSaude}</div>
                    <p>${animal.descricao} <br><small><i class="fa-solid fa-location-dot"></i> ${animal.local}</small></p>
                    <a href="#" class="btn-outline">Conhecer</a>
                </div>
            </div>
            `;
        }).join('');
    }

    function filtrarAnimais() {
        const animaisFiltrados = bancoDeAnimais.filter(animal => {
            const bateNome = animal.nome.toLowerCase().includes(filtros.nome.value.toLowerCase());
            const bateEspecie = !filtros.especie.value || animal.especie === filtros.especie.value;
            const bateSexo = !filtros.sexo.value || animal.sexo === filtros.sexo.value;
            const bateIdade = !filtros.idade.value || animal.idade === filtros.idade.value;
            const batePorte = !filtros.porte.value || animal.porte === filtros.porte.value;
            const batePelagem = !filtros.pelagem.value || animal.pelagem === filtros.pelagem.value;
            const bateCor = !filtros.cor.value || animal.cor === filtros.cor.value;
            const bateCastrado = !filtros.castrado.value || animal.castrado === filtros.castrado.value;
            const bateComportamento = !filtros.comportamento.value || animal.comportamento === filtros.comportamento.value;
            const bateLocal = !filtros.local.value || animal.local === filtros.local.value;
            const bateOng = !filtros.ong.value || animal.ong === filtros.ong.value;

            return bateNome && bateEspecie && bateSexo && bateIdade && batePorte && 
                   batePelagem && bateCor && bateCastrado && bateComportamento && 
                   bateLocal && bateOng;
        });

        renderizarAnimais(animaisFiltrados);
    }

    Object.values(filtros).forEach(inputElement => {
        if(inputElement) {
            inputElement.addEventListener('input', filtrarAnimais);
            inputElement.addEventListener('change', filtrarAnimais);
        }
    });

    btnLimpar.addEventListener('click', () => {
        formBusca.reset();
        renderizarAnimais(bancoDeAnimais);
    });

    renderizarAnimais(bancoDeAnimais);
});