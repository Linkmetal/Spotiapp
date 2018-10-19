import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(item: any ): string {
    
    if ( !item.images ) {
      if ( item.album && item.album.images.length > 0 ) {
        console.log(item.album.images[0].url);
        return item.album.images[0].url;
      } else {
        return 'assets/img/noimage.png';
      }
    }

    if ( item.images.length > 0 ) {
      return item.images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
