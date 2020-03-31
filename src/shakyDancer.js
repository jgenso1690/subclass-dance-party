var makeShakyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = makeDancer.prototype.step;
  // this.oldStep = makeDancer.prototype.step.bind(this);

  // this.$node = $('<span class="dancer"></span>');
  // return blinkyDancer;
  // this.step();
  this.$node2 = $('<img src="src/images/joker2.png" class ="batmanpic" alt="batman">');
  this.$node.append(this.$node2);
  this.setPosition(top, left);
  this.change = true;
};

makeShakyDancer.prototype = Object.create(makeDancer.prototype);
makeShakyDancer.prototype.constructor = makeShakyDancer;

makeShakyDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  // makeDancer.prototype.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // console.log(this.$node);
  // this.$node.toggle();
  if (this.change) {
    this.setPosition(this.top + 3);
  } else {
    this.setPosition(this.top - 3);
  }
  this.change = !this.change;

  // this.$node.toggle(); .toggle( "bounce", { times: 3 }, "slow" )
};