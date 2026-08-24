const MIN_PHONE_DIGITS = 4;

export const normalizePhoneInput = (value) =>
  value.replace(/[^\d\s()+.-]/g, "").replace(/\s{2,}/g, " ");

export const isPlausiblePhoneNumber = (value) =>
  value.replace(/\D/g, "").length >= MIN_PHONE_DIGITS;
