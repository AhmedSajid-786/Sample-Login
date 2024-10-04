let crsr = document.querySelector('.cursor');

let crsrb = document.querySelector('.cursorblur');



document.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+'px'
  crsrb.style.left = dets.x - 100 +'px'
  crsrb.style.top = dets.y - 100 +'px'
})
