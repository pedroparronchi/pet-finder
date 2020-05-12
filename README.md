# Pet Finder

## Como instalar - Backend

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


## Como instalar - Frontend

• Navegue até a pasta frontend<br>
• yarn install<br>
• yarn dev<br>

Pronto, ambos serviços já devem estar startados.<br>
Basta utilizar acessar a página aberta pelo frontend ou acessar http://localhost:3000/

## Imagens

# Dashboard
![Alt text](https://i.ibb.co/RT2mHVq/screen1.png "Dashboard")

# Pets
![Alt text](https://i.ibb.co/hsPNcdn/screen2.png "Pets")

# Register
![Alt text](https://i.ibb.co/B2bNGKr/screen3.png "Register")

# Login
![Alt text](https://i.ibb.co/XbjQV80/screen4.png "Login")

# Dashboard Paginate
![Alt text](https://i.ibb.co/QFJTH3p/screen5.png "Dashboard Paginate")
