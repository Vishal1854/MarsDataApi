import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import {DisplayCurosityDataComponent} from './app/display-curosity-data/display-curosity-data.component'

const bootstrap = () => bootstrapApplication(DisplayCurosityDataComponent, config);

export default bootstrap;
