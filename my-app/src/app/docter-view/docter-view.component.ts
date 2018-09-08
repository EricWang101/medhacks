import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-docter-view',
  templateUrl: './docter-view.component.html',
  styleUrls: ['./docter-view.component.css']
})
export class DocterViewComponent implements OnInit {

  constructor(private ms: MainService) { }

  symptoms: Object;
  
  ngOnInit() {
    this.getSymptoms();
  }

  
  getSymptoms() {
    this.ms.getSymptoms().subscribe(resp => {
      this.symptoms = resp['body']['Items']
    })
  }

}
