import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { FlexLayoutServerModule } from 'ngx-flexible-layout/server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FlexLayoutServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
