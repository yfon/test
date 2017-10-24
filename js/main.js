
'use strict';

$(function() {

  function resize() {
  
    var windowWidth = $(window).width();
 
    var isSmallScreen = windowWidth < 768;
  

    $('#main_ad > .carousel-inner > .item').each(function(i, item) {
      // 因为拿到是DOM对象 需要转换
      var $item = $(item);
      // 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
      if (isSmallScreen) {
        $item.html('<img src="' + $item.data('image-xs')+ '" alt="" />');
      } else {
        $item.css('backgroundImage', 'url("' + $item.data('image-lg') + '")');
        $item.empty();
      }
    });
  }
  // $(window).on('resize', resize);
  // // 让window对象立即触发一下resize，resize为屏幕变化，发生的事件
  // $(window).trigger('resize');


  $(window).on('resize', resize).trigger('resize');
});
