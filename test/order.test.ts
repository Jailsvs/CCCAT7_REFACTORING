import Order from "../src/Order";

test("Não deve permitir pedido com CPF inválido", function () {
    expect(()=> new Order("079.168.469-51")).toThrowError(new Error("Invalid CPF"));
});

test("Deve criar pedido com 3 itens", function () {
  let order = new Order("048.536.269-48")
  order.addItem({price: 5.99, amount: 2, description: "Pct Pipoca Doce"})
  order.addItem({price: 10, amount: 2, description: "Quentão 500ml"})
  order.addItem({price: 22.5, amount: 1, description: "Pinhão 350gr"})
  expect(order.getTotallItems()).toBe(3);
});

test("Deve criar pedido com cupom de desconto", function () {
  let order = new Order("048.536.269-48", {description: "Branas Discount", perc: 10})
  order.addItem({price: 59, amount: 1, description: "Pizza 5 Queijos 16 fatias"})
  expect(order.getTotallAmount()).toBe(58.9);
});
