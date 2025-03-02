/**
 * RodapeBuilder - Construtor de rodapé para Google Tag Manager
 * Este script cria um rodapé personalizado que pode ser injetado em qualquer plataforma
 */
class RodapeBuilder {
  constructor(config = {}) {
    // Configurações padrão
    this.config = {
      // Cores
      corPrimaria: '#EA1D2C',
      corTexto: '#3E3E3E',
      corFundo: '#FFFFFF',
      
      // Textos
      textoCopyright: '© Copyright ' + new Date().getFullYear() + ' - iFood - Todos os direitos reservados',
      textoEmpresa: 'iFood com Agência de Restaurantes Online S.A.',
      
      // Dados da empresa
      cnpj: '14.380.200/0001-21',
      endereco: 'Avenida dos Autonomistas, nº 1496, Vila Yara, Osasco/SP - CEP 06.020-902',
      
      // Visibilidade das seções
      mostrarCanais: true,
      mostrarLinks: true,
      mostrarParceiros: true,
      mostrarNavegacao: false,
      
      // Sobrescrever configurações com as fornecidas
      ...config
    };
    
    // Armazenar referências aos elementos criados
    this.elementos = {
      containerRodape: null,
      navegacaoInferior: null
    };
  }
  
  /**
   * Cria o HTML do rodapé
   */
  criarRodape() {
    // Criar o container principal
    const containerRodape = document.createElement('div');
    containerRodape.id = 'ifood-rodape-container';
    containerRodape.style.cssText = `
      background-color: ${this.config.corFundo};
      width: 100%;
      margin: 0;
      padding: 20px 0;
      font-family: Inter, sans-serif;
      color: ${this.config.corTexto};
      margin-bottom: ${this.config.mostrarNavegacao ? '85px' : '0'};
    `;
    
    // Criar a estrutura principal do rodapé
    const conteudoRodape = document.createElement('div');
    conteudoRodape.className = 'ifood-rodape-conteudo';
    conteudoRodape.style.cssText = `
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    `;
    
    // Criar a linha do conteúdo principal
    const linhaConteudo = document.createElement('div');
    linhaConteudo.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 20px;
    `;
    
    // Adicionar as colunas ao conteúdo
    if (this.config.mostrarCanais) {
      linhaConteudo.appendChild(this.criarSecaoCanais());
    }
    
    if (this.config.mostrarLinks) {
      linhaConteudo.appendChild(this.criarSecaoLinks());
    }
    
    if (this.config.mostrarParceiros) {
      linhaConteudo.appendChild(this.criarSecaoParceiros());
    }
    
    // Criar a linha do rodapé
    const linhaCopyright = document.createElement('div');
    linhaCopyright.style.cssText = `
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #eee;
      margin-top: 20px;
    `;
    
    // Adicionar texto de copyright
    const textoCopyright = document.createElement('p');
    textoCopyright.innerHTML = `${this.config.textoCopyright}<br>${this.config.textoEmpresa}`;
    textoCopyright.style.cssText = `
      font-size: 12px;
      margin: 0;
    `;
    
    linhaCopyright.appendChild(textoCopyright);
    
    // Montar a estrutura do rodapé
    conteudoRodape.appendChild(linhaConteudo);
    conteudoRodape.appendChild(linhaCopyright);
    containerRodape.appendChild(conteudoRodape);
    
    // Armazenar referência
    this.elementos.containerRodape = containerRodape;
    
    // Criar barra de navegação inferior se habilitada
    if (this.config.mostrarNavegacao) {
      this.criarNavegacaoInferior();
    }
    
    return this;
  }
  
  /**
   * Cria a seção de canais sociais
   */
  criarSecaoCanais() {
    const coluna = document.createElement('div');
    coluna.className = 'ifood-rodape-coluna';
    coluna.style.cssText = `
      flex: 1;
      min-width: 250px;
      margin-bottom: 20px;
    `;
    
    const titulo = document.createElement('h3');
    titulo.innerText = 'Canais';
    titulo.style.cssText = `
      color: ${this.config.corPrimaria};
      font-size: 15px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 15px;
    `;
    
    const redesSociais = [
      { icon: 'fab fa-instagram', link: 'https://www.instagram.com/ifoodparaparceiros/' },
      { icon: 'fab fa-youtube', link: 'https://www.youtube.com/@ifoodparaparceiros' },
      { icon: 'fab fa-telegram', link: 'https://t.me/+bCOtiVFDvs4yNDIx' },
      { icon: 'fab fa-twitter', link: 'https://twitter.com/ifood' },
      { icon: 'fab fa-facebook', link: 'https://www.facebook.com/iFood/' }
    ];
    
    coluna.appendChild(titulo);
    
    const icones = document.createElement('div');
    icones.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 15px;
    `;
    
    redesSociais.forEach(rede => {
      const link = document.createElement('a');
      link.href = rede.link;
      link.target = '_blank';
      link.style.cssText = `
        margin-right: 10px;
        margin-bottom: 10px;
        text-decoration: none;
      `;
      
      const icon = document.createElement('i');
      icon.className = `${rede.icon} fa-2x`;
      icon.style.cssText = `
        color: ${this.config.corPrimaria};
      `;
      
      link.appendChild(icon);
      icones.appendChild(link);
    });
    
    coluna.appendChild(icones);
    
    // Endereço
    const endereco = document.createElement('p');
    endereco.innerHTML = `CNPJ ${this.config.cnpj}<br>${this.config.endereco}`;
    endereco.style.cssText = `
      font-size: 12px;
      margin-top: 10px;
    `;
    
    coluna.appendChild(endereco);
    
    return coluna;
  }
  
  /**
   * Cria a seção de links do iFood
   */
  criarSecaoLinks() {
    const coluna = document.createElement('div');
    coluna.className = 'ifood-rodape-coluna';
    coluna.style.cssText = `
      flex: 1;
      min-width: 250px;
      margin-bottom: 20px;
    `;
    
    const titulo = document.createElement('h3');
    titulo.innerText = 'iFood';
    titulo.style.cssText = `
      color: ${this.config.corPrimaria};
      font-size: 15px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 15px;
    `;
    
    const links = [
      { texto: 'Site Institucional iFood', url: 'https://institucional.ifood.com.br/?utm_source=site_ifood' },
      { texto: 'Compromissos iFood', url: 'https://institucional.ifood.com.br/nossos-compromissos/' },
      { texto: 'Ajuda/FAQ', url: 'https://intercom.help/decola-ifood/pt-BR' }
    ];
    
    coluna.appendChild(titulo);
    
    links.forEach(item => {
      const p = document.createElement('p');
      p.style.marginBottom = '10px';
      
      const a = document.createElement('a');
      a.href = item.url;
      a.innerText = item.texto;
      a.target = '_blank';
      a.style.cssText = `
        text-decoration: none;
        color: ${this.config.corTexto};
      `;
      
      p.appendChild(a);
      coluna.appendChild(p);
    });
    
    return coluna;
  }
  
  /**
   * Cria a seção de parceiros
   */
  criarSecaoParceiros() {
    const coluna = document.createElement('div');
    coluna.className = 'ifood-rodape-coluna';
    coluna.style.cssText = `
      flex: 1;
      min-width: 250px;
      margin-bottom: 20px;
    `;
    
    const titulo = document.createElement('h3');
    titulo.innerText = 'Parceiros e Parceiras';
    titulo.style.cssText = `
      color: ${this.config.corPrimaria};
      font-size: 15px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 15px;
    `;
    
    const links = [
      { texto: 'Cadastre seu negócio no iFood', url: 'https://parceiros.ifood.com.br/' },
      { texto: 'Portal do Entregador', url: 'https://entregador.ifood.com.br/' },
      { texto: 'Blog para Parceiros', url: 'https://blog-parceiros.ifood.com.br/' }
    ];
    
    coluna.appendChild(titulo);
    
    links.forEach(item => {
      const p = document.createElement('p');
      p.style.marginBottom = '10px';
      
      const a = document.createElement('a');
      a.href = item.url;
      a.innerText = item.texto;
      a.target = '_blank';
      a.style.cssText = `
        text-decoration: none;
        color: ${this.config.corTexto};
      `;
      
      p.appendChild(a);
      coluna.appendChild(p);
    });
    
    return coluna;
  }
  
  /**
   * Cria a barra de navegação inferior
   */
  criarNavegacaoInferior() {
    const navegacao = document.createElement('div');
    navegacao.id = 'ifood-navegacao-inferior';
    navegacao.style.cssText = `
      width: 100%;
      height: 80px;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 1000;
      background-color: ${this.config.corFundo};
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    `;
    
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      max-width: 600px;
      margin: 0 auto;
    `;
    
    const botoes = [
      { id: 'inicio', icone: 'fas fa-home', texto: 'Início', url: 'https://decolarestaurantes.com.br/decola-restaurante/catalogo?institution=decola-restaurante' },
      { id: 'sobre', icone: 'fas fa-fire', texto: 'Sobre o iFood Decola', url: 'https://decolarestaurantes.com.br/play/video/23156849/detalhe?institution=decola-restaurante' },
      { id: 'videos', icone: 'fas fa-play-circle', texto: 'Vídeos', url: 'https://decolarestaurantes.com.br/decola-restaurante/catalogo/busca?institution=decola-restaurante&filtro=5&acao=busca' },
      { id: 'favoritos', icone: 'fas fa-heart', texto: 'Favoritos', url: 'https://decolarestaurantes.com.br/play/meuscursos/favoritos?institution=decola-restaurante&school=decola-restaurante' },
      { id: 'certificados', icone: 'fas fa-certificate', texto: 'Certificados', url: 'https://decolarestaurantes.com.br/play/meuscertificados/lista?institution=decola-restaurante&school=decola-restaurante' }
    ];
    
    botoes.forEach(botao => {
      const item = document.createElement('a');
      item.href = botao.url;
      item.id = `ifood-nav-${botao.id}`;
      item.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #71797C;
        font-size: 12px;
      `;
      
      const icone = document.createElement('i');
      icone.className = `${botao.icone} fa-2x`;
      icone.style.marginBottom = '5px';
      
      const texto = document.createElement('span');
      texto.innerText = botao.texto;
      
      item.appendChild(icone);
      item.appendChild(texto);
      container.appendChild(item);
    });
    
    navegacao.appendChild(container);
    
    // Armazenar referência
    this.elementos.navegacaoInferior = navegacao;
    
    return navegacao;
  }
  
  /**
   * Aplica o rodapé ao documento
   */
  aplicar() {
    // Verificar se já criamos o rodapé
    if (!this.elementos.containerRodape) {
      this.criarRodape();
    }
    
    // Remover rodapé existente se necessário
    const rodapeExistente = document.querySelector('footer');
    if (rodapeExistente) {
      rodapeExistente.innerHTML = '';
      rodapeExistente.style.padding = '0';
      rodapeExistente.appendChild(this.elementos.containerRodape);
    } else {
      // Criar novo rodapé caso não exista
      const novoRodape = document.createElement('footer');
      novoRodape.appendChild(this.elementos.containerRodape);
      document.body.appendChild(novoRodape);
    }
    
    // Adicionar navegação inferior se existir
    if (this.elementos.navegacaoInferior) {
      document.body.appendChild(this.elementos.navegacaoInferior);
    }
    
    // Verificar se o Font Awesome está carregado, caso contrário, adicionar
    if (!document.querySelector('link[href*="fontawesome"]')) {
      const fontAwesome = document.createElement('link');
      fontAwesome.rel = 'stylesheet';
      fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
      document.head.appendChild(fontAwesome);
    }
    
    return this;
  }
  
  /**
   * Retorna o código HTML do rodapé como string
   */
  gerarHTMLString() {
    if (!this.elementos.containerRodape) {
      this.criarRodape();
    }
    
    // Criar um container temporário
    const temp = document.createElement('div');
    
    // Adicionar Font Awesome
    const fontAwesomeHTML = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">';
    
    // Clonar elementos
    const rodapeClone = this.elementos.containerRodape.cloneNode(true);
    temp.appendChild(rodapeClone);
    
    // Adicionar navegação se existir
    if (this.elementos.navegacaoInferior) {
      const navClone = this.elementos.navegacaoInferior.cloneNode(true);
      temp.appendChild(navClone);
    }
    
    // Gerar script de aplicação
    const scriptHTML = `
<script>
// Verificar se o jQuery está disponível
if (typeof jQuery === 'undefined') {
  // Carregar jQuery se não estiver disponível
  const script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  script.onload = aplicarRodape;
  document.head.appendChild(script);
} else {
  // Aplicar imediatamente se jQuery já estiver carregado
  aplicarRodape();
}

function aplicarRodape() {
  $(document).ready(function() {
    // Conteúdo HTML do rodapé
    const conteudoRodape = \`${temp.innerHTML}\`;
    
    // Aplicar ao rodapé existente ou criar novo
    const rodapeExistente = $('footer');
    if (rodapeExistente.length > 0) {
      rodapeExistente.html('').css('padding', '0').append(conteudoRodape);
    } else {
      $('body').append('<footer>' + conteudoRodape + '</footer>');
    }
  });
}
</script>
`;
    
    return fontAwesomeHTML + scriptHTML;
  }
}

// Exportar para uso global se estiver em um ambiente de navegador
if (typeof window !== 'undefined') {
  window.RodapeBuilder = RodapeBuilder;
}

// Exportar como módulo se estiver em um ambiente Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RodapeBuilder;
} 