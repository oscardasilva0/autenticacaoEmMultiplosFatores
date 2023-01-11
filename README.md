
# Autenticação simples

Um projeto tem como ideia configurar e relatar detalhadamente os passos  para criação de um api de autenticação utilizando laravel

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

O sistema foi testado no linux Ubuntu, mais pode em outras plataformas com os devidos ajustes.
```
PHP: ^8;
Composer: ^2.2.6;
Docker: >= ^17.12;
```

### 🔧 Instalação

Criação do diretorio:

```
mkdir auth;## criação da pasta do projeto
cd auth; ## navegação para dentro da pasta
git init; ## iniciando projeto git
git remote add origin urlrepostiorio; ## adicionando repositorio online
```

Criação laradock:
```
git clone https://github.com/laradock/laradock.git; ## clona o repositorio laradock
cp ./laradock/.env.example ./laradock/.env  ##  copia arquivo de configuração 
```

Configurações laradock:
abra o arquivo:
```
code  ./laradock/.env ## abre o arquivo no vscode
```

e substitua os valores abaixo

```
servidor http
### NGINX #################################################

NGINX_HOST_HTTP_PORT=9988 ## porta de saida do servidor, escolha a que estiver dispotinel 
NGINX_HOST_HTTPS_PORT=443
NGINX_HOST_LOG_PATH=./logs/nginx/
NGINX_SITES_PATH=./nginx/sites/
NGINX_PHP_UPSTREAM_CONTAINER=php-fpm
NGINX_PHP_UPSTREAM_PORT=9000
NGINX_SSL_PATH=./nginx/ssl/
```

```
bando de dados
### MYSQL #################################################
#### a rede criado neste container do banco de dados se chama "mysql"

MYSQL_VERSION=latest        ##versao do banco
MYSQL_DATABASE=auth         ##banco que sera criado automaticamente potendo ser trocado
MYSQL_USER=root             ## usuario de acesso
MYSQL_PASSWORD=root         ## senha de acesso
MYSQL_PORT=9906             ##  porta de acesso externo/localhost
MYSQL_ROOT_PASSWORD=root    ##  senha root do mysql
MYSQL_ENTRYPOINT_INITDB=./mysql/docker-entrypoint-initdb.d
```

```
### pgadmin ##################################################
# use this address http://localhost:5050
PGADMIN_PORT=9990 ##  porta de acesso externo/localhost
PGADMIN_DEFAULT_EMAIL=pgadmin4@pgadmin.org
PGADMIN_DEFAULT_PASSWORD=root  ##  senha root
```

```
### camnho raiz do servidor ##################################################
APP_CODE_PATH_HOST=../auth ##pasta que vai ser aberta no /var/www/ do servidor
```

ps. o laradock acessa como raiz a pasta public do seu projeto ./auth/public/ 


Configurações projeto laravel
```
composer create-project laravel/laravel:^8 auth; ## comando para criar projeto laravel
cp ./atuh/.env.example ./auth/.env  ##  copia arquivo de configuração 
```

Edição dos aquivos de configurações do projeto:
```
DB_CONNECTION=mysql ## rede que esta localizada o servidor do banco de dados
DB_HOST=mysql ## driver  do banco de dados
DB_PORT=3306 ## porta. manter a porta padrão
DB_DATABASE=auth ## nome do banco de dados
DB_USERNAME=root  ##  usuario do banco de dados
DB_PASSWORD=root ##   senha do banco de dados
``` 


Execução do projeto:

```
git  clone git@github.com:oscardasilva0/autenticacaoEmMultiplosFatores.git

```

E repita:

```
Até finalizar
```

Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Laradock](https://laradock.io/introduction/) - Laradock é um ambiente de desenvolvimento PHP completo para Docker.
* [Laravel](https://laravel.com/docs/8.x) - Gerente de Dependência

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;
* etc.


---
⌨️ com ❤️ por [Oscar Da Silva](https://github.com/oscardasilva0) 😊
<h3 align="left">Concecte-se comigo:</h3>
<p align="left">
<a href="https://linkedin.com/in/oscar-da-silva-a06432207" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="oscar-da-silva-a06432207" height="30" width="40" /></a>

<h3 align="left">Linguagens e ferramentas:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> </p>