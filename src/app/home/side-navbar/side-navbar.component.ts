import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions, ITreeState } from 'angular-tree-component';



import { CommonService } from '../../service/common.service';

@Component({
		selector: "app-side-navbar",
		templateUrl: "./side-navbar.component.html",
		styleUrls: ["./side-navbar.component.css"]
	})

export class SideNavbar {
	@ViewChild('tree') treeRef : any;

	private treeInitializeFlag : boolean = false;
	private currentRoute : string  = '';
	private routerSubscriber;
	private needToCollapseAfterNavigate : boolean = false;
	
	constructor(
		private commonService : CommonService,
		private router : Router
		) {
		// Call on route change
        this.routerSubscriber = router.events.subscribe( (event: Event) => {
           if (event instanceof NavigationEnd) {
           		// Save current route in currentRoute var
                this.currentRoute = event.urlAfterRedirects.replace('/','');
                this.treeInitializeFlag && this.collapseAndSetActiveNode();
            }
        });
	}
	// Unsubscribe routerSubscriber
	ngOnDestroy() {
		this.routerSubscriber.unsubscribe();
	}
	// Collapse All node and set active node
	private collapseAndSetActiveNode() {
		this.treeRef.treeModel.collapseAll();
        setTimeout(() => {
         // this.treeRef.treeModel.getNodeById(node.data.id);
	     this.commonService.isSideBarExpand && this.treeRef.treeModel.getNodeBy((node) => node.data.route === this.currentRoute).setActiveAndVisible();
		},0);
	}
 	// On collapse Menu collapse all node otherwise 
    menuToggle() {
    	this.needToCollapseAfterNavigate = false;
    	localStorage.isSideBarExpand = this.commonService.isSideBarExpand;
		this.commonService.isSideBarExpand ? this.collapseAndSetActiveNode() : this.treeRef.treeModel.collapseAll();
		// userPre
	}
	// Get State of tree
	get state(): ITreeState {
		let temp = localStorage.treeState;
		if (temp) {
			temp = JSON.parse(temp);
			this.commonService.isSideBarExpand || (temp.expandedNodeIds = {});
		}
	    return temp;
	}
	// Set State of tree
	set state(state: ITreeState) {
	    localStorage.treeState = JSON.stringify(state);
	}
 	// Call On initialization of tree component
	treeRootEvent (data) {
		switch (data.eventName) {
			case "initialized": {
				this.treeInitializeFlag = true;
				var selectedNode = data.treeModel.getActiveNode();
				if (selectedNode)
					this.router.navigate([selectedNode.data.route]);
				else if(this.currentRoute)
					this.collapseAndSetActiveNode();
				break;
			}
		}
	}
	// Provide Menu Array to tree component
	nodes = this.commonService.appMenus;
	// Provide options Object to tree component
	options: ITreeOptions = {
	 //    displayField: 'nodeName',
	 //    isExpandedField: 'expanded',
	     idField: 'controller_id',
	 //    hasChildrenField: 'nodes',
	 //    nodeHeight: 1,
	 //    allowDrag: (node) => {
	 //      return true;
	 //    },
	 //    allowDrop: (node) => {
	 //      return true;
	 //    },
	 //    useVirtualScroll: true,
	 //    animateExpand: true,
	 //    scrollOnActivate: true,
	 //    animateSpeed: 30,
	 //    animateAcceleration: 1.2,
	  	actionMapping : {
		  mouse: {
		    // contextMenu: (tree, node, $event) => {
		    //   $event.preventDefault();
		    //   alert(`context menu for ${node.data.name}`);
		    // },
		    // dblClick: (tree, node, $event) => {
		    //   if (node.hasChildren) {
		    //     TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
		    //   }
		    // },
		    // dblClick: (tree, node, $event) => {
		    //   if (node.hasChildren) {
		    //     TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
		    //   }
		    // },
		    click: (tree, node, $event) => {
		      //tree.collapseAll();
		      //$event.preventDefault();
		      if (node.hasChildren) {
		      	TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
		      	if (!this.commonService.isSideBarExpand) {
	      			this.commonService.isSideBarExpand = true;
	      			this.needToCollapseAfterNavigate = true;
		      	}
		      } else {
		      	TREE_ACTIONS.ACTIVATE(tree, node, $event);
		      	this.router.navigate([node.data.route]);
		      	if (this.needToCollapseAfterNavigate) {
		      		this.commonService.isSideBarExpand = false;
		      		this.menuToggle();
		      	}
		      }
		      	
		      // $event.shiftKey
		      //   ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
		      //   : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
		    }
		  },
		  keys: {
		    [KEYS.ENTER]: (tree, node, $event) => {
		    	if (!node.hasChildren)
		    		this.router.navigate([node.data.route]);
		    	//alert(`This is ${node.data.name}`)
		    }
		  }
		}
	};
}

// nodes
// hasChildren: For async data load. Denotes that this node might have children, even when 'children' attr is empty.
// isExpanded: Determines whether the node starts as expanded by default. Notice that this field is not bindable, meaning that changing it doesn't affect the tree and vice versa.
