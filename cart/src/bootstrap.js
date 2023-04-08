import faker from "faker";

export function mount(q) {
  const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

  document.querySelector(q).innerHTML = cartText;
}

// if (process.env.NODE_ENV === "development") {
//   mount("#dev-cart");
// }
