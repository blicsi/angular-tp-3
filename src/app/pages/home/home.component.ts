import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cantidad:number=1
  alumnos:string[]=["1","2"]
  productos:any=[]
  productosAsync:any
  constructor(
    private productosSrv:ProductosService
  ) { 
    this.productosSrv.getProductoById(this.cantidad)
    /*this.productosSrv.getProductosObservable()
    .subscribe(
      (data:any)=>{
        console.log(data)
        if(data["results"]){
          this.productos=data["results"]
        }
      },
      (error:any)=>{
        console.log(error)
      })*/
    /*this.productosSrv.getProductos()
    .then((data:any)=>{
        console.log(data)
        if(data["results"]){
          this.productos=data["results"]
        }
    })
    .catch((e:any)=>{
      console.log(e)
    })*/
    this.getProductos();
    this.productosAsync = this.productosSrv.getProductosObservable()
  }
  async getProductos(){
    try{
      const data:any = await this.productosSrv.getProductos()
      if(data["results"]){
        this.productos=data["results"]
      }
    }catch(e){
      console.log(e)
    }
  }
  

  ngOnInit(): void {
    
  }

}
