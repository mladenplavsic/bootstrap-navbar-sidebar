$(document).ready(function () {
  $('a[data-class]').click(function () {
    updateNavbarClass($(this).attr('data-class'));
  });

  updateNavbarClass('navbar-fixed-left');

});

function updateNavbarClass(className) {
  $('nav')
    .removeClass(function (index, css) {
      return (css.match(/(^|\s)navbar-fixed-\S+/g) || []).join(' ');
    })
    .addClass(className);

  $('a[data-class]').removeClass('active').parent('li').removeClass('active');
  $('a[data-class="'+className+'"]').addClass('active').parent('li').addClass('active');

  fixBodyMargin(className);

}

function fixBodyMargin(className) {
  if (/navbar-fixed-(left|right)/.test(className)) {
    $('body').removeAttr('style');
    if (className === 'navbar-fixed-right') {
      $('body').css('marginLeft', 0);
    } else {
      $('body').css('marginRight', 0);
    }
  } else {
    $('body').css({
      "margin-right": 0,
      "margin-left": 0,
      "padding-top": '70px'
    });
  }
}
