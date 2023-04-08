import faker from "faker";

export function mount(q) {
  const el = document.querySelector(q);

  if (!el) return;

  const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === "development") {
  mount("#dev-cart");
}
