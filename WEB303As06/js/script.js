$(document).ready(function () {
  $('.accord-label1').on('click', function (e) {
    //prevent the default button action to prevent the submit function
    e.preventDefault();
    //get the button that we are clicking
    let $this = $(this);
    //  loop through every panel
    $('accord.panel1').each(function () {
      //make sure that showing class is removed 
      $this.removeClass('showing');

    })
    //show the panel that is for the button we clicked
    $this.toggleClass('showing');
    $this.next().slideToggle();


    //hide other panels
    $('.accord-panel1').not($this.next()).slideUp();

  });
   $('.accord-label2').on('click', function (e) {
    //prevent the default button action to prevent the submit function
    e.preventDefault();
    //get the button that we are clicking
    let $this = $(this);
    //  loop through every panel
    $('accord.panel2').each(function () {
      //make sure that showing class is removed 
      $this.removeClass('showing');

    })
    //show the panel that is for the button we clicked
    $this.toggleClass('showing');
    $this.next().slideToggle();


    //hide other panels
    $('.accord-panel2').not($this.next()).slideUp();

  });


  //tab panels
  // hidden all the panels
  $('.tab-panel').hide();
  $('#tab1').show();

  $('.tab-list li').on('click', function (e) {
    e.preventDefault();
    //remove the active class
    $('.tab-list li').removeClass('active');

    //hide the panel
    $('.tab-panel').hide();

    //make the li that we clicked active
    $(this).addClass('active');

    //find the right href and id
    let panel = $(this).find('a').attr('href');
    $(panel).show();
    return false;
  });
});
