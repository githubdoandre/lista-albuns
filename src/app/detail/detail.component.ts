import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  photos:[];

  ngOnInit(): void {
    let par = this.activatedRoute.snapshot.paramMap.get('photos');
    try {
      let params = JSON.parse(par);
      this.photos = params;
    } catch (error) {
      console.log(error);
    }
  }

}
