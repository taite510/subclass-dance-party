var makeJumpDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.jump();
};

makeJumpDancer.prototype = Object.create(makeDancer.prototype);

makeJumpDancer.prototype.constructor = makeJumpDancer;

// makeJumpDancer.prototype.step = function() {
//   console.log('I am a step from the JumpDancer');
//   makeDancer.prototype.step.call(this);
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle(1000);

//   // this.$node.animate({


//   // }, 2000);
// };

makeJumpDancer.prototype.jump = function() {
  this.$node.addClass('jump');

};