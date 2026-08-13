# Input File

## Contexto

- **Categoria:** Entrada de dados
- **Objetivo:** Permitir o envio de arquivos pelo usuário em formulários.
- **Quando usar:** Upload de documentos, imagens, vídeos ou outros arquivos necessários para uma funcionalidade.
- **Quando evitar:** Quando não houver necessidade de anexar ou enviar arquivos.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Input Text e Button.

---

## Visão geral

O Input File é um campo utilizado para upload de arquivos, permitindo que o usuário selecione documentos, imagens, vídeos ou outros tipos de arquivo a partir do dispositivo.

O componente está disponível em diferentes variações, que oferecem experiências distintas, mas compartilham a mesma funcionalidade base.

Ele é indicado para formulários que exigem anexos.

---

## Comportamento

- Exibe um controle para seleção de arquivos.
- Após a seleção, apresenta o nome do arquivo e a opção de limpar ou remover.
- Pode permitir a seleção de um ou múltiplos arquivos.
- Pode apresentar feedback visual sobre o arquivo selecionado.
- Em caso de erro, apresenta uma mensagem de validação associada ao campo.

---

## Boas práticas

- Indique claramente os tipos de arquivo aceitos, como `.pdf`, `.jpg` e `.png`.
- Use mensagens auxiliares para orientar o usuário sobre tamanho máximo permitido ou formato suportado.
- Para múltiplos arquivos, deixe explícito se o usuário pode selecionar mais de um item de uma vez.
- Exiba feedback após a seleção, como nome do arquivo, miniatura ou tamanho.
- Evite sobrecarregar o usuário com muitos requisitos técnicos sem explicação.

---

## Acessibilidade

- Associe o campo a um label descritivo.
- Forneça instruções claras e concisas sobre os tipos de arquivos aceitos.
- Garanta suporte total para navegação por teclado e leitores de tela.
- Utilize `aria-describedby` para mensagens auxiliares e de erro quando aplicável.
- Garanta que estados de erro não dependam apenas de diferenciação por cor.

---

## Modo de uso

### Arquivo único

Utilizado quando o usuário deve selecionar apenas um arquivo.

### Múltiplos arquivos

Utilizado quando o usuário pode selecionar mais de um arquivo no mesmo campo.

### Arquivo selecionado

Após a seleção, apresente o arquivo anexado e permita que o usuário o remova ou substitua.

### Estado de erro

Utilizado quando o arquivo não atende aos requisitos definidos, como formato ou tamanho. A mensagem de validação deve explicar o problema de forma clara.

### Variação nativa

Utiliza o controle padrão de seleção de arquivos do navegador.

### Variação customizada

Utiliza uma interface personalizada para a ação de seleção do arquivo.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| Type | `native (html)`, `Custom`, `multiple` | Define a variação de seleção de arquivos. |
| Behavior | `default`, `select file`, `selected file` | Define o comportamento ou estado relacionado à seleção do arquivo. |
| State | `default`, `success`, `error` | Define o estado visual do componente. |
| Show support text | `true`, `false` | Define se o texto auxiliar ou de validação é apresentado. |