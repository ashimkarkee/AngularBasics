import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'shopping-app in this list ashim';

  //Angular Basics

  studentId: number = 10;
  studentName: string = 'Ashim';
  StudentEmailId: string = 'ashimkarkee91@gmail.com';
  studentStatus: boolean = false;
  stduentIds: number[]= [1,2,3,4,5,6,7,8,9];
  studentNames: string[]= ['ashim','smriti', 'anmol', 'kripesh'];

  products: any={
    productName:'Xbox',
    productId:'Xbox SeriesX', 
    price: 600, 
    shippingAvailability:true, 
    countries:['Nepal', 'USA,', 'France']
  };

  student:any = {studentName:'ashim', studentEmailId: 'ashimkarkee91@gmail.com'};

  car: any= {
    carname:'Mycar',
    cargeneration: 7,
    make: 'Honda',
    model: 'Cr-V',
    price: 30000,
    availableInStore:true,
    financingAvailable: true
    };

  bank: any={
    bankNames:['Wells Fargo','Capital One', 'Bank of America'],
    serviceAvailable:['Checking', 'Saving'],
    creditCardAvailability: true,
    maximumCreditLimit: 50000,
  
  };

  customer: any={
    customerName: 'Ashim',
    customerEmailId: 'ashimkarkee91@gmail.com',
    prime: true,

    products: [
    {productName:'Xbox' ,pId: 'Series X'},
    {productName:'TV' ,pId: 'Sony'},
    {productName:'OnlineGame' ,pId: 'GTA V'}, 
    {productName:'Call Of Duty' ,pId: 'Hard Missions'}, 
    {productName:'Browser' ,pId: 'Google Chrome'},

]

  }
}
