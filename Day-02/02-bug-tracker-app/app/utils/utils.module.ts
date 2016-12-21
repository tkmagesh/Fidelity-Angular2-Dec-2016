import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { TrimTextPipe }         from './pipes/TrimText.pipe';
import { OrderByPipe }         from './pipes/OrderBy.pipe';

@NgModule({
  imports:      [  FormsModule],
  declarations: [  TrimTextPipe, OrderByPipe ],
  exports :     [ TrimTextPipe, OrderByPipe ]
})
export class UtilsModule { }
