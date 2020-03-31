var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node2 = $('<img src="src/images/batman.png" class ="batmanpic" alt="batman">');
  this.$node.append(this.$node2);

  this.change = true;
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // setTimeout(this.step.bind(this), this.timeBetweenSteps);

  if (this.change) {
    this.setPosition(this.top + 7, this.left);
  } else {
    this.setPosition(this.top - 7, this.left);
  }
  // this.$node.toggle('shake');
  this.change = !this.change;
  // this.setPosition(bounce(this.top), this.left);


};