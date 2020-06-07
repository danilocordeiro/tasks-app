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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { reducers } from './reducers/index';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    TaskListsComponent,
    TaskFormDialogComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    PrimengModule,
    DragDropModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
