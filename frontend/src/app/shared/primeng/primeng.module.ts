import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToolbarModule, ButtonModule, CardModule],
  exports: [ToolbarModule, ButtonModule, CardModule],
})
export class PrimengModule {}
