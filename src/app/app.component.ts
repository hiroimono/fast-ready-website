import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public cols1: Col = {
    name: 'col-1',
    backgroundColor: 'grey',
    color: 'white',
    childs: [
      {
        childName: 'child-left-1'
      },
      {
        childName: 'child-left-2'
      },
      {
        childName: 'child-left-3'
      },
      {
        childName: 'child-left-4'
      },
    ]
  }


  public cols2: Col = {
    name: 'col-2',
    backgroundColor: 'darkgrey',
    color: 'white',
    childs: [
      {
        childName: 'child-right-1'
      },
      {
        childName: 'child-right-2'
      },
      {
        childName: 'child-right-3'
      },
      {
        childName: 'child-right-4'
      },
    ]
  }

  drop(event: CdkDragDrop<Col>, index: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.childs, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data.childs,
        event.container.data.childs,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
