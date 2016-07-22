import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from './tree-node';
import {Store} from './redux/store';
import {TreeNodeService} from './tree-node-service';

@Component({
  templateUrl:'./components/lazy-loaded-tree-view/tree-view.html',
  selector:'tree-view',
  directives:[TreeView]
})

export class TreeView implements OnInit{

  @Input() root:TreeNode;
  children:any;
  items = [];
  subscription;

  constructor(private _store:Store, private _treeNodeService:TreeNodeService){
  }

  ngOnInit(){
    this.subscription = this._store.getTreeNodes(this.root.key).subscribe(res => {
      this.items = res;
    });
    this._treeNodeService.loadTreeNodes(this.root);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}