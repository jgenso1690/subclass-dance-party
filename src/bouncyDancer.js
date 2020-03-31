var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = makeDancer.prototype.step;
  // this.oldStep = makeDancer.prototype.step.bind(this);
  // this.$node = $('<span class="dancer"></span>');
  //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F211598882472118761%2F&psig=AOvVaw1tAv6bU3u2w4JUNrpZybcm&ust=1585711751902000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj7jOHiw-gCFQAAAAAdAAAAABAF
  // https://img.brickowl.com/files/image_cache/larger/lego-batman-with-short-legs-minifigure-25.jpg
  this.$node2 = $('<img src="src/images/batman.png" class ="batmanpic" alt="batman">');
  this.$node.append(this.$node2);
  // return blinkyDancer;
  // // this.step();
  this.change = true;
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  // makeDancer.prototype.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // console.log(this.$node);
  // this.$node.bounce();
  if (this.change) {
    this.setPosition(this.left + 7);
  } else {
    this.setPosition(this.left - 7);
  }
  // this.$node.toggle('shake');
  this.change = !this.change;
  // this.setPosition(bounce(this.top), this.left);


};