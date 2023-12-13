import Order from '../js/models/order.js'
import * as orderService from '../js/services/order-service.js'

const data = document.getElementById("order").innerHTML.split("\n");

const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]))

const orderTotal = orderService.total(order);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: ${orderTotal.toFixed(2)}`);

