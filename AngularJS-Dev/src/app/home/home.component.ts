import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
  animations: [
    trigger('input', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
        ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ]),
    trigger('tasks', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ]),
    trigger('addState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    ]
})

export class HomeComponent implements OnInit {

  movedItem:any;
  movedItemIndex = [];

  lock:boolean = false;

  inputContent: string = "";
  columnId: number;
  tasks = [[], [], [], []];
  titles = ["opened", "doing", "todo", "review"];

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.homeService.getData().then((res) => {
        for (var i = 0; i < res['tasks'].length; i++) {
          this.tasks[res['tasks'][i]['columnId']].push(res['tasks'][i]);
        }
      }
    );
  }

  addItems($event) {
    var index = $event.target.id.replace("button", "");
    if (this.inputContent != ""){
      this.homeService.addItem(index, this.inputContent)
        .then(res => {
          this.tasks[index].push(res);
          this.inputContent = "";
        });
    }
  }

  removeItems($event) {
    var columnIndex = parseInt($event.target.parentNode.id);
    var childNodes = $event.target.parentNode.childNodes;
    var index = this.findIndexOfParentNode(childNodes, $event.target);
    this.homeService.removeItem(this.tasks[columnIndex][index]['id'])
      .then(res => {
        this.tasks[columnIndex].splice(index, 1);
      });
  }

  findIndexOfParentNode(childNodes, node) {
    let index = -1;
    for (let i = 0; i < childNodes.length; i++){
      if (childNodes[i] == node){
        return index;
      }
      if (childNodes[i].nodeType == 1){
        index++;
      }
    }
  }

  onMoveDrop(e: any) {
    console.log(e.nativeEvent.target);
    let columnIndex;
    if (e.nativeEvent.target.className.includes("task-column")){
      columnIndex = e.nativeEvent.target.id;
      this.tasks[columnIndex].push(this.movedItem);
      let index = this.tasks[columnIndex].length - 1;
    }
    else if(e.nativeEvent.target.className.includes("item")) {
      columnIndex = e.nativeEvent.target.parentNode.id;
      let index = this.findIndexOfParentNode(e.nativeEvent.target.parentNode.childNodes, e.nativeEvent.target);
      this.tasks[columnIndex].splice(index, 0, this.movedItem);
    }
    this.lock = false;
    this.homeService.changeColumn(this.movedItem['id'], columnIndex)
      .then(res => {
        this.movedItemIndex = [];
        this.movedItem = null;
      });
  }

  onErrorMoveDrop(e: any) {
    this.tasks[this.movedItemIndex[1]].splice(this.movedItemIndex[0], 0, this.movedItem);
    this.lock = false;
    this.movedItemIndex = [];
    this.movedItem = null;
  }

  onMoveDrag(e: any) {
    if (!this.lock){
      this.lock = true;
      let columnIndex = e.target.parentNode.id;
      let index = this.findIndexOfParentNode(e.target.parentNode.childNodes, e.target);
      this.movedItem = this.tasks[columnIndex][index];
      this.movedItemIndex.push(index, columnIndex);
      console.log(this.movedItemIndex, this.movedItem);
      this.tasks[columnIndex].splice(index, 1);
    }
  }
}
