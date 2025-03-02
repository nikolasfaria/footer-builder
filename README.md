# Rodapé iFood - Builder para Google Tag Manager

Este projeto contém scripts para criar um rodapé personalizado do iFood e uma barra de navegação inferior para qualquer site através do Google Tag Manager.

## Arquivos do Projeto

- `rodapeBuilder.js` - Biblioteca principal que contém a classe RodapeBuilder
- `exemplo-gtm.html` - Exemplo de código para inserir no GTM
- `rodape.html` - Código original para referência

## Como Utilizar

### Opção 1: Usar o Código Diretamente no GTM

1. Abra o arquivo `exemplo-gtm.html`
2. Copie todo o conteúdo do arquivo
3. No Google Tag Manager, crie uma nova tag HTML personalizada
4. Cole o código na tag
5. Configure a tag para disparar nas páginas onde deseja que o rodapé apareça

### Opção 2: Personalizar o Rodapé

Você pode personalizar facilmente o rodapé ajustando as configurações:

```javascript
const config = {
  corPrimaria: '#EA1D2C',     // Cor principal do tema
  corTexto: '#3E3E3E',        // Cor dos textos
  corFundo: '#FFFFFF',        // Cor de fundo
  mostrarCanais: true,        // Mostrar seção de canais sociais
  mostrarLinks: true,         // Mostrar seção de links do iFood
  mostrarParceiros: true,     // Mostrar seção de parceiros
  mostrarNavegacao: true,     // Ativar ou desativar a barra de navegação inferior
  
  // Personalizar textos
  textoCopyright: '© Copyright 2023 - Minha Empresa - Todos os direitos reservados',
  textoEmpresa: 'Nome da Empresa LTDA.',
  
  // Personalizar dados da empresa
  cnpj: '00.000.000/0001-00',
  endereco: 'Rua Exemplo, 123 - São Paulo/SP'
};

// Aplicar o rodapé com as configurações personalizadas
const rodape = new RodapeBuilder(config);
rodape.aplicar();
```

## Funcionalidades

O construtor de rodapé oferece:

1. **Seções Configuráveis**:
   - Canais de redes sociais
   - Links institucionais
   - Links para parceiros
   - Barra de navegação inferior

2. **Design Responsivo**:
   - Adaptação automática para diferentes tamanhos de tela

3. **Independência de Estrutura**:
   - Funciona em qualquer site, sem depender da estrutura HTML existente

4. **Fácil Customização**:
   - Cores, textos e elementos podem ser personalizados

## Solução de Problemas

Se o rodapé não aparecer:

1. Verifique se a tag do GTM está disparando corretamente
2. Confirme se há conflitos com CSS ou JavaScript existentes
3. Verifique se o site já tem um elemento `<footer>` com estilos que possam estar causando conflitos
4. Use as ferramentas de desenvolvedor do navegador para verificar erros no console

## Compatibilidade

O código foi projetado para funcionar em navegadores modernos, incluindo:
- Chrome, Firefox, Safari, Edge
- Versões mobile e desktop 