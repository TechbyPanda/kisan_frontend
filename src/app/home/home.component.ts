import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // const target = document.querySelector('.typing')

    // const writer = new Typewriter(target, {
    //   loop: true,
    //   typeSpeed: 80,
    //   deleteSpeed: 80,
    //   typeColor: 'red'
    // })
    
    // writer
    //   .type('You can type')
    //   .rest(500)
    //   .changeOps({ deleteSpeed: 80 })
    //   .remove(4)
    //   .type('edit')
    //   .rest(500)
    //   .remove(4)
    //   .type('synchronize callbacks')
    //   .rest(500)
    //   .changeOps({ deleteSpeed: 20 })
    //   .remove(21)
    //   .type('change options on the go')
    //   .rest(500)
    //   .clear()
    //   .start()
  }


}
