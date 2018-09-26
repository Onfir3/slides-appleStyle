var allButtons = $('#buttons > li')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var px = index * -920
        $('#images').css({
            transform: 'translateX(' + px + 'px)'
        })
        n = index
       activeButton(allButtons.eq(n))
    })
}

var n=0;
var size = allButtons.length;
playSlide(n%size)

var timerId = setTimer()

function setTimer(){
  return setInterval(() =>{
  n += 1
  playSlide(n%size)
 },10000)
}

function playSlide(index){
  allButtons.eq(index).trigger('click')
}

function activeButton($button){
   $button
  .addClass('act')
  .siblings('.act').removeClass('act')
}

$('.window').on('mouseenter',function(){
  window.clearInterval(timerId)
})
$('.window').on('mouseleave',function(){
  timerId = setTimer()
})




