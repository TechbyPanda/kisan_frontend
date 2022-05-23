import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    
    if(filterString===""){
      console.log("inside if")
      return value;
    }
    console.log(value);
    const data:any[]=[];
    

    for(let i=0;i<value.length;i++){
      let productName:string = value[i].name;
      if(productName.startsWith(filterString)){
        console.log(value[i].name);
        data.push(value[i]);
      }
    }
    


    console.log(data);
    return data;
  }

}
