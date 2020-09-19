import { Picture } from './../models/picture';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeService {

  public pictures: Picture[] = [
    {
      id: '1',
      data: {
        title: 'Colours 1',
        image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }
    },
    // {
    //   id: '2',
    //   title: 'Colours 2',
    //   image: 'https://images.pexels.com/photos/1919030/pexels-photo-1919030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    // },
    // {
    //   id: '3',
    //   title: 'Colours 3',
    //   image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    // },
    // {
    //   id: '4',
    //   title: 'Colours 4',
    //   image: 'https://images.pexels.com/photos/796607/pexels-photo-796607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    // },
    // {
    //   id: '5',
    //   title: 'Colours 5',
    //   image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    // },
    // {
    //   id: '6',
    //   title: 'Colours 6',
    //   image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    // },
    // {
    //   id: '7',
    //   title: 'Colours 7',
    //   image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    // },
  ];

}
