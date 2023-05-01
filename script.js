$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
      container: 'body'
  });
}); 
$('.popover-dismiss').popover({
  trigger: 'focus'
});
//This was the most annoying thing to mess with in my life. I ended up limiting my use of JS to what was necessary to allow popovers to function, and even those were actually copied from the BS docs.
