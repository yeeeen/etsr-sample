  $(document).ready(function(){
            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','none');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            }

$(document).ready(function(){
    
    var ias = $.ias({
  container:  "#articleListContainer",
  item:       ".articleStart",
  pagination: "#pagination",
  next:       ".next a"
});

ias.extension(new IASSpinnerExtension());            // shows a spinner (a.k.a. loader)
ias.extension(new IASTriggerExtension({offset: 1})); // shows a trigger after page 3
ias.extension(new IASNoneLeftExtension({
  text: 'You reached the end.'      // override text when no pages left
}));
    
});