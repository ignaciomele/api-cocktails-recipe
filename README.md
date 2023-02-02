# api-react-webpage
Backend API funcionando en Node en framework Express

### Clona el repositorio
```
git clone 

cd rommin-api-node-express
```

### Instala dependencias

```
npm install
```

### Setup database

Crea una base de datos llamada prueba y llena los datos que estan en .env.example en un archivo .env

```
//run migrations
npx sequelize-cli db:migrate

//run seeders
npx sequelize-cli db:seed:all
```

### Corre la app

```
npm run start
```
