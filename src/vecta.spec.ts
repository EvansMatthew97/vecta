import { expect } from 'chai';

import { Vecta } from '.';

describe('instantiation', () => {
  describe('new vector', () => {
    const vec = new Vecta(0, 0);
    
    it('should be an instance of Vecta', () => {
      expect(vec).to.be.an.instanceOf(Vecta);
    });
  });
});