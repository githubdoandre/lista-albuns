import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  constructor(private apiService: ApiService,  private router: Router) { }

  albuns = [];

  async ngOnInit() {
    this.apiService.getList().subscribe((data: any) => {
      data.forEach(async item => {
        await this.apiService.getPhotoByAlbum(item.id).toPromise().then(dat => {
   
          item.firstPhoto = dat[0].url;
          item.allPhotos = dat;

          this.albuns.push(item);
          this.sort();
        })
      });

      console.log(this.albuns);
    })
  }

  sort() {
    this.albuns.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  goToDetail(photos){
    console.log(photos);
    let params =JSON.stringify(photos);
    this.router.navigate(['/detail/', params]);
  }
}
