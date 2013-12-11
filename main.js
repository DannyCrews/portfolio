var Page = {

  setNavigationClicks: function(){
    $('.navigation-wrapper a').click(function(e){
      if (!$(e.currentTarget).hasClass('direct-link')) {
      e.preventDefault();
      Page.scrollToSection($(e.currentTarget).attr('href'))};
    });
  },

  scrollTo: function(yValue){
    $('html body').animate({
      'scrollTop':yValue
    }, 1000);
    },

  scrollToSection: function(sectionString){
    var sectionClass = "." + sectionString;
    Page.scrollTo($(sectionClass).offset().top - 100);
  },

  setProjectHover: function() {
    $('.project').hover(function(){
      $(this).find('img').first().transition({
        opacity: "1"
      })
      $(this).find('.project-link').first().css('display', 'block');
    }, function(){
      $(this).find('img').first().transition({
        opacity: "0.9"
    });
      $(this).find('.project-link').first().css('display', 'none');
  });
}
};

$(function(){
  Page.setNavigationClicks();
  Page.setProjectHover();
})