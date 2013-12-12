$(function() {
  Page.openCloseDropdown();
  Page.setPageResizeEvents();
  Page.setNavigationClicks();
  Page.setBarViewType();
})


var Page = {

  setPageResizeEvents: function() {
    $(window).resize(function() {
      Page.setBarViewType();
    });
  },

  setNavigationClicks: function() {
    $('.hamburger').click(function(e) {
      e.preventDefault();
      Page.openCloseDropdown();
    });

    $('.buttons-wrapper a').click(function(e) {
      e.preventDefault();
    })

  },

  openCloseDropdown: function() {
    if($('.buttons-wrapper').hasClass('closed')) {
      $('.buttons-wrapper').removeClass('closed').addClass('open');
    } else {
      $('.buttons-wrapper').removeClass('open').addClass('closed');
    }
  },

  setBarViewType: function() {
    if($(window).width() < 1000) {
      $('.buttons-wrapper').removeClass('open').addClass('closed')
    } else {
      $('.buttons-wrapper').removeClass('closed').addClass('open')
    }
  }

}