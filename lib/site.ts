export const SITE_URL = "https://salesvince.com";
export const SITE_NAME = "SalesVince";
export const SITE_DESCRIPTION =
  "Streamline business operations with SalesVince, an ERP and Sales & Distribution software tailored for Pakistani SMEs, enhancing efficiency and accuracy.";

export const CONTACT = {
  phoneDisplay: "+92 300 1234567",
  phoneTel: "+923001234567",
  email: "hello@salesvince.com",
  office: "Office 4B, Business Tower, Shahrah-e-Faisal, Karachi, Pakistan",
  whatsappE164: "923001234567",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappE164}`;
