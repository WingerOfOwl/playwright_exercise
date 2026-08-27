import * as XLSX from 'xlsx';
import { LoginData } from '../component/data/loginData';

// ============================================
// Membaca data dari file Excel (.xlsx)
// ============================================
export function readLoginDataFromExcel(filePath: string): LoginData[] {
  // 1. Baca file Excel
  const workbook = XLSX.readFile(filePath);

  // 2. Ambil sheet pertama (atau bisa pilih sheet tertentu)
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  // 3. Ubah sheet jadi array of objects
  //    Header baris pertama Excel jadi nama key (username, password, expectedError)
  const rows = XLSX.utils.sheet_to_json<LoginData>(sheet);

  return rows;
  
}
