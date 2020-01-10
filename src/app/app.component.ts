import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit(): void {
    const s = this.hello();
    console.log(s);
  }

  hello() {
    return 'hello';
  }


}
