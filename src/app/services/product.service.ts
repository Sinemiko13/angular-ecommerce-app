import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ProductModel } from "../models/product";

@Injectable({
  providedIn: 'root'
})


export class ProductService{

  products: ProductModel[] = [
    {
      name: 'Peynir',
      inventoryQuantity:100,
      price: 90.85,
      imageUrl: 'https://www.peynircibaba.com/image/catalog/urunler/1008.jpg',
    },
    {
      name: 'Zeytin',
      inventoryQuantity:100,
      price: 60.75,
      imageUrl:
        'https://cdn.dsmcdn.com/mnresize/500/-/ty278/product/media/images/20211222/9/14930386/17329977/2/2_org.jpg',
    },
    {
      name: 'Terayağ',
      inventoryQuantity:100,
      price: 80,
      imageUrl: 'https://koysev.com/wp-content/uploads/dogal-koy-tereyagi.jpg',
    },
    {
      name: 'Ekmek',
      inventoryQuantity:100,
      price: 10,
      imageUrl:
        'https://cdn.getir.com/product/5f36a28b29d3b131b9d95548_tr_1637858193743.jpeg',
    },
    {
      name: 'Lavaş',
      inventoryQuantity:100,
      price: 59.50,
      imageUrl:
        'https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30126365/30126365_0_MC/8804614504498_1577962038208.jpg',
    },
    {
      name: 'Yeşil Zeytin',
      inventoryQuantity:100,
      price: 70.90,
      imageUrl:
        'https://st.myideasoft.com/idea/gc/32/myassets/products/526/domat-biberlii-1000x1000.png?revision=1591028193',
    },
    {
      name: 'Telefon Kablosu',
      inventoryQuantity:100,
      price: 35,
      imageUrl:
        'https://productimages.hepsiburada.net/s/10/500/9207755767858.jpg',
    },
    {
      name: 'Priz',
      inventoryQuantity:100,
      price: 20,
      imageUrl:
        'https://cdn.cimri.io/image/1000x1000/vikokarrebeyaztopraklpriz_288329905.jpg',
    },

  ];

  constructor(
    private toastrService:ToastrService
  ){}

  add(model:ProductModel):boolean{
    let length = this.products.filter(p=>p.name.toLocaleLowerCase() == model.name.toLocaleLowerCase()).length;
    if(length == 0){
      this.products.push(model);
    this.toastrService.success(model.name + " başarıyla eklendi");
    return true;
    } else{
      this.toastrService.error("Eklemeye Çalıştığınız Ürün Kayıtlarda Mevcuttur!");
      return false;
    }
  }
}
