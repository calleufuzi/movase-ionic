import { Component, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {ZXingScannerComponent} from '@zxing/ngx-scanner';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasCameras = false;
  hasPermission: boolean;
  qrResultString: string;

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;

  constructor(
    private barcodeScanner: BarcodeScanner
  ) {
    console.log(this.scanner);
    
  }

  scanQrCode(){
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      // safely access `navigator.mediaDevices.getUserMedia`
    }
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
