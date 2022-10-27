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

  //studentnames[0] - ashim
  //studentnames[3] - kripesh

  employeeList: any[]= [
    {empID: 1, empName:'ashim', ampEmail:'ashimkarkee91@gmail.com'},
    {empID: 2, empName:'virat', ampEmail:'virat2022worldcup@gmail.com'}
  ]
  //employeeList[0] - {empID: 1, empName:'ashim', ampEmail:'ashimkarkee91@gmail.com'}

  //employeeList[0].empID - 1
  //employeeList[0].empEmail - ashimkarkee91@gmail.com


  products: any={
    productName:'Xbox',
    productId:'Xbox SeriesX', 
    price: 600, 
    shippingAvailability:true, 
    countries:['Nepal', 'USA,', 'France']
  };

  //product.price = 600
  //product.countries - ['Nepal', 'USA,', 'France']
  //product.countries[1] - 'USA'
  //product.productName - 'xbox'

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
//concepts of class
//addTwoNumbers(10) - invalid functions

class ClassName{
  empName : string = 'Ashim';
  employeeIds: number[] = [101,102,103];

  //functions without return types

  add(){ //0 argument functions
    //the logic of addition
  }
  addTwoNumbers(num1,num2){ //2 argument functions
    //num1 and num2 are parameters
    //the logic to add numbers 
    num1+num2;
  }

  //functions with return types
  myFunction(){
    return 
  }

}

//types of functions we deal with 
//0 argument functions
//1 argument functions
//fucntions with return typesc
//functions without return types
