import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  productCode=""
  productName=""
  manufDate=""
  expDate=""
  brand=""
  distributor=""
  price=""
  sellerName=""

  constructor(private api:ApiService){}

  read=()=>{

    let data:any={"productCode":this.productCode,"productName":this.productName,"manufDate":this.manufDate,"expDate":this.expDate,"brand":this.brand,"price":this.price,"sellerName":this.sellerName,"distributor":this.distributor}
    console.log(data)

    this.api.addproduct(data).subscribe(

      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Product Successfully Added")
          this.productCode=""
          this.productName=""
          this.manufDate=""
          this.expDate=""
          this.brand=""
          this.distributor=""
          this.price=""
          this.sellerName=""
        }
        else{
          alert("Something went wrong")
        }
        
      }

    )

  }


}
