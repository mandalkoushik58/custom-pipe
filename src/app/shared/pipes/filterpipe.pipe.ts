import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../model/data';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value:Iplayer[],searchText:string): Iplayer[] {
    if(!value){
      return []
    }
    if(!searchText){
      return value
    }

    let filterArray=value.filter(player=>{
      return player.country.toLowerCase().startsWith(searchText)
    })
    return filterArray
  }

}
