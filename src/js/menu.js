// =====================================AQUI ESTÃO OS SCRIPTS DO APERECIMENTO DOS MENUS=====================
// let btnMenu = document.getElementById('btn-menu')
// let menu = document.getElementById('menu-mobile')
// let overlay = document.getElementById('overlay-menu')

// btnMenu.addEventListener('click', ()=>{
//     menu.classList.add('abrir-menu')
// })

// menu.addEventListener('click', ()=>{
//     menu.classList.remove('abrir-menu')
// })

// overlay.addEventListener('click', ()=>{
//     menu.classList.remove('abrir-menu')
// })
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnFechar = document.querySelector('.btn-fechar');

// Função para abrir o menu
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

// Função para fechar o menu ao clicar no botão 'X'
btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Função para fechar o menu ao clicar fora dele (na opacidade de fundo)
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// =====================================AQUI ESTÃO OS SCRIPTS DO APERECIMENTO DAS DIVS=====================
/*Seleciona todos os elementos com a classe .section-hidden*/
const hiddenSections = document.querySelectorAll('.section-hidden');

// Funcão de callback que será executada quando o elemento observado cruzar a linha de visibilidade

const observerCallback = (entries,observer) =>{
  entries.forEach(entry => {
    //Se o elemen estiver cruzando alinha(visível na tela)
    if(entry.isIntersecting){
      
    //Adicionar a classe 'section-vivsible' para aplicar animação
    entry.target.classList.add('section-visible');

    // Opicional para , que a nima ção ocorra um só vez e o Intersection Oberserver pare de observar o ele mento.
     observer.observe(entry.target);
    }

  });

};

//Opções para o Intersection Observer
  const observerOptions = {
      root : null , //usa a viewport como contâiner de observação
      rootMargin : '0px', //Nenhuma margin estra
      threshold : 0.2 // dispara quando 20% do elemto está visível
};

// Cria observador
   const observer = new IntersectionObserver(observerCallback,observerOptions);

//Observa cada uma das sections ocultas
  hiddenSections.forEach(section =>{
    observer.observe(section);
  });

  // ========AQUI ESTÃO OS SCRIPTS DO APERECIMENTO ÚNICO DAS DIV'S QUANDO CLICADAS NA PÁGINA INDEX.HTML=======

  document.addEventListener('DOMContentLoaded', (event) => {
     
    // Obtendo o  parametro 'id' da URL (?id=item1) 
    const urlParams = new URLSearchParams(window.location.search);
    const idDoItemClicado = urlParams.get('id');

    // Ocultar as divs destino por padrão
   
     const todasAsDivs = document.querySelectorAll('.filha-destino');
     todasAsDivs.forEach(div =>{
      div.style.display ='none'; 
     })
  
     // Se um ID válido for encontrado na URL mostra panes ele

     if(idDoItemClicado) {

       const divParaMostrar = document.getElementById(idDoItemClicado);
       if(divParaMostrar){
        divParaMostrar.style.display = 'block'; // ou flex ou grid;
       }
     }

     
});

/* ========AQUI ESTÃO OS SCRIPTS DO APERECIMENTO ÚNICO DAS DIV'S QUANDO CLICADAS NA ABA PROCESSOS NO 
TRABALHOS.HTML======= */

window.onload = function () {
  // OBTER PARAMETROS DE CONSULTA DA URL NA PÁGINA DE ORIGEM
  const urlParams = new URLSearchParams(window.location.search);

  //OBTER O VALOR DO PARÂMETRO 'ID_DESTINO NA PÁGINA DE DESTINO'

  const destinoId = urlParams.get(id);

  if(destinoId){
    // ENCONTRAR O ELEMENTO COM O ID CORRESPONDENTE
    const elementoDestino = document.getElementById(destinoId);

    if(elementoDestino){
      //ROLAR SUAVEMENTE ATÉ O ELEMENTO
      elementoDestino.scrollIntoView({behavior: 'smooth'});
    }

  }
}

/*AQUI ESTÃO OS ESCRIPTS DA CAPTURA DOS DADOS DO CLIENTE E ENVIANDO MENSAGEM AO WHATSAPP*/


// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('form-whatsapp');

  form.addEventListener('submit', function(e) {
      // Previne o envio padrão do formulário (que tentaria usar o mailto:)
      e.preventDefault();

      // Captura os valores dos campos
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const celular = document.getElementById('celular').value;
      const mensagem = document.getElementById('mensagem').value;

      // Número de telefone para onde a mensagem será enviada (incluindo DDI, ex: 55 para Brasil)
      // Substitua '5541999999999' pelo seu número completo em formato internacional, sem sinais ou espaços.
      const numeroTelefone = '5521967604609'; 

      // Cria a mensagem formatada
      const mensagemFormatada = `
Olá! Gostaria de mais informações.

*Nome:* ${nome}
*E-mail:* ${email}
*Celular:* ${celular}

*Mensagem:*
${mensagem}
      `.trim(); // Remove espaços em branco extras no início/fim

      // Codifica a mensagem para ser usada em uma URL
      const mensagemCodificada = encodeURIComponent(mensagemFormatada);

      // Constrói a URL da API do WhatsApp
      const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagemCodificada}`;

      // Redireciona o usuário para o link do WhatsApp
      window.open(urlWhatsApp, '_blank');
  });
});

