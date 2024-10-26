# Instruções de Funcionamento do Código

O código roda da seguinte forma: Primeiramente, abra-o com o Live Server ou entre na página através do link do `index`. Como o principal objetivo era a API, somente o botão "Dados do Adotante" está em sua plena funcionalidade. Para que as informações fornecidas pela API apareçam, basta clicar no botão "Dados do Adotante" que o JSONPlaceholder irá buscar os dados e exibi-los na página.

## Raciocínio Lógico

Ao discutirmos o que realizar para o CP, decidimos utilizar um código que já havíamos feito em um checkpoint antigo da professora, assim tornando o processo mais rápido. Para aplicar a API no código, criamos um botão para mostrar os dados da pessoa que irá adotar o bichinho, já que não é possível alterar as informações fornecidas pela API.

No código JavaScript, utilizamos o aprendizado das aulas anteriores para chamar as informações da API. Criamos constantes que seriam utilizadas ao longo do código. Para exibir as informações ao clicar no botão, adicionamos um `eventListener` de click que executa o `fetch`, chamando o `response` e o `data`. Para exibir os dados no HTML, utilizamos `innerHTML` em uma `div` específica, para que as informações não apareçam no próprio botão.

## Realização de Cada Integrante

**Ana Clara Morante**
- Criou o repositório no GitHub e compartilhou o arquivo base com os integrantes;
- Criou o HTML do botão de interação;
- Removeu o código JavaScript antigo do arquivo base.

**Nicolas Freire**
- Fez correções adicionais no arquivo HTML;
- Contribuiu no código JavaScript, especificamente na manipulação do DOM, criação das constantes necessárias e função async para o `responseHolder`;
- Criou o arquivo e o conteúdo do README.

**Yasmin Khang**
- Implementou o `EventListener` de click com a função de `fetch` para buscar os dados da API ao clicar no botão;
- Criou uma função `data` com `innerHTML` para exibir os dados na página.

## Descrição do Código

O arquivo HTML exibe uma página com funcionalidades necessárias para o processo de adoção de um bichinho. No HTML, há imagens de dois animais que podem ser escolhidos, e uma área para nomeá-los. Para o checkpoint, adicionamos um botão "Dados do Adotante" para exibir as informações fornecidas pelo JSONPlaceholder.

No arquivo JavaScript, focamos na execução do código proposto para o checkpoint. Todo o código é manipulado dentro do DOM. Em seguida, criamos as constantes necessárias para as funções do código. Desenvolvemos uma função `async` para o `response`, com um `await` para lidar com possíveis erros de leitura. 

Adicionamos um `eventListener` de click para exibir as informações ao clicar no botão. Assim, ao clicar no botão, a função executa um `fetch` chamando o URL e as informações de `posts` e `get`, executando o `response` e, por fim, chamando o `data` para exibir o conteúdo na página usando `innerHTML`.