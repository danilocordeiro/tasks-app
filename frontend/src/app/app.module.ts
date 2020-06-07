import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PrimengModule } from './shared/primeng/primeng.module';
import { ToolBarComponent } from './shared/components/tool-bar/tool-bar.component';
import { TaskListsComponent } from './pages/task/task-lists/task-lists.component';
import { TaskFormDialogComponent } from './pages/task/task-form-dialog/task-form-dialog.component';
import { TaskComponent } from './pages/task/task.component';

@NgModule({
  declarations: [AppComponent, ToolBarComponent, TaskListsComponent, TaskFormDialogComponent, TaskComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
