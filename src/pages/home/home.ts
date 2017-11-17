import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
scanned=null;
  constructor(private qrscanner:QRScanner, private barcodescanner:BarcodeScanner,public navCtrl: NavController) {
  

  }
  // startScan(){
  //   const options :BarcodeScannerOptions={
     
  //    showFlipCameraButton:true,
  //   showTorchButton:true 
  //   }
  //   this.barcodescanner.scan(options).then(barcodedata=>{
  //    this.scanned=barcodedata.text;
  //   });
      
  //  }
  startScan(){
    const scanSub=this.qrscanner.scan().subscribe((text:string)=>{
this.scanned=text;

    })
    this.qrscanner.show();
  }

}
