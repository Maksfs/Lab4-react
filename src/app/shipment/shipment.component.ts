import { Component } from '@angular/core';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css'],
  standalone: true  // Вказуємо, що компонент є standalone
})
export class ShipmentComponent {

  shipmentDetails = {
    trackingNumber: '123456789',
    destination: 'Kyiv, Ukraine',
    status: 'In Transit'
  };

  constructor() {}


}
