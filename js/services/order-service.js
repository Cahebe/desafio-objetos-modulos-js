import * as shippingService from './shipping-service.js';

export function total(order) {
    const basicValue = order.basic;
    return basicValue - basicValue * order.discount/100 + shippingService.shipment(order);
}