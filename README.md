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
