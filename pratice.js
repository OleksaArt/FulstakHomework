// const checkAge = (age) => {
//   if (age <= 18) {
//     throw new Error("Вік має бути 18 або більше");
//   }
//   console.log("Вік підтверджено");
// }

// // Виклик функції без try...catch для демонстрації. Увага: це призведе до зупинки скрипта, якщо вік менше 18.
// checkAge(18); // Генерує помилку: "Вік має бути 18 або більше"

const safeDivision = (numerator, denominator) => {
  try {
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return numerator / denominator;
  } catch (error) {
    return error.message;
  } finally {
    console.log("Attempted division operation completed");
  }
}

console.log(safeDivision(10, 0)); // Виведе помилку "Division by zero is not allowed"
console.log(safeDivision(10, 2));