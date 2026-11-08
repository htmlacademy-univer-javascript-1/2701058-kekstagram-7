function isStringLengthValid(string, maxLength) {
  return string.length <= maxLength;
}
function isPalindrome(string) {
  const normalized = string.replaceAll(' ', '').toLowerCase();

  let reversed = '';

  for (let i = normalized.length - 1; i >= 0; i -= 1) {
    reversed += normalized[i];
  }

  return reversed === normalized;
}
<<<<<<< HEAD
isStringLengthValid('проверяемая строка', 20);
isPalindrome('ДовОд');
=======


>>>>>>> 57a4af555deae2932b0e3c886ecb90e347dd74ef
