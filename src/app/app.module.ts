import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FailureComponent } from './Components/failure/failure.component';
// import { SuccessComponent } from './Components/success/success.component';

//decorator
@NgModule({
    declarations: [
        FailureComponent
    ],
    imports: [
        AppComponent
      ],
    providers: [],
})
export class AppModule { }