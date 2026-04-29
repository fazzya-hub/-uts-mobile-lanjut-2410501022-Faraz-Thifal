# Buku Digital

## Identitas Mahasiswa:
* Nama  : Faraz Thifal
* NIM   : 2410501022
* Kelas : B
* Tema  : Tema C (BookShelf)

## Tema
C - Aplikasi ini dibuat supaya pengguna dapat mengeksplorasi buku digital di seluruh dunia yang dapat mencari pada seacr, trus disimpan kedalam favortie secara real time.

## Tech Stack:
* React Native + Expo 
* React Navigation (Stack & Bottom Tabs) 
* State Management: Zustand
* API : Open Library API

## Dependencies utama
* Framework: Expo (v54)
* Library Utama: React Native (v0.81)
* State Management: Zustand (v5)
* Navigation: React Navigation (v7)
* Networking: Axios
* Icons: Expo Vector Icons
* Environment: Node.js & React (v19)

## Install Dependencies
( npm install )

## Running Project
(npx expo start)
dan harus menggunakan aplikasi expo go

## Screenshots
<img width="313" height="695" alt="image" src="https://github.com/user-attachments/assets/96462471-aed9-4ee7-b589-2975fc6d883e" /> 
<img width="313" height="695" alt="image" src="https://github.com/user-attachments/assets/96462471-aed9-4ee7-b589-2975fc6d883e" /> 
<img width="337" height="706" alt="image" src="https://github.com/user-attachments/assets/7de4343b-1ed2-492f-be2e-24470ab43237" />
<img width="319" height="704" alt="image" src="https://github.com/user-attachments/assets/89741299-17d0-4f9b-8a17-9db64330871c" />
<img width="321" height="716" alt="image" src="https://github.com/user-attachments/assets/9e302d39-784b-4140-878e-592248bec437" />

## Video Demo
* Link Youtube : https://youtu.be/EPkSI6fEQLU?si=xYiF-xcNN-TLCYiu
* Link Gdrive : https://drive.google.com/drive/folders/1cGUrW5BI5hpX9WzZp5khrobnE9Hm6CZC

## State Management
Disini saya menggunakan zustan untuk global state management.

Alasan memakai zustand:
 * Zustand memiliki selective update, jadi tidak semua data di fetch dari api(lebih ringan)
 * Zustand disarankan digunakan pada aplikasi yang sering perubahan contoh pada add dan remove favortie di aplikasi ini
 * kodenya clean code

## Daftar Refrensi
* https://docs.expo.dev/
* https://reactnative.dev/
* https://reactnavigation.org/
* https://github.com/pmndrs/zustand
* https://openlibrary.org/developers/api
* https://axios-http.com/
* https://stackoverflow.com/

## Refleksi Pengerjaan
Dari pengerjaan UTS Mobile Lanjut ini berupa project aplikasi Bookshelf katalog buku digital saya mendapatkan banyak pengalaman berharga mengenai pengembangan aplikasi mobile menggunakan framework react native dan expo. dair hal hal kecil seperti file modular hingga saat ini saya bisa mengintegrasikan data dari open library api. 
Yang paling susah itu pada saat menangani data dari API luar yang kadang servernya down atau lebih butuh waktu untuk respon, dari sini saya mengimpilementasikan error handling supaya tidak layar putih saja dan jelas ada keterangan dan juga loading indicator. Selain itu favorite screen atau fitur juga menjadi kesulitan bagi saya karena sebelumnya menggunakan context api dan karena banyak providernya akhirnya saya memutuskan memakai zustand yang clean code dan tidak memberatkan server karena dia hanya mencari tujuanya saja.
Awalnya saya sepel dengan fitur seperti pukll refresh dan validasi pada search, tetapi malah itu yang dibutuh untuk user experience karena menjaga performa aplikasi dan efisiensi kuota data pengguna. Project ini memberikan saya pemahaman mendalam dari hal hal kecil seperti loading indicator kenapa dibutuhkan pull refresh juga dan yang pasti dari project ini saya jadi tau cara membangun apk yang responsif dan terstruktur atau menggunakan file modular dengan baik





