import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-movie-finder';
  darkMode = signal<boolean>(false)
  @HostBinding('class.dark') get mode(){
    return this.darkMode()
  }


  setDarkTheme(){
    console.log(document.documentElement.setAttribute('data-theme','dark'));
    console.log(this.darkMode());
     if(!this.darkMode()){
      document.documentElement.setAttribute('data-theme','dark')
     } else {
      document.documentElement.removeAttribute('data-theme')
      console.log("hio");
      
     }
    
    
    console.log(document.documentElement);
    
    // document.documentElement.parentNode
    this.darkMode.set(!this.darkMode())
  }
}
