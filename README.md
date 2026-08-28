# Latihan Playwright

Repositori latihan automation testing menggunakan **Playwright** dengan **TypeScript**. Project ini merupakan latihan pribadi dalam rangka memperdalam keahlian sebagai **Quality Assurance Engineer**, mencakup:
- UI Testing (data-driven testing menggunakan JSON & Excel)
- API Testing dengan schema validation
- Integrasi dengan database & GitHub Actions CI/CD

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🧪 **UI Testing** | Test UI berbasis Page Object Model, menjalankan browser secara *headed* (tidak headless) |
| 📊 **Data-Driven Testing** | Test data diambil dari file JSON dan Excel (`*.xlsx`) |
| 🔌 **API Testing** | Test REST API dengan pendekatan class helper (`baseApi`, `UsersApi`) |
| ✅ **Schema Validation** | Validasi response API terhadap schema JSON menggunakan [AJV](https://ajv.js.org/) |
| 🗄️ **Database** | Script koneksi & file SQL untuk latihan data |
| 🔄 **CI/CD** | Pipeline test otomatis di GitHub Actions |

---

## 🛠️ Tech Stack

- **Playwright Test** — `@playwright/test ^1.57`
- **TypeScript** — `^5.9`
- **Playwright BDD** — `^9.2`
- **AJV** — validasi JSON schema
- **xlsx** — membaca data uji dari file Excel
- **dotenv** — manajemen environment variable

---

## 📁 Struktur Project

```
Latihan_Playwright/
├── .github/workflows/   # Pipeline CI/CD (GitHub Actions)
├── api/                 # Helper & test API testing
│   ├── baseApi.ts       # Base class untuk request API
│   ├── usersApi.ts      # Endpoint /users (GET, POST, DELETE)
│   └── schemas/         # JSON schema untuk validasi
├── component/           # Komponen test data
│   ├── baseData.ts      # Data dasar test
│   └── data/            # Data uji (JSON, TS, Excel)
├── db/                  # Script database & file SQL
├── pages/               # Page Object Model (UI)
├── tests/               # Semua file test (*.spec.ts)
│   ├── api/             # Test API
│   ├── data-driven...   # Test berbasis data
│   └── example.spec.ts  # Test contoh bawaan Playwright
├── playwright.config.ts # Konfigurasi Playwright
├── package.json
└── tsconfig.json
```

---

## 🚀 Cara Menjalankan

### 1. Install dependencies

```bash
npm install
npx playwright install
```

### 2. Setup environment

Salin file `.env` sesuai kebutuhan (jika belum ada) dan isi konfigurasi yang diperlukan. Catatan: file `.env` sudah di-`gitignore`.

### 3. Jalankan test

```bash
# Jalankan semua test
npx playwright test

# Jalankan test dengan browser tertentu
npx playwright test --project=chromium

# Jalankan test tertentu
npx playwright test tests/data-driven.spec.ts

# Lihat laporan HTML setelah test selesai
npx playwright show-report
```

> **Catatan:** Konfigurasi saat ini menjalankan browser secara **headed** (`headless: false`) sehingga browser akan tampil saat test berjalan.

---

## 🌐 Dukungan Browser

Project ini dikonfigurasi untuk tiga browser utama:

- **Chromium** — `Desktop Chrome`
- **Firefox** — `Desktop Firefox`
- **WebKit** — `Desktop Safari`

Browser mobile, Edge, dan Chrome branded tersedia sebagai template di `playwright.config.ts` (di-comment) dan bisa diaktifkan sesuai kebutuhan.

---

## 🧪 Contoh Penggunaan API

```typescript
import { test } from '@playwright/test';
import { UsersApi } from '../api/usersApi';

test('ambil semua user', async ({ request }) => {
    const usersApi = new UsersApi(request);
    const response = await usersApi.getAllUsers();
    await usersApi.validateUserData(response, /* expected data */);
});
```

---
