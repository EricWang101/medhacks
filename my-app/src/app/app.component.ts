import { Component } from '@angular/core';
import { constructor } from 'events';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'my-app';

  constructor(private ap: AppService) {
  }

}
