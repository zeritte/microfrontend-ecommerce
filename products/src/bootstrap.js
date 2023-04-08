import faker from "faker";

export function mount(q) {
  const el = document.querySelector(q);

  if (!el) return;

  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}

if (process.env.NODE_ENV === "development") {
  mount("#dev-products");
}
