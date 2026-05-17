document.addEventListener('DOMContentLoaded', () => {
    
    // Pool de Animais para o Sorteio Aleatório
    const bancoDeAnimais = [
        {
            nome: "Mingau",
            tag: "Gato • Filhote",
            img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=500&auto=format&fit=crop",
            desc: "Super carinhoso, dócil e adora brincar com novelos de lã. Já está vermifugado."
        },
        {
            nome: "Pipoca",
            tag: "Cão • Adulto",
            img: "https://images.unsplash.com/photo-1537151608804-ea6f11cc50eb?q=80&w=500&auto=format&fit=crop",
            desc: "Muito enérgico, companheiro e excelente para quem tem quintal grande. Vacinado!"
        },
        {
            nome: "Luna",
            tag: "Gato • Adulto",
            img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=500&auto=format&fit=crop",
            desc: "Calma, independente e adora tirar sonecas ao sol. Perfeita para apartamento."
        },
        {
            nome: "Mel",
            tag: "Cão • Filhote",
            img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=500&auto=format&fit=crop",
            desc: "Brincalhona, adora crianças e está aprendendo os primeiros comandos. Muito dócil e dócil."
        },
        {
            nome: "Simba",
            tag: "Gato • Jovem",
            img: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=500&auto=format&fit=crop",
            desc: "Muito curioso, sociável e adora ficar perto das pessoas nos blocos de aula. Já castrado!"
        },
        {
            nome: "Thor",
            tag: "Cão • Jovem",
            img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500&auto=format&fit=crop",
            desc: "Porte médio, muito protetor, companheiro e ideal para quem ama fazer caminhadas pelo campus."
        }
    ];

    // Pool de Notícias/Matérias para o Sorteio Aleatório
    const bancoDeNoticias = [
        {
            titulo: "Manejo de animais comunitários em um campus universitário",
            tag: "Artigo Técnico",
            icon: "fa-book-open",
            desc: "Entenda as diretrizes, a importância do controle populacional e como a convivência harmoniosa protege a saúde de todos na comunidade acadêmica."
        },
        {
            titulo: "Guia de adaptação: Primeiros dias do pet adotado em casa",
            tag: "Dicas de Guarda Responsável",
            icon: "fa-graduation-cap",
            desc: "Preparou o ambiente? Veja dicas essenciais de veterinários sobre alimentação, rotina e como lidar com a ansiedade nos primeiros dias do animal."
        },
        {
            titulo: "A importância da vacinação anual de cães e gatos",
            tag: "Saúde Animal",
            icon: "fa-heart-pulse",
            desc: "Vacinou seu pet este ano? Descubra quais são as vacinas essenciais e como elas previnem surtos de doenças graves no campus e na comunidade."
        },
        {
            titulo: "Como identificar maus-tratos e fazer uma denúncia segura",
            tag: "Conscientização",
            icon: "fa-shield-dog",
            desc: "Conheça os sinais de negligência e abuso contra animais e saiba quais canais oficiais e protetores locais acionar para garantir o resgate."
        }
    ];

    // Algoritmo matemático profissional para embaralhar listas (Fisher-Yates)
    function embaralharLista(lista) {
        let tamanhoAtual = lista.length;
        while (tamanhoAtual > 0) {
            let indiceAleatorio = Math.floor(Math.random() * tamanhoAtual--);
            let temporario = lista[tamanhoAtual];
            lista[tamanhoAtual] = lista[indiceAleatorio];
            lista[indiceAleatorio] = temporario;
        }
        return lista;
    }

    // 1. CONFIGURAÇÃO DINÂMICA DA VITRINE DE ANIMAIS
    const vitrineGrid = document.querySelector('.vitrine-grid');
    if (vitrineGrid) {
        // Embaralha a cópia do banco e retira os 3 primeiros elementos sorteados
        const animaisSorteados = embaralharLista([...bancoDeAnimais]).slice(0, 3);
        
        // Limpa os cards fixos antigos e injeta os novos sorteados na tela
        vitrineGrid.innerHTML = '';
        animaisSorteados.forEach(pet => {
            vitrineGrid.innerHTML += `
                <div class="pet-card">
                    <img src="${pet.img}" alt="${pet.nome}">
                    <div class="pet-info">
                        <span class="tag">${pet.tag}</span>
                        <h3>${pet.nome}</h3>
                        <p>${pet.desc}</p>
                        <a href="#" class="btn-outline">Ver Detalhes</a>
                    </div>
                </div>
            `;
        });
    }

    // 2. CONFIGURAÇÃO DINÂMICA DA SEÇÃO DE NOTÍCIAS
    const noticiasGrid = document.querySelector('.noticias-grid');
    if (noticiasGrid) {
        // Embaralha a cópia do banco e retira os 2 primeiros artigos sorteados
        const noticiasSorteadas = embaralharLista([...bancoDeNoticias]).slice(0, 2);
        
        // Limpa as notícias fixas e renderiza as sorteadas
        noticiasGrid.innerHTML = '';
        noticiasSorteadas.forEach(noticia => {
            noticiasGrid.innerHTML += `
                <div class="noticia-item">
                    <div class="noticia-icon"><i class="fa-solid ${noticia.icon}"></i></div>
                    <div class="noticia-content">
                        <span class="noticia-tag">${noticia.tag}</span>
                        <h4>${noticia.titulo}</h4>
                        <p>${noticia.desc}</p>
                        <a href="#" class="noticia-link">Ler matéria completa <i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            `;
        });
    }
});