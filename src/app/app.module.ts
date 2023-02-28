import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlayersModule, // add PlayersModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
