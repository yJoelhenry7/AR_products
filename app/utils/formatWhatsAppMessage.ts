import { CartItem } from '../context/CartContext';

interface DeliveryLocation {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  landmark?: string;
}

const WHATSAPP_NUMBER = '918500904835';

export function formatWhatsAppMessage(
  items: CartItem[],
  delivery: DeliveryLocation,
  locale: string
): string {
  const isEnglish = locale === 'en';
  
  // Using text separators instead of emojis for better compatibility
  const packageIcon = "🎁"; // Gift box emoji (more compatible)
  const locationIcon = "🏠"; // House emoji (more compatible)
  
  // Header
  let message = isEnglish
    ? "*Hello! I'd like to order from AR Traditional Foods:*\n\n"
    : "*నమస్కారం! నేను AR ట్రెడిషనల్ ఫుడ్స్ నుండి ఆర్డర్ చేయాలనుకుంటున్నాను:*\n\n";

  // Order Details Header
  message += isEnglish
    ? `${packageIcon} *ORDER DETAILS:*\n`
    : `${packageIcon} *ఆర్డర్ వివరాలు:*\n`;

  // Items
  items.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    message += `${index + 1}. ${item.name} x ${item.quantity} - ₹${itemTotal}\n`;
  });

  // Total
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  message += isEnglish
    ? `\n*Total Items:* ${totalItems}\n`
    : `\n*మొత్తం వస్తువులు:* ${totalItems}\n`;

  message += isEnglish
    ? `*Total Amount:* ₹${totalPrice}\n\n`
    : `*మొత్తం మొత్తం:* ₹${totalPrice}\n\n`;

  // Delivery Address Header
  message += isEnglish
    ? `${locationIcon} *DELIVERY ADDRESS:*\n`
    : `${locationIcon} *డెలివరీ చిరునామా:*\n`;

  // Delivery Details
  message += isEnglish
    ? `*Name:* ${delivery.fullName}\n`
    : `*పేరు:* ${delivery.fullName}\n`;

  message += isEnglish
    ? `*Phone:* ${delivery.phone}\n`
    : `*ఫోన్:* ${delivery.phone}\n`;

  message += isEnglish
    ? `*Address:* ${delivery.address}\n`
    : `*చిరునామా:* ${delivery.address}\n`;

  message += isEnglish
    ? `*City:* ${delivery.city}\n`
    : `*నగరం:* ${delivery.city}\n`;

  message += isEnglish
    ? `*Pincode:* ${delivery.pincode}\n`
    : `*పిన్‌కోడ్:* ${delivery.pincode}\n`;

  if (delivery.landmark) {
    message += isEnglish
      ? `*Landmark:* ${delivery.landmark}\n`
      : `*ల్యాండ్‌మార్క్:* ${delivery.landmark}\n`;
  }

  // Footer
  message += isEnglish
    ? "\n_Please confirm availability and delivery charges. Thank you!_"
    : "\n_దయచేసి లభ్యత మరియు డెలివరీ ఛార్జీలను నిర్ధారించండి. ధన్యవాదాలు!_";

  // Proper encoding for WhatsApp
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
