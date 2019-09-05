/*
* scroll-slide.js
* scroll options for slider & content
*/

function modalHandlers(nodes) {
  console.log('nodes = ', nodes);
  for (modal of nodes) {
    let id = modal.getAttribute('id');
    console.log('modal id = ', id);
    document.getElementById(id).addEventListener('touchstart', modalContent, false);
  }
}

function modalContent(){
  console.log('modal called...');

  // style modal
  this.style.zIndex = 20;
  this.style.position = 'fixed';
  this.style.top = 0;
  this.style.left = 0;
  this.style.width = '100%';
  this.style.height = '100%';
  this.style.padding = 'auto';
  this.style.backgroundColor = '#fadb48';

  // // style parent background
  // let parentId = this.parentNode.getAttribute('id');
  // document.getElementById(parentId).style.backgroundColor = '#fadb48';
  // document.getElementById(parentId).style.color = '#fadb48';



}
