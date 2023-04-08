import faker from "faker";

export function mount(q) {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  document.querySelector(q).innerHTML = products;
}

// if (process.env.NODE_ENV === "development") {
//   mount("#dev-products");
// }
