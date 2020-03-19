# Unit Testing Express.js with PostgreSQL | [Demo](https://unit-test-express-postgres.herokuapp.com/api-docs) &middot; ![Github CI Node.js PostgreSQL](https://github.com/MuhammadFariMadyan/unit-testing-express-postgres/workflows/Github%20CI%20Node.js%20PostgreSQL/badge.svg) [![codecov](https://codecov.io/gh/MuhammadFariMadyan/unit-testing-express-postgres/branch/development/graph/badge.svg)](https://codecov.io/gh/MuhammadFariMadyan/unit-testing-express-postgres)

## Tentang Proyek ini
> *Ini adalah repositori sederhana sebagai contoh dari penerapan unit testing menggunakan continuous integration (CI) menggunakan github actions dan continuous deployment (CD) di heroku, yang dibuat menggunakan express.js (salah satu framework dari node.js), mocha sebagai test runnner, chai sebagai assertion library dan istanbul untuk melihat coverage testingnya serta menggunakan postgresql sebagai databasenya. Event ini terdaftar di https://www.dicoding.com/events/2988*

> [Read in English Version](README.en.md)

### Deskripsi :
- Repositori ini adalah hasil akhir dari source code yang dibuat pada acara live streaming [Create REST API with Automated Testing using Express.js](https://www.dicoding.com/events/2988/).
- Video live streaming dapat dilihat di [twitch.com/faritw](https://www.twitch.tv/videos/558640300), untuk daftar materi nya adalah sebagai berikut :
  - Pembukaan = di menit (00:12:13)
  - Sesi 1 - Create Rest API with Express.js secara manual = di menit (00:16:50 - 01:24:10)
  - Sesi 1 - Membuat Dokumentasi Rest API dengan Swagger = di menit (01:24:50)
  - Sesi 1 - Break Istirahat = di menit (01:53:00 - 02:15:27)
  - Sesi 1 - Lanjut Membuat Dokumentasi Rest API dengan Swagger = di menit (02:15:30)
  - Sesi 1 - Selesai = di menit (02:36:27)
  - Sesi 2 - Sekilas tentang Automated Testing = di menit (02:45:32)
  - Sesi 2 - Mulai membuat Unit Testing = di menit (02:52:40 - 05:19:15)
  - Sesi 2 - Membuat konfigurasi Github Actions untuk CI = di menit (05:20:00)
  - Sesi 2 - Deploy ke Heroku serta membuat CD nya aktif di Heroku =
di menit (05:41:55 - 06:51:20)
  - Sesi 2 - Kesimpulan dan Penutup = di menit (06:51:30)

### Dokumentasi : 
Dokumentasi REST API dari proyek ini : [unit-test-express-postgres.herokuapp.com/api-docs](https://unit-test-express-postgres.herokuapp.com/api-docs).
#### Tangkapan layar :
![image](https://user-images.githubusercontent.com/7545546/75762344-18603c80-5d6d-11ea-9f7e-f0942b85cec4.png) 

### Fitur :
- Hanya ada 6 endpoint yang dibuat, yang terdiri dari Browse, Read, Edit, Add, Delete (BREAD).
- Hanya terdiri dari 1 tabel, yaitu tabel user.
- Belum ada atribut level akses / role didalam tabel user ini untuk membedakan hak akses dari setiap penggunanya.
- Hasil generate token JWT nya belum digunakan.
- Baru 11 test case yang telah dibuat.

## Langkah - langkah memulai project ini di komputer anda
Untuk menjalankan proyek ini, anda harus sudah memasang nodejs dan postgresql.

Versi Node.js:
```
node --version
v12.13.0
```
Versi PostgreSQL:
```
psql --version
psql (PostgreSQL) 11.2
```

## Memulai Pengembangan
Buka terminal (cmd, powershell, git bash dan sebagainya)
Kloning repositori ini dengan cara :
```
git clone https://github.com/MuhammadFariMadyan/unit-testing-express-postgres.git
```
Masuk ke dalam folder repositori :
```
cd unit-testing-express-postgres
```
Install semua dependencies yang dibutuhkan menggunakan `npm` atau bisa juga dengan menggunakan `yarn` :
```
npm install or yarn install
```
Jika anda ingin menjalankan proyek dalam mode `development` atau `testing`, maka anda harus mengatur konfigurasi databasenya sesuai dengan konfigurasi database pada komputer anda, seperti `username`, `password` dan `host` nya, kemudian disarankan sebaiknya nama database yang anda gunakan untuk mode `development` atau `testing` adalah berbeda untuk menghindari hal-hal yang tidaj diinginkan, dan semua konfigurasi ini harus anda lakukan di dalam file `config/config.js`. 
Untuk mode `development` anda harus mengaturnya disini :
```
"development": {
    "username": "DATABASE_USER_NAME",
    "password": "DATABASE_PASSWORD",
    "database": "DATABASE_DEVELOPMENT_NAME",
    "host": "DATABASE_HOST",
    "dialect": "postgres"
  },
```
Untuk mode `testing` anda harus mengaturnya disini :
```
"test": {
    "username": "DATABASE_USER_NAME",
    "password": "DATABASE_PASSWORD",
    "database": "DATABASE_TEST_NAME",
    "host": "DATABASE_HOST",
    "dialect": "postgres"
  },
```
Membuat database dan tabel dalam mode `development` :
```
npm run db:start
```
Membuat database dan tabel dalam mode `testing` :
```
npm run db:test:start
```
Menjalankan test :
```
npm run test
```
Setelah menjalankan test, anda akan melihat hasil testing coverage dari repo ini, sebagai berikut :
```
----------------------------------|---------|----------|---------|---------|-------------------
File                              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------------------|---------|----------|---------|---------|-------------------
All files                         |   91.53 |    76.19 |   88.89 |   91.96 | 
 unit-testing-express             |   90.48 |      100 |   66.67 |      90 | 
  app.js                          |   90.48 |      100 |   66.67 |      90 | 25,26
 unit-testing-express/controllers |   91.49 |       90 |     100 |   92.86 | 
  userController.js               |   91.49 |       90 |     100 |   92.86 | 17,54,73
 unit-testing-express/middlewares |   83.33 |       50 |     100 |   83.33 | 
  validator.js                    |   83.33 |       50 |     100 |   83.33 | 11
 unit-testing-express/models      |   91.18 |    66.67 |    87.5 |   91.18 | 
  index.js                        |      95 |    66.67 |     100 |      95 | 13
  user.js                         |   85.71 |      100 |      80 |   85.71 | 40,47
 unit-testing-express/routers     |     100 |      100 |     100 |     100 | 
  users.js                        |     100 |      100 |     100 |     100 | 
----------------------------------|---------|----------|---------|---------|-------------------
```
Manfaat menggunakan swagger adalah kita dapat menguji endpoint yang telah kita buat ketika proyek nya sudah di deploy atau dengan kata lain ketika dalam mode `production`, namun anda harus mematikan komentar di baris 8 dan sebaliknya anda harus menjadikan baris 7 sebagai komentar di dalam file `app.js` dan lakukan perubahan `HOST` dengan `YOUR_HOST_APP` :
```
...
7 // const HOST_APP = 'localhost:3000';
8 const HOST_APP = YOUR_HOST_APP;
...
```
Dalam mode `development`, anda harus mematikan komentar di baris 7 dan sebaliknya anda harus menjadikan baris 8 sebagai komentar di dalam file `app.js` :
```
...
7 const HOST_APP = 'localhost:3000';
8 // const HOST_APP = YOUR_HOST_APP;
...
```
Jalankan servernya, bisa dengan menggunakan `npm` atau `yarn` :
```
npm run start or yarn start
```
Lalu, anda dapat mengakses proyek ini di alamat : http://localhost:3000, untuk dokumentasi swaggernya anda dapat mengaksesnya di alamat ini : http://localhost:3000/api-docs/

## Versi source code asli
Source code asli dari hasil live streaming adalah [di commit ini](https://github.com/MuhammadFariMadyan/unit-testing-express-postgres/tree/3b744c6e72bd2bc0b1a4dcee65f6be21e5329650).

## Tautan & Sumber Daya
- [Node.js](https://nodejs.org/en/download)
- [PostgreSQL](https://www.postgresql.org/download)
- [Mocha](https://mochajs.org)
- [Chai](https://www.chaijs.com)
- [Supertest](https://github.com/visionmedia/supertest)
- [PostgreSQL example github actions](https://github.com/actions/example-services/blob/master/.github/workflows/postgres-service.yml)
- [Node.js example github actions](https://github.com/actions/starter-workflows/blob/master/ci/node.js.yml)

## Diperbarui
Berisi daftar penambahan atau perubahan yang dilakukan diluar dari source code yang dibuat saat video live streaming :
1. Penambahan codecov untuk melihat hasil coverage testingnya secara online.
2. Memperbaiki typo penulisan "expess" di file app.js.
3. Menambahkan paket `pm2` untuk menjalankan server di Heroku beserta scripts command nya.
4. Menggunakan konfigurasi environment variable untuk production di Heroku.