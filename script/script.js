
// espera o DOM carregar completamente para adicionar as funções JS
document.addEventListener("DOMContentLoaded", function () {

    // instanciando meus projetos
    const projetos = [
        { //calculadora js
            titulo: 'Calculadora em JavaScript',
            intro: 'Calculadora totalmente funcional feita usando HTML/CSS/JAVASCRIPT',
            img: 'assets/calculadora.png',
            corpo: 'Este calculadora web foi desenvolvida utilizando HTML, CSS e JavaScript e adicionada na internet, dentro do meu domínio. A calculadora permite realizar operações básicas, como adição, subtração, multiplicação e divisão, utilizando números inteiros e não-inteiros (tipo double).',
            creditos: 'CRÉDITOS: Tiago da Cunha Roglio'
        },

        { //site de noticias
            titulo: 'Projeto Stella',
            intro: 'Projeto de freelance realizado em março de 2024.',
            img: 'assets/projetoStella.png',
            corpo: 'Evento promocional criado para empresa de iluminação "Stella", onde foi criado um site em HTML, CSS e JS que rodou em um totem, dentro da loja desta empresa. O site dispunha de 20 leds clicáveis, onde era identificado a posição do clique do usuário, realizado um sorteio e em seguida revelava se o usuário ganhou 50 ou 100 reais.',
            creditos: 'CRÉDITOS: Tiago da Cunha Roglio'
        },

        { //projeto stella
            titulo: 'Site de Notícias',
            intro: 'Site de notícias criado na matéria de Introdução ao Desenvolvimento WEB',
            img: 'assets/site-noticias.png',
            corpo: 'Esta é a visualização do site, que pode ser vista ao acessá-lo. Foi criado como parte de um projeto de estudo e aprimoramento das habilidades em HTML e CSS durante a aula de Introdução ao desenvolvimento web. Como era uma matéria introdutória, meu conhecimento em desenvolvimento web ainda estava em estágio inicial. Vale ressaltar que este site não foi desenvolvido com um design responsivo.',
            creditos: 'CRÉDITOS: Tiago da Cunha Roglio'
        }
    ];

    // instanciando o local onde os botões serão colocados e a seção onde o conteúdo é introduzido
    const barraBotoes = document.getElementById('barra-projetos');
    const aparecerProjetos = document.getElementById('aparecerProjetos');

    // instanciando os conteúdos
    const titulo = document.getElementById('tituloProjeto')
    const intro = document.getElementById('introProjeto')
    const img = document.getElementById('imgProjeto')
    const corpo = document.getElementById('corpoProjeto')
    const creditos = document.getElementById('creditosProjeto')

    // para cada item dentro do meu array "projetos", cria um escutador de eventos que preenche o conteúdo destes elementos html e altera o display da seção de "none" (não-visível) para "block" (visível)
    projetos.forEach((projeto) => {
        const botao = document.createElement('button');
        botao.textContent = projeto.titulo;
        botao.id = 'botao';

        botao.addEventListener('click', function () {
            titulo.textContent = projeto.titulo;
            intro.textContent = projeto.intro;
            img.setAttribute('src', projeto.img);
            corpo.textContent = projeto.corpo;
            creditos.textContent = projeto.creditos;

            aparecerProjetos.style.display = 'block';
        });

        barraBotoes.appendChild(botao);
    });

    // fechar a seção se o click for em qualquer lugar que não seja um botão
    window.onclick = function (event) {
        if (!event.target.matches('button')) {
            aparecerProjetos.style.display = "none";
        }
    };
});