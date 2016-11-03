import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Details } from '../pages/details/details';
import { RssProvider } from '../providers/rss-provider';
import { SanitizeHTML } from '../pipes/sanetize-html';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Details,
    SanitizeHTML
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Details
  ],
  providers: [RssProvider]
})
export class AppModule { }
