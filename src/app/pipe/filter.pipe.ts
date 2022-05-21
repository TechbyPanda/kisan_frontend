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
    // console.log(data.length)
    // console.log(value)
    
    // console.log(value.length)
    // console.log(filterString)

    for(let d of value){
      console.log(d);
      console.log("inside for loop");
      let name = d.name.toLowerCase();
      if(name.startsWith(filterString)){
        console.log("value ; "+d);
        data.push(d);
      }
    }

    console.log(data);
    return data;
  }

}
