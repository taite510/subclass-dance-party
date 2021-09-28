describe('chameleonDancer', function() {

  var chameleonDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    chameleonDancer = new makeChameleonDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(chameleonDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(chameleonDancer.$node, 'toggle');
    jumpyDancer.step();
    expect(chameleonDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(chameleonDancer, 'step');
      expect(chameleonDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(chameleonDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(chameleonDancer.step.callCount).to.be.equal(2);
    });
  });
});