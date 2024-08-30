# Dotest

## Langkah-langkah untuk menjalankan aplikasi
1. Download (butuh unzip) atau clone project dari repo ini
2. Ketikkan perintah `npm install` untuk menginstall node_modules
3. Jalankan MySql database server dan buatlah database baru
4. Konfigurasi file `.env` untuk menyesuaikan port, host, username dan password
5. Lakukan seeder untuk fetching data dari API jsonplaceholder.typicode.com menggunakan perintah seperti berikut
   ```bash
   npx sequelize-cli db:seed:all
   ```
6. Jalankan project dengan perintah `npm run dev`
7. Testing endpoint dengan postman

# Penjelasan setiap endpoint
## 1. [Get] /Post
###    untuk fetching data yang berada pada database, contoh:
`http://localhost:3000/posts`
## 2. [Post] /Post
###    untuk proses create data ke API jsonplaceholder.typicode.com. Contoh:
`http://localhost:3000/posts` 
Content-Type: `application/json; charset=UTF-8`
Body: 
```json
{
  "userId": 1,
  "title": "lorem",
  "body": "lorem ipsum dolor sit amet veritatis error"
}
```
## 3. [Put] /Post
###    untuk proses pengubahan data ke API jsonplaceholder.typicode.com. Contoh:
`http://localhost:3000/posts/:id` 
Content-Type: `application/json; charset=UTF-8`
Body: 
```json
{
  "id": 1,
  "userId": 1,
  "title": "lorem",
  "body": "lorem ipsum dolor sit amet veritatis error"
}
```
## 4. [Patch] /Post
###    untuk proses pengubahan title pada ke API jsonplaceholder.typicode.com. Contoh:
`http://localhost:3000/posts/:id` 
Content-Type: `application/json; charset=UTF-8`
Body: 
```json
{
  "title": "lorem"
}
```
## 5. [Delete] /Post
###    untuk proses penghapusan data berdasarkan id pada API jsonplaceholder.typicode.com. Contoh:
`http://localhost:3000/posts/:id`
