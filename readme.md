# Clean Code e Clean Architecture - Turma 7 (práticas aula 1)
## Cenário
Vamos implementar um sistema de vendas online com a possibilidade de realizar pedidos com múltiplos itens, cada um deles com uma quantidade variável, calculando o frete, os impostos, aplicando um cupom de desconto e ainda interagindo com o estoque. Além disso teremos ainda fluxos de pagamento e cancelamento do pedido realizado.

## Testes
1 - Não deve criar um pedido com cpf inválido
2 - Deve criar um pedido com 3 itens (com descrição, preço e quantidade)
3 - Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)

## Considere
Refatorar o algoritmo de validação de cpf (https://github.com/rodrigobranas/cccat7_refactoring/blob/master/src/cpf.ts)

## Sugestões
Utilize a sua linguagem e biblioteca de teste de sua preferência
Faça a modelagem da forma que desejar e não se preocupe por enquanto, vamos implementar juntos na aula seguinte com influências de DDD e Clean Architecture

## Dicas
Devem existir no mínimo 2 arquivos, um de teste e outro que implementa os cenários propostos
Tente seguir com disciplina, criando primeiro um teste que falha, depois fazendo e teste passar e refatorando

## Algoritmo de Validação do CPF
https://www.macoratti.net/alg_cpf.htm

# Configuração de ambiente
## Instalação do Node.js
Vamos começar inicializando o nosso projeto no Node.js com o comando npm init -y.
Caso você não tenha o Node.js instalado, basta entrar em https://nodejs.org, baixar e instalar a versão LTS. Pode ser interessante utilizar algum gerenciador de versões como o nvm, para mais informações acesse https://github.com/nvm-sh/nvm.
Eu sempre recomendo que você utilize a última versão estável, estou utilizando a versão 16. Fique atento caso esteja utilizando uma versão muito antiga.

## Inicialização do Projeto
Após inicializar o projeto, o arquivo package.json será criado. Lá vão ficar as dependências e também os scripts de execução tanto do TypeScript quanto dos testes.

## Instalação e Inicialização do TypeScript
Instale o TypeScript utilizando o comando abaixo, aproveitando para instalar outras dependências:
```yarn add typescript jest @types/jest ts-node ts-jest```

## Você também pode utilizar o npm
```npm install typescript jest @types/jest ts-node ts-jest```

## Depois disso, crie o arquivo tsconfig.json:
```npx tsc --init```
Com isso, o arquivo tsconfig.js deve ter sido criado e estamos prontos para começar.
## Configuração do Jest
Configure o Jest utilizando o comando abaixo:
```npx ts-jest config:init```

## Configuração do TypeScript
O TypeScript tem um compilador que faz a conversão do código para JavaScript. Por conta disso, precisamos definir alguns poucos parâmetros:
```
tsconfig.json
{
    "compilerOptions": {
    "incremental": true,
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
    },
    "include": [
        "src",
        "test"
    ]
}
```
## Testando se tudo deu certo
Crie pastas chamadas src e test. Dentro delas crie os códigos fonte e testes.
```npx jest

