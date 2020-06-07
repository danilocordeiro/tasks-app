import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    DynamicDialogModule,
    InputTextModule,
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    CardModule,
    DynamicDialogModule,
    InputTextModule,
  ],
  providers: [DialogService],
})
export class PrimengModule {}
