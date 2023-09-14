import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Yes or Not': return'code';
      case 'Leonel Cassul' : return 'computer';
    }
    return 'computer';
  }

}
