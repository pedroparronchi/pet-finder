# pet-finder

## Como instalar - Backend

• Navegue até a pasta backend
• composer install
• cp .env.example .env
• Crie seu banco de dados
• Substituia em .env a variável DB_DATABASE=NomeDaSuaBaseAqui
• php artisan key:generate
• php artisan migrate
• php artisan passport:install
# • Copie o client_id e o client_secret que aparecerá no seu console, vá para a pasta frontend e substitua em /src/utils/credentials.js
• php artisan serve


## Como instalar - Frontend

• Navegue até a pasta frontend
• yarn install
• yarn dev

Pronto, ambos serviços já devem estar startados.
Basta utilizar acessar a página aberta pelo frontend ou acessar http://localhost:3000/

## Imagens

![Alt text](https://i.ibb.co/RT2mHVq/screen1.png "Dashboard")
![Alt text](https://i.ibb.co/hsPNcdn/screen2.png "Pets")
![Alt text](https://i.ibb.co/B2bNGKr/screen3.png "Register")
![Alt text](https://i.ibb.co/XbjQV80/screen4.png "Login")
![Alt text](https://i.ibb.co/QFJTH3p/screen5.png "Dashboard Paginate")
