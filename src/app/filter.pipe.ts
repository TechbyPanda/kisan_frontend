import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string): any {
    console.log("filter"+value);
    if(filterString===''){
      return value;
    }
    
      
      
    const product:any[]=[];
    
    for(let i=0;i<value.length;i++){
      let productName:string = value[i].description;
      if(productName.startsWith(filterString)){
        product.push(value[i]);
      }
    }
    
    return product;
  }
}





