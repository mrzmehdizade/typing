import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  
  inputText: string = '';

  randomeText:string =faker.lorem.sentence();
  public onChangeInput(event:Event){
    //console.log((event.target as HTMLInputElement).value);
this.inputText=(event.target as HTMLInputElement).value;
    
  }
  public compare(letterRandom:string,letterInter:string):string{
    if(!letterInter){
      return 'pending';
      
    }
    return letterInter===letterRandom?'correct':'incorrect';


  }
}
