export const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
};

export const capitalizeText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const generateOrderId = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
