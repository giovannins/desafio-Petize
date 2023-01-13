# Github Explorer

Este é um aplicativo Angular que utiliza a API pública do Github para exibir informações de usuários e repositórios.
Instalação do projeto

1. Certifique-se de ter a versão mais recente do Node.js e do npm (gerenciador de pacotes) instalados em sua máquina.
2. Clone este repositório em sua máquina local.
3. Execute o comando `npm install` para instalar todas as dependências do projeto.

## Rodando o ambiente de desenvolvimento

1. Execute o comando `ng serve` para iniciar o servidor de desenvolvimento.
2. Acesse http://localhost:4200/ no seu navegador para visualizar o aplicativo.

## Build para deploy

1. Execute o comando `ng build --prod` para criar uma build de produção do aplicativo.
2. Os arquivos gerados serão armazenados na pasta `dist/`.
3. Copie esses arquivos para o servidor de produção e inicie o servidor.

## Motivação de escolha da lib TailwindCSS

Optei por utilizar o TailwindCSS como biblioteca de estilos do projeto devido a sua flexibilidade e facilidade de uso. Ele fornece uma série de classes pré-definidas que podem ser usadas para construir layouts e componentes de forma rápida e consistente. Além disso, o TailwindCSS é altamente personalizável, permitindo que você ajuste facilmente as configurações de acordo com as necessidades do seu projeto.

---

### Observação

Certifique-se de que as configurações de proxy estão corretas caso você use o proxy para acessar a API do Github. Algumas configurações adicionais podem ser necessárias para o funcionamento correto do aplicativo.
