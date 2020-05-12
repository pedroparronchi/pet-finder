# Pet Finder


## Como instalar - Backend (Laravel)

• Navegue até a pasta backend<br>
• composer install<br>
• cp .env.example .env<br>
• Crie seu banco de dados<br>
• Substituia em .env a variável DB_DATABASE=NomeDaSuaBaseAqui<br>
• php artisan key:generate<br>
• php artisan migrate<br>
• php artisan passport:install<br>
• Copie o client_id e o client_secret que aparecerá no seu console, vá para a pasta frontend e substitua em /src/utils/credentials.js<br>
• php artisan serve<br>


## Como instalar - Frontend (ReactJS)

• Navegue até a pasta frontend<br>
• yarn install<br>
• yarn dev<br>

Pronto, ambos serviços já devem estar startados.<br>
Basta utilizar acessar a página aberta pelo frontend ou acessar http://localhost:3000/<br>

## Como fazer - Testes

• Navegue até a pasta backend<br>
• Clone seu arquivo .env para .env.testing (cp .env .env.testing)<br>
• Edite os dados do seu banco teste no arquivo .env.testing <br>
• Abra o arquivo phpunit.xml na raiz do backend <br>
• Altere as propriedades DB_CONNECTION para seu tipo de banco de dados e DB_DATABASE para o nome do seu banco de dados<br>
• Edite os dados do seu banco teste no arquivo .env.testing<br>
• Inicie o servidor php artisan serve<br>
• Rode o comando para realizar os testes já com o comando que reseta o banco: **php artisan migrate:fresh --env=testing && php artisan test**<br>


## Para conhecimento
• CSS feito todo a mão (Não utilizado nenhum framework. Motivo: Teste)<br>
• Total de horas utilizadas no projeto: 13h<br>
• Aplicado de resouces para tratamento dos dados de retorno<br>
• Aplicado Validation Request para validação dos dados<br>
• Aplicado de testes TDD *(contudo, ainda sem validação do json de retorno, apenas do status)*<br>
• First API<br>

## Bugs Conhecidos
• Tabela de animais não redimensiona *(falta finalizar css)*<br>


## Futuras implementações
• Mobile em react-native com redux *(api e componentes do frontend já adaptados)*<br>
• Redux no frontend *(caso o projeto venha a crescer, até o momento sem necessidade)*<br>
• Deploy no heroku<br>
• Melhoria no css (aplicar transitions, melhorar telas de aviso de encontro do animal, padronizar uma terceira cor)<br>
• Aplicação de testes unitários *(apesar do ideal ser iniciar assim, eu irei refatorar o projeto)<br>
