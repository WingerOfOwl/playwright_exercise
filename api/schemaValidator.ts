import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import userSchema from './schemas/user.schema.json';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv); // Aktifkan format bawaan: email, date-time, uri, dll

// Compile schema sekali di awal (biar nggak di-compile ulang tiap validasi)
const validateUser = ajv.compile(userSchema);

/**
 * Validasi response JSON terhadap schema user.
 * Returns { valid, errors } — errors berisi detail kalau ada yang gagal.
 */
export function validateUserSchema(data: unknown) {
    const valid = validateUser(data);
    return {
        valid,
        errors: validateUser.errors,
    };
}
