'use strict';
class BinaryTree {
	constructor() {
		this.root=null;
	}

				insert(data) {
					var node = {
						data: data,
						left: null,
						right: null
					};
					var current;
					current = this.root;
					if (this.root == null ) {
						this.root = node;
					} else {
						recurse();
						function recurse() {
							if (data > current.data && current.right == null) {
								current.right = node;
							} else if (data < current.data && current.left == null) {
								current.left = node;
							} else if ( current.right!=null && data > current.data ) {
								/*this.root.right=current.right;*/
								current = current.right;
								recurse();
							} else if ( current.left!=null && data < current.data ) {
								/*this.root.left=current.left;*/
								current = current.left;
								recurse();
							}
						}
					}

				}

				contains(data)
				{
					var current;
					current = this.root;
					restInPiace();
					function restInPiace()
					{
						
						if (data == current.data) {
							return true;
						} else if (current.right != null && data > current.data) {
							current = current.right;
							if (current.data == data) {
								return true;
							}else restInPiace();
						} else if (current.left != null && data < current.data) {
							current = current.left;
							if (current.data == data) {
								return true;
							}else restInPiace();
						} else return false;
					}
					return restInPiace();
				}

				remove(data)
				{
					var current;
					var parent;
					current = this.root;
					restInPiace();
					
					function restInPiace() {
						if(current.data==data && current.left==null && current.right==null){
							current.data=null;
						}
						else if (current.right != null && data > current.data) {
							 parent=current;
							 current = current.right;
							 if(parent.data==data && parent.left==null && parent.right==null){
								 parent.right=null;
							 }else if(current.data==data && current.left!=null && current.right==null){
								 parent.right=current.left;
							 } else if(current.data==data && current.left!=null && current.right!=null){
							 	var thirdSpecparent;
							 	thirdSpecparent = current;
							 	current = current.right;
							 	var parentOflast;
							 	parentOflast=thirdSpecparent;
								 	while (current.left!=null)
								 	{
								 		parentOflast=current;
								 		current=current.left;
								 	}	
							 	parentOflast.right = null;
							 	thirdSpecparent.data  = current.data;
							 }  else restInPiace();
						} else if (current.left != null && data < current.data) {
							 parent=current;
							 current = current.left;
							 if(current.data==data && current.left==null && current.right==null){
								 parent.left=null;
							 }else if(current.data==data && current.left!=null && current.right==null){
								 parent.left=current.left;
							 }else if(current.data==data && current.left!=null && current.right!=null){
							 	var thirdSpecparent;
							 	thirdSpecparent = current;
							 	current = current.right;
							 	var parentOflast;
							 	parentOflast=thirdSpecparent;
								 	while (current.left!=null)
								 	{
								 		
								 		parentOflast=current;
								 		current=current.left;
								 	}	
							 	parentOflast.right = null;
							 	thirdSpecparent.data  = current.data;
							 }
							 else restInPiace();
						}

					}

				}

				size(){
					console.log(this.root);
					var length = 0;
					this.traverse(function(node){
						length++;
					});
					return length;

				}

				 traverse(process){
					function inOrder(node){
						if (node){
							if (node.left !== null){
								inOrder(node.left);
							}
							process.call(this, node);
							if (node.right !== null){
								inOrder(node.right);
							}
						}
					}
					inOrder(this.root);
				}


				

	isEmpty() {
		console.log(this.root);
		if(this.root==null || (this.root.data==null && this.root.left==null && this.root.right==null)){
			return true;
		}else return false;
	}
}
