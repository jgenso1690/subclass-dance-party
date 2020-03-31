$(document).ready(function() {
  window.dancers = [];
  window.lineupcounter = 0;
  var log = function (event) {
    console.log(event);
  };

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    var dancerElements = document.getElementsByClassName('dancer');



    for (var thing of dancerElements) {
      thing.removeEventListener('mouseover', log);
      thing.addEventListener('mouseover', log);
    }

  });

  $('.lineupbutton').on('click', function(event) {
    for (var dncr of window.dancers) {
      dncr.lineUp();
      // console.log(dncr);
    }
    // console.log('did u line up?');
    // console.log(window.dancers);
  });
  $('.partnerupbutton').on('click', function(event) {
    // var rndm = function () {
    // };
    // console.log(window.dancers);
    for (var i = 0; i < window.dancers.length; i = i + 2) {
      window.dancers[i].partnerUp(window.dancers[i + 1]);
    }

  });

  // $('span.dancer').mouseover(function(event) {
  //   console.log(event);
  // });





});

