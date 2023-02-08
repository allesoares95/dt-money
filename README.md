VITE - REACT - TYPESCRIPT -

# utilização de bibliotecas e ferramentas 

```
styled-components

npm i styled-components
npm i @types/syled-components -D

phosphor-react

npm i phosphor-react


# Radix 

Dialog
npm install @radix-ui/react-dialog

Utilizando
Dialog.Trigger
Dialog.Portal
Dialog.Overlay
Dialog.Content
Dialog.Title
Dialog.Close

Radio Group
npm install @radix-ui/react-radio-group

JSON Server 
https://github.com/rocketseat-education/ignite-reactjs-03-dt-money/commit/d6085ce590508a543af916856c23d33e68019b9d

npm i json-server -D

para rodar json 
npx json-server server.json

para deixar atualizando json automatico utilizar -w no final 
npx json-server server.json -w

adicionando delay nas requisições de 500ms
npx json-server server.json -w -d 500

consultando datas no console web
new Date().toISOString()

pode alterar npm run pelo package.json
adicionando um novo scripts 
"dev:server": "json-server server.json -w -d 500"

rodar:
npm run dev:server

utilização
Reducer
dateFormatter
Criação de hooks

hook-form zod
utilização para formularios de validação e definição de schemas do formulario 
schemas: qual é o formato do objetos de dado que ira receber quando for realizado
um submit desse formulário 

npm i react-hook-form zod
npm i @hookform/resolvers 

AXIOS

npm i axios 


ESLint

npm i eslint @rocketseat/eslint-config -D
para corrigir error: eslint src --ext .tsx,.ts --fix


```

# React tools;

Evitando reenderizações desnecessarias no react;

Porque um componente renderiza?
- Hooks changed (alteração de estado, contexto, reducer);
- Props changed ( mudou propriedades);
- Parent renendered ( componente pai renderizou);

Qual o fluxo de renderização?
1. O React recria o HTML da interface daquele componente;
2. Compara a versão do HTML recriada com a versão anterior;
3. Se mudou alguma coisa, ele reescreve o HTML na tela;

Memo:
0. Hooks changed, Props changed(deep comparison);
0.1: Comparar com a versão anterior dos Hooks e Props;
0.2: Se mudou algo, ele vai permitir a nova renderização;

Memo será ultil quando tiver um HTML bem pesado para aplicações;
Para um aumento no desempenho em alguns casos, através da memoização do resultado;

Como utilizar useMemo para memorizar variaveis;
hooks-useSummary;


use-context-selector
npm i use-context-selector scheduler

Verificação de erros no typescript
npx tsc --noEmit