# Design System v2

Projeto criado com o intuito de organizar a nova biblioteca de componentes, que irão conter a nova identidade visual de alguns módulos.

Esta nova versão do DS, também já está configurada com novas bibliotecas de lint e testes, para realizar a devida validação de acessibilidade dos componentes, que irá se tornar um parte fundamental da cultura de desenvolvimento da Gupy.

- [Requisitos](#requirements)
- [Instalação e Execução](#getting-started)
- [Gerenciado Tokens](#managing-tokens)
- [Criando Componentes](#creating-components)
- [Comandos Importantes](#important-commands)
- [Commit](#commit)
- [Build](#build)
- [Publicação](#publish)
- [Storybook](#storybook)

## <a name="requirements"></a>Requisitos

Para utilizar essa biblioteca o seu projeto precisa conter as seguintes dependências:

- [`react@^17.0.2`](https://www.npmjs.com/package/react)
- [`react-dom@^17.0.2`](https://www.npmjs.com/package/react-dom)
- [`styled-components@^5.3.5`](https://www.npmjs.com/package/styled-components)

## <a name="getting-started"></a>Instalação e Execução

Para rodar o projeto localmente, basta clonar e projeto e instalar:

```bash
$ git clone git@github.com:gupy-io/design-system-v2.git
$ cd design-system-v2
$ nvm use
$ npm i
$ npm run tokens
```

> É necessário logar no npm privado da Gupy para a instalação das dependências. Caso tenha alguma dúvida, siga [este artigo](https://gupy-io.atlassian.net/wiki/spaces/PROD/pages/923500613/Reposit+rio+privado+de+pacotes+NPM+da+Gupy).

Como o projeto é servido como uma biblioteca de componentes, é utilizado o [Storybook](https://storybook.js.org/) para realizar a documentação dos componentes e conseguir visualiza-los.

```bash
$ npm run storybook
```

## <a name="managing-tokens"></a>Gerenciando Tokens

Com a [Style Dictionary](https://amzn.github.io/style-dictionary), conseguimos gerenciar os tokens necessários para o projeto, de maneira fácil e simples, através de arquivos `.json`.

Os tokens estão disponíveis em `src/_services/tokens`. Após as alterações necessário, basta rodar o build dos tokens e eles já ficam disponíveis para a aplicação, em formatos `.scss` e `.js`

```bash
$ npm run tokens
```

Notar que a nomenclatura usada nos nós do `.json`, será o nome final do token.

### Utilizando os Tokens

Após os tokens serem gerados, você pode importar o arquivo de build a partir de `src/tokens/tokens.js` e utilizar nos componentes necessários:

```bash
$ import { ColorMainPrimary } from 'src/tokens/tokens.js'
```

A partir do momento que ele for importado, basta usar da seguinte maneira:

```bash
const StyledButton = styled.h1`
  backgroundColor: ColorMainPrimary
`
```

## <a name="creating-components"></a>Criando Componentes

Para realizar a criação dos componentes, utilizamos a lib [Plop](https://plopjs.com/). Com essa biblioteca, conseguimos gerar componentes, seus arquivos de testes e o arquivos para Storybook, com um único comando.

```bash
$ npm run generate
```

Ao rodar o componente, ele irá perguntar o nome do componente e já irá criar o componentes e seus arquivos correlatos.

Os templates do Plop podem ser encontrados em `src/_services/generators/templates/components`.

### Estrutura dos Componentes

A partir de agora, os componentes serão dívididos em duas pastas diferentes, seguindo os padrões do [Atomic Design](https://brasil.uxdesign.cc/atomic-design-redesenhando-os-entreg%C3%A1veis-de-designers-e-desenvolvedores-da8886c7258d):

- Atoms
- Molecules
- Organisms

Todos os componentes "simples" devem ser feitos dentro de `Atoms`. A partir do momento que um componente começa a agregar outros componentes dentro dele, consequentemente, aumentando sua complexidade, ele se torna uma `Molecule`.

## <a name="important-commands"></a>Comandos Importantes

Como sempre, existem alguns comandos básicos, mas importantes:

- `npm run test` para realizar os testes normais;
- `npm run lint` para realizar a verificação do lint;

## <a name="build"></a>Build

Para realizar o build da aplicação, basta rodar o comando de build do Rollup:

```bash
$ npm run build:rollup
```

Mas para rodar o build do Storybook, para se gerada um build separado para documentação, temos outro comando:

```bash
$ npm run build:storybook
```

### Testando build do Rollup

A partir do momento que o build do Rollup foi realizado, é possível testar o projeto em qualquer outra aplicação localmente, utilizando o [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link).

Rode o comando abaixo na raiz do DS2:

```bash
$ npm link
```

Ao finalizar, o irá ser disponilizado o link para instalação, basta copiar esse link e instalar via npm em outro projeto local. O link tende a ser o caminho do projeto do DS2, na tua máquina.

```bash
$ npm i PATH_TO_PROJECT
```

## <a name="commit"></a>Commit

Para realizar os commits do repositório, estamos seguindos os padrões definidos pelo [Conventional commit](https://www.conventionalcommits.org/en/v1.0.0/), junto com hooks do Husky, para validar não só o título dos commits, assim como testes e lint.

Mais informações sobre o processo de commit [neste artigo](https://gupy-io.atlassian.net/wiki/spaces/PROD/pages/1990328434/Conventional+commits+no+gupy-front-modules).

## <a name="publish"></a>Publicação

Para realizar o deploy do pacote, ou seja,
enviá-los ao GPM (Gupy Package Manager, equivalente ao npm interno), você deverá realizar os seguintes passos:

Pré-publicação:

- Rodar o comando `npm test` e `npm run lint` para checar integridade do projeto.
  Esses comandos serão rodados durante o build, mas para evitar surpresa sempre rode-os antes de tentar publicar.

## Publicação de versão release

- Abrir seu PR com a branch desejada
- Conseguir a aprovação de pelo menos 2 reviewers, sendo, obrigatoriamente, um approve do time Plataforma Dev.
- Fazer merge do seu PR na master
- Entrar no job: https://jenkins.tools.internal.gupy.io/job/Tools/job/design-system-v2/
- Construir o job com parâmetros:
  - Parâmetro RELEASE_TYPE:
    - Sempre que for deployar um novo módulo utilize minor.
    - Caso seja adição de novas features em um módulo utilize minor.
    - Caso seja um fix utilize patch.
  - Parâmetro RELEASE_CHANGES:
    - Adicione uma descrição das mudanças que serão publicadas.
  - Parâmetro BRANCH_NAME:
    - Coloque aqui o nome da sua branch.

## Publicação de versão pré-release

É possível fazer uma pré-publicação do pacote para ser usado antes da publicação final.
Vamos publicar uma versão a partir de uma branch para que possa ser utilizada.

Passos:

- Entrar no job: https://jenkins.tools.internal.gupy.io/job/Tools/job/design-system-v2/
- Construir o job com parâmetros:
  - Parâmetro RELEASE_TYPE:
    - Utilize as opções de prepatch ou preminor para publicar sua versão.
  - Parâmetro RELEASE_CHANGES:
    - Adicione uma descrição das mudanças que serão publicadas.
  - Parâmetro BRANCH_NAME:
    - Coloque aqui o nome da sua branch.

## <a name="storybook"></a>Publicação do Storybook

Temos dois ambientes para o Storybook, [produção](https://storybook-ds2.gupy.io/) e [staging](https://storybook-ds2.hmg.gupy.io/).

Ao realizar o push de qualquer branch, o deploy será ativado automaticamente para o ambiente de staging.

Caso necessite ativar manualmente, basta acessar a pipeline do projeto no [Jenkins](https://jenkins.tools.internal.gupy.io/job/plataforma-dev/job/storybook/), escolher a branch necessária e fazer o deploy através do botão `Build with parameters`, escolhendo o ambiente para onde será realizado o deploy.
