import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inovant',
  templateUrl: './inovant.component.html',
  styleUrls: ['./inovant.component.css']
})
export class InovantComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }
  submit(data)
  {
    this.http.post("http://localhost:3000/signup",data)
    .subscribe((result)=>{
      alert("signup suuseeefully");
      console.log(result);
    })
console.log(data);
  }


}
