import { Component, OnInit } from '@angular/core';
import Typewriter from '../../t-writer';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdminService } from '../service/admin.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  service:any;
  cold='627d4516c47afab2189efbce';
  ware='627d4527c47afab2189efbd0';

  coldData:any;
  wareData:any;

  constructor(private adminService: AdminService,private storageService:StorageService) {
    this.adminService.service_Api().subscribe(data => {
      console.log(data);
      this.service = data
    })

    this.storageService.getStorageById(this.ware).subscribe(data => {
      this.wareData = data;
      console.log(this.wareData);
    })

    this.storageService.getStorageById(this.cold).subscribe(data => {
      this.coldData = data;
      console.log(this.coldData);
    })
  }

  ngOnInit(): void {
    const target = document.querySelector('.typing')

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    })

    const target2 = document.querySelector('.typing2')
    const writer2 = new Typewriter(target2, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    })
    
    writer
      .changeTypeColor('#f1b814')
      .type('Better')
      .rest(1000)
      .clear()
      .changeTypeColor('#bd1e51')
      .type('Easier')
      .rest(1000)
      .clear()
      .changeTypeColor('#490b3d')
      .type('Faster')
      .rest(1000)
      .clear()
      .start()

      writer2
      .changeTypeColor('#bd1e51')
      .type('Dream To ')
      .rest(1000)
      .type('Reality')
      .rest(1000)
      .start()
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin:10,
    navSpeed: 700,
    navText: ['<', '>'],
    nav:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      },
    },
  }


  
}

