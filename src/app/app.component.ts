import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{firebaseConfig} from "../../firebaseConfig";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent {
constructor(){
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}
}
