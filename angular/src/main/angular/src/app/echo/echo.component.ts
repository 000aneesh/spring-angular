import { Component, OnInit } from '@angular/core';
import { EchoService } from './echo.service';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.css'],
  providers: [EchoService]
})
export class EchoComponent implements OnInit {

  constructor(private echoService: EchoService) { 
  //this.echoService = new EchoService();
  }
  

  ngOnInit() {
  }
  
    inputMsg = '';
  outputMsg = '';
  errorMsg = '';
  
  getMsg(event) {
  console.log('in getMsg');
  	             this.echoService
                  .getEcho(this.inputMsg)
		          .subscribe( Response => {
		              console.log(Response);
		              this.outputMsg = Response;
		              
		           }, resFileError => this.errorMsg = resFileError);
  }

}
