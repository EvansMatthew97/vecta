import { expect } from 'chai';

import { Vecta } from '.';

const helpers = {
  shouldBeImmutable(vector: Vecta, originalX: number, originalY: number) {
    it('should be immutable', () => {
      expect(vector.getX()).to.equal(originalX);
      expect(vector.getY()).to.equal(originalY);
    });
  },

  shouldBeChainable(vector: Vecta) {
    it('should be chainable', () => {
      expect(vector).to.be.instanceOf(Vecta);
    });
  },
};

/**
 * Instantiation methods
 */
describe('instantiation', () => {
  describe('new vector', () => {
    const x = 11;
    const y = 22;
    const vec = new Vecta(x, y);
    
    it('should be an instance of Vecta', () => {
      expect(vec).to.be.an.instanceOf(Vecta);
    });

    it('should have axes from the constructor', () => {
      expect(vec.getX()).to.equal(x);
      expect(vec).to.have.property('x', x);

      expect(vec.getY()).to.equal(y);
      expect(vec).to.have.property('y', y);
    });
  });

  describe('fromArray', () => {
    const arr: [number, number] = [11, 22];
    const vec = Vecta.fromArray(arr);

    it('should be an instance of Vecta', () => {
      expect(vec).to.be.an.instanceOf(Vecta);
    })

    it('should have axes from the constructor', () => {
      expect(vec.getX()).to.equal(arr[0]);
      expect(vec).to.have.property('x', arr[0]);

      expect(vec.getY()).to.equal(arr[1]);
      expect(vec).to.have.property('y', arr[1]);
    });
  });

  describe('fromObject', () => {
    const ob = { x: 11, y: 22 };
    const vec = Vecta.fromObject(ob);

    it('should be an instance of Vecta', () => {
      expect(vec).to.be.an.instanceOf(Vecta);
    })

    it('should have axes from the constructor', () => {
      expect(vec.getX()).to.equal(ob.x);
      expect(vec).to.have.property('x', ob.x);

      expect(vec.getY()).to.equal(ob.y);
      expect(vec).to.have.property('y', ob.y);
    });
  });
});


describe('clone method', () => {
  const vec = new Vecta(10, 20);

  const res = vec.clone();

  helpers.shouldBeImmutable(vec, 10, 20);

  it('should not be the same object as the original vector', () => {
    expect(vec).to.not.equal(res);
  });

  it('should have the same valuese as the original vector', () => {
    expect(vec.getX()).to.equal(res.getX());
    expect(vec.getY()).to.equal(res.getY());
  });
});


/**
 * Addition methods
 */
describe('add methods', () => {
  describe('addX', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.addX(new Vecta(5, 12));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should only change the X axis', () => {
      expect(res.getX()).to.equal(15);
      expect(res.getY()).to.equal(20);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });

  describe('addY', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.addY(new Vecta(5, 12));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should only change the Y axis', () => {
      expect(res.getX()).to.equal(10);
      expect(res.getY()).to.equal(32);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });

  describe('add', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.add(new Vecta(5, 12));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should change the X and Y axis', () => {
      expect(res.getX()).to.equal(15);
      expect(res.getY()).to.equal(32);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });
});


/**
 * Subtraction methods
 */
describe('subtraction methods', () => {
  describe('subX', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.subX(new Vecta(5, 12));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should only change the X axis', () => {
      expect(res.getX()).to.equal(5);
      expect(res.getY()).to.equal(20);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });

  describe('subY', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.subY(new Vecta(5, 12));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should only change the Y axis', () => {
      expect(res.getX()).to.equal(10);
      expect(res.getY()).to.equal(8);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });

  describe('sub', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.sub(new Vecta(5, 12));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should change the X and Y axis', () => {
      expect(res.getX()).to.equal(5);
      expect(res.getY()).to.equal(8);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });
});


/**
 * Multiplication methods
 */
describe('multiplication methods', () => {
  describe('mulX', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.mulX(new Vecta(5, 12));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should only change the X axis', () => {
      expect(res.getX()).to.equal(50);
      expect(res.getY()).to.equal(20);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });

  describe('mulY', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.mulY(new Vecta(5, 12));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should only change the Y axis', () => {
      expect(res.getX()).to.equal(10);
      expect(res.getY()).to.equal(240);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });

  describe('mul', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.mul(new Vecta(5, 12));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should change the X and Y axis', () => {
      expect(res.getX()).to.equal(50);
      expect(res.getY()).to.equal(240);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });
});


/**
 * Division methods
 */
describe('division methods', () => {
  describe('divX', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.divX(new Vecta(5, 4));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should only change the X axis', () => {
      expect(res.getX()).to.equal(2);
      expect(res.getY()).to.equal(20);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });

  describe('divY', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.divY(new Vecta(5, 4));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should only change the Y axis', () => {
      expect(res.getX()).to.equal(10);
      expect(res.getY()).to.equal(5);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });

  describe('div', () => {
    const vec1 = new Vecta(10, 20);
    
    const res = vec1.div(new Vecta(5, 4));

    it('should be chainable', () => {
      expect(res).to.be.instanceOf(Vecta);
    });

    it('should change the X and Y axis', () => {
      expect(res.getX()).to.equal(2);
      expect(res.getY()).to.equal(5);
    });

    it('should be immutable', () => {
      expect(vec1.getX()).to.equal(10);
      expect(vec1.getY()).to.equal(20);
    });
  });
});


describe('magnitude method', () => {
  const vec1 = new Vecta(3, 4);
  const resMag1 = vec1.magnitude();

  const vec2 = new Vecta(24, 7);
  const resMag2 = vec2.magnitude();

  it('should be a scalar', () => {
    expect(resMag1).to.be.a('number');
    expect(resMag2).to.be.a('number');
  });

  helpers.shouldBeImmutable(vec1, 3, 4);
  helpers.shouldBeImmutable(vec2, 24, 7);

  it('should give the correct answer', () => {
    expect(resMag1).to.equal(5);
    expect(resMag2).to.equal(25);
  });
});


describe('normalize method', () => {
  const x = 24;
  const y = 7;

  const vec1 = new Vecta(x, y);
  const res = vec1.normalize();
  const correctX = x / 25;
  const correctY = y / 25;

  const vec2 = new Vecta(0, 0);
  const res2 = vec2.normalize();

  helpers.shouldBeChainable(res);
  helpers.shouldBeChainable(res2);

  helpers.shouldBeImmutable(vec1, x, y);
  helpers.shouldBeImmutable(vec2, 0, 0);

  it('should give the correct answer', () => {
    expect(res.getX()).to.equal(correctX);
    expect(res.getY()).to.equal(correctY);

    expect(res2.getX()).to.equal(0);
    expect(res2.getY()).to.equal(0);
  });
});


describe('limit method', () => {
  const vec = new Vecta(10, 30);
  const res = vec.limit(10, 0.5);

  helpers.shouldBeChainable(res);

  helpers.shouldBeImmutable(vec,10, 30);

  it('should give the correct answer', () => {
    expect(res.getX()).to.equal(10);
    expect(res.getY()).to.equal(15);
  });
});


describe('random method', () => {
  const topLeft = new Vecta(0, 10);
  const bottomRight = new Vecta(15, -5);

  const minX = Math.min(topLeft.getX(), bottomRight.getX());
  const maxX = Math.max(topLeft.getX(), bottomRight.getX());

  const minY = Math.min(topLeft.getY(), bottomRight.getY());
  const maxY = Math.max(topLeft.getY(), bottomRight.getY());

  const res = Vecta.random(topLeft, bottomRight);

  helpers.shouldBeImmutable(topLeft, 0, 10);
  helpers.shouldBeImmutable(bottomRight, 15, -5);

  it('should be within the given range', () => {
    expect(res.getX()).to.be.within(minX, maxX);
    expect(res.getY()).to.be.within(minY, maxY);
  });
});


describe('invert methods', () => {
  const x = 10;
  const y = -20;
  const correctX = -10;
  const correctY = 20;

  const vec = new Vecta(10, -20);

  describe('invert method', () => {
    const res = vec.invert();

    helpers.shouldBeImmutable(vec, x, y);
    helpers.shouldBeChainable(res);

    it('should give the correct results', () => {
      expect(res.getX()).to.equal(correctX);
      expect(res.getY()).to.equal(correctY);
    });
  });

  describe('invertX method', () => {
    const res = vec.invertX();

    helpers.shouldBeImmutable(vec, x, y);
    helpers.shouldBeChainable(res);

    it('should give the correct results', () => {
      expect(res.getX()).to.equal(correctX);
      expect(res.getY()).to.equal(y);
    });
  });

  describe('invertY method', () => {
    const res = vec.invertY();

    helpers.shouldBeImmutable(vec, x, y);
    helpers.shouldBeChainable(res);

    it('should give the correct results', () => {
      expect(res.getX()).to.equal(x);
      expect(res.getY()).to.equal(correctY);
    });
  });
});