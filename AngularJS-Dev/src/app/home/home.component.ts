import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
  animations: [
    trigger('tasks', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateX(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateX(0)', offset: 0}),
            style({opacity: .5, transform: 'translateX(-35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateX(75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ]),
    ]
})

export class HomeComponent implements OnInit {

  movedItem:any;
  movedItemIndex = [];

  addedItemColumn: number;
  displayedItem: any;
  changedPriorityItem = [];

  lock:boolean = false;

  inputContent: string = "";
  columnId: number;
  tasks = [[], [], [], []];
  titles = ["opened", "doing", "todo", "review"];

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.homeService.getData()
      .then((res) => {
        for (var i = 0; i < res['tasks'].length; i++) {
          this.tasks[res['tasks'][i]['columnId']].push(res['tasks'][i]);
        }
      }
    );
  }

  addItems($event) {
    if (this.inputContent != ""){
      this.homeService.addItem(this.addedItemColumn, this.inputContent)
        .then(res => {
          this.tasks[this.addedItemColumn].push(res);
          this.inputContent = "";
          this.addedItemColumn = null;
          document.getElementById('create-new-form').style.display = 'none';
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

  addNewTask(e: any) {
    this.addedItemColumn = e.target.parentNode.id;
    document.getElementById('create-new-form').style.display = 'block';
  }

  hideThisForm(e: any){
    e.target.style.display = 'none';
  }

  notHideThisForm(e: any){
    e.stopPropagation();
  }

  changeIsDoneState(e: any) {
    e.stopPropagation();
    let columnIndex = e.target.parentNode.parentNode.id;
    let index = this.findIndexOfParentNode(e.target.parentNode.parentNode.childNodes, e.target.parentNode);
    this.homeService.changeIsDoneState(this.tasks[columnIndex][index]['id'])
      .then( (res) => {
        this.tasks[columnIndex][index]['isDone'] = res['isDone'];
        }
      )
  }

  displayItemDetail(e: any) {
    document.getElementById('detail-form').style.display = 'block';
    let columnIndex = e.target.parentNode.id;
    let index = this.findIndexOfParentNode(e.target.parentNode.childNodes, e.target);
    this.displayedItem = this.tasks[columnIndex][index];
  }

  changePriority(e: any) {
    e.stopPropagation();
    let columnIndex = e.target.parentNode.parentNode.id;
    let index = this.findIndexOfParentNode(e.target.parentNode.parentNode.childNodes, e.target.parentNode);
    this.changedPriorityItem.push(columnIndex, index);
    document.getElementById('priority-form').style.display = 'block';
  }

  setPriority(e: any) {
    if (e.target && e.target.nodeName == "LI") {
      let priority = e.target.value;
      let row = this.changedPriorityItem[0];
      let col = this.changedPriorityItem[1];
      this.homeService.changePriority(this.tasks[row][col]['id'], priority)
        .then((res) => {
          document.getElementById('priority-form').style.display = 'none';
          this.tasks[row][col]['priority'] = res['priority'];
        })
    }
  }
}
