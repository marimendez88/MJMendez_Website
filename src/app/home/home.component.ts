import { Component, OnInit } from '@angular/core';
import  { datoDevCMS, datoProdCMS }  from '../config/connections';
import  { DatoCMSCollections }  from '../config/constants';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    datoDevCMS.site.find()
    .then((site) => {
      console.log(site);
    });



    datoDevCMS.itemTypes.all()
    .then((itemTypes) => {
        itemTypes.forEach((itemType) => {
          console.log(itemType);
        });
      })
    .catch((error) => {
      console.error(error);
    });

    


    datoDevCMS.items.all({
      filter: {
        type: DatoCMSCollections.SERVICES
      }
    
    })
    .then((item) => {
      console.log(item);
    })
    .catch(error => 
      console.log(error));

  }


 


}
