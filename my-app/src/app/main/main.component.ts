import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  symptoms: Object;
  user_id: string;
  symptom: string;

  log: any;

  optionalSymptoms = ["blurred vision",
  "chest pain",
  "cognitive changes",
  "dry eyes",
  "flu like symptoms",
  "foot pain",
  "general ill feeling",
  "irritated eyes",
  "locked joint",
  "loss of function/stamina",
  "mood changes",
  "night sweats",
  "nodules",
  "noise sensitivity",
  "shortness of breath",
  "tremor",
  "trouble with hand or foot movement",
  "weakness"];

  constructor(private ms: MainService) { 
    this.log = new Object();
  }

  ngOnInit() {
  }

  sendData() {
    this.log['time'] = new Date().getTime();
    this.ms.addSymptom(this.log).subscribe(response => {
    });
  }



  

}
