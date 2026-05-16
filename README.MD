# 🐾 SisPet - Plataforma de Gestão para ONGs e Causa Animal

> **Status do Projeto:** Em Desenvolvimento 🚧

## 📖 Sobre o Projeto
O **SisPet** é um ecossistema completo de gestão e adoção animal desenvolvido como um projeto pessoal independente. Idealizado inicialmente para solucionar as demandas operacionais da **DECA (Defensores da Causa Animal)**, o sistema foi arquitetado de forma escalável para que **qualquer ONG** ou instituição de proteção animal possa adotá-lo.

A plataforma atua em duas frentes: como uma ponte pública e engajadora entre animais e sociedade (adoções e doações), e como um ERP robusto para os bastidores operacionais das instituições.

## 🏗️ Arquitetura e Tecnologias
O sistema foi desenhado visando alta disponibilidade, escalabilidade e facilidade de manutenção, afastando-se do modelo monolítico tradicional:

*   **Frontend (Interface do Usuário):** Interface SPA (Single Page Application) focada em conversão. Desenvolvida aplicando conceitos avançados de UX Design e psicologia comportamental. A paleta de cores utiliza a Regra 60-30-10 para entregar um visual minimalista, reduzindo a carga cognitiva e guiando o usuário para ações de impacto (adotar/doar).
*   **Backend (Microserviços):** Construído em **Java**. O núcleo do sistema é dividido em **microserviços** independentes e desacoplados. Cada domínio de negócio roda de forma autônoma, permitindo que serviços específicos sejam escalados individualmente conforme a demanda da plataforma aumenta.

## 📂 Organização do Repositório
A estrutura reflete a arquitetura distribuída adotada para o SisPet:

*   📁 `/frontend` - Interface web e componentes visuais.
*   📁 `/microservices` - Ecossistema do backend em Java.
    *   📁 `/servico-animais` *(Gestão de perfis e prontuários)*
    *   📁 `/servico-adocao` *(Fluxo de triagem e match)*
    *   📁 `/servico-financeiro` *(Arrecadação e gestão de doações)*
    *   📁 `/servico-ongs` *(Controle de acesso e multitenancy para diferentes ONGs)*

## 🎯 Funcionalidades Principais
O escopo do projeto cobre de ponta a ponta a jornada de proteção animal:

*   **Vitrine Inteligente:** Catálogo público com perfis detalhados e filtros avançados para cães e gatos.
*   **Gestão de Saúde (Prontuário Eletrônico):** Registro completo de vacinas, vermífugos, histórico clínico, castração e medicações de cada animal.
*   **Processo de Adoção Completo:** Formulários de triagem para candidatos, aprovação de perfis e acompanhamento pós-adoção.
*   **Central de Captação e Doações:** Sistema de campanhas para arrecadação de recursos financeiros e controle de estoque de insumos (ração, remédios).
*   **Painel Administrativo Multi-ONG:** Área restrita para gestão de voluntários, controle de lares temporários (LTs) e relatórios de impacto.

## 🛠️ Tecnologias Utilizadas
**Frontend:**
- HTML5
- CSS3
- JavaScript

**Backend (Planejado):**
- Java
- Padrão de Arquitetura MVC
- PostgreSQL

## 💻 Como rodar o projeto localmente
1. Clone este repositório:
   ```bash
   git clone git@github.com:LeilaGiangiardi/SisPet.git
---
*Desenvolvido com 🧡 para fazer a diferença na causa animal, onde quer que seja.*