function isOnVisibleSpace(element) {
  var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset   = elemRect.top;
  if(offset<0) return false;
  if(offset>bodyHeight) return false;
  return true;
}

var listenedElements = [];

window.onscroll = function() {
	listenedElements.forEach(item=>{

  	var result = isOnVisibleSpace(item.el);
    
    if(item.el.isOnVisibleSpace && !result){
    	item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    }

    if(!item.el.isOnVisibleSpace && result){
    	item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
}

function onVisibleSpaceListener(elementId, cbIn, cbOut) {
  var el = document.getElementById(elementId);

  listenedElements.push({
  	el: el,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut    
  });
}

onVisibleSpaceListener("works", 
	el=>{
        document.querySelector('.works__item_g').style.animationDuration = '3.5s';
        document.querySelector('.works__item_g').style.animationName = 'slideleftwork';
        document.querySelector('.works__item_g').style.animationDelay = '1.5s';
        document.querySelector('.works__item_g').style.animationFillMode = 'backwards';

        document.querySelector('.works__item_v').style.animationDuration = '3.5s';
        document.querySelector('.works__item_v').style.animationName = 'sliderightwork';
        document.querySelector('.works__item_v').style.animationDelay = '1.5s';
        document.querySelector('.works__item_v').style.animationFillMode = 'backwards';
	},
	el=>{

	}
);