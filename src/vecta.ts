/**
 * 2D vector class
 */
export class Vecta {

  /**
   * Constructor
   * @param x The vector's x coordinate
   * @param y The vector's y coordinate
   */
  constructor(
    private x: number,
    private y: number,
  ) {}

  /**
   * Converts an array containing two numbers in the format [x, y]
   * into a Vecta
   * @param array 
   */
  public static fromArray(array: [number, number]): Vecta {
    return new Vecta(array[0], array[1]);
  }

  /**
   * Converts an object containing the properties x and y of type
   * number into a Vecta
   * @param ob 
   */
  public static fromObject(ob: { x: number, y: number }): Vecta {
    return new Vecta(ob.x, ob.y);
  }

  public clone() {
    return new Vecta(this.x, this.y);
  }

  /**
   * Adds the x coordinates of the two vectors together and
   * returns a new Vecta with the result
   * @param vector 
   */
  public addX(vector: Vecta): Vecta {
    return new Vecta(this.x + vector.x, this.y);
  }

  /**
   * Adds the y coordinates of the two vectors together and
   * returns a new Vecta with the result
   * @param vector 
   */
  public addY(vector: Vecta): Vecta {
    return new Vecta(this.x, this.y + vector.y);
  }

  /**
   * Adds the x dimension of the vectors together and the
   * y dimension of the vector together and returns a new
   * Vecta with the result.
   * @param vector 
   */
  public add(vector: Vecta): Vecta {
    return new Vecta(this.x + vector.x, this.y + vector.y);
  }

  /**
   * Adds the given scalar to both axes of the vecta and returns
   * a new Vecta with the result
   * @param scalar 
   */
  public addScalar(scalar: number) {
    return new Vecta(this.x + scalar, this.y + scalar);
  }

  public addScalarX(scalar: number) {
    return new Vecta(this.x + scalar, this.y);
  }

  public addScalarY(scalar: number) {
    return new Vecta(this.x, this.y + scalar);
  }

  public sub(vector: Vecta) {
    return new Vecta(this.x - vector.x, this.y - vector.y);
  }

  public subX(vector: Vecta) {
    return new Vecta(this.x - vector.x, this.y);
  }

  public subY(vector: Vecta) {
    return new Vecta(this.x, this.y - vector.y);
  }

  public subScalar(scalar: number) {
    return new Vecta(this.x - scalar, this.y - scalar);
  }

  public subScalarX(scalar: number) {
    return new Vecta(this.x - scalar, this.y);
  }

  public subScalarY(scalar: number) {
    return new Vecta(this.x, this.y - scalar);
  }

  public div(vector: Vecta) {
    return new Vecta(this.x / vector.x, this.y / vector.y);
  }

  public divX(vector: Vecta) {
    return new Vecta(this.x / vector.x, this.y);
  }

  public divY(vector: Vecta) {
    return new Vecta(this.x, this.y / vector.y);
  }

  public divScalar(scalar: number) {
    if (scalar === 0) {
      return new Vecta(0, 0);
    }
    return new Vecta(this.x / scalar, this.y / scalar);
  }

  public divScalarX(scalar: number) {
    if (scalar === 0) {
      return new Vecta(0, this.y);
    }
    return new Vecta(this.x / scalar, this.y);
  }

  public divScalarY(scalar: number) {
    if (scalar === 0) {
      return new Vecta(this.x, 0);
    }
    return new Vecta(this.x, this.y / scalar);
  }

  public mul(vector: Vecta) {
    return new Vecta(this.x * vector.x, this.y * vector.y);
  }

  public mulX(vector: Vecta) {
    return new Vecta(this.x * vector.x, this.y);
  }

  public mulY(vector: Vecta) {
    return new Vecta(this.x, this.y * vector.y);
  }

  public mulScalar(scalar: number) {
    return new Vecta(this.x * scalar, this.y * scalar);
  }

  public mulScalarX(scalar: number) {
    return new Vecta(this.x * scalar, this.y);
  }

  public mulScalarY(scalar: number) {
    return new Vecta(this.x, this.y * scalar);
  }

  public invert() {
    return new Vecta(this.x * -1, this.y * -1);
  }

  public invertX() {
    return new Vecta(this.x * -1, this.y);
  }

  public invertY() {
    return new Vecta(this.x, this.y * -1);
  }

  public magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public length() {
    return this.magnitude();
  }

  public normalize() {
    const magnitude = this.magnitude();

    if (magnitude === 0) {
      return new Vecta(1, 0);
    }

    return new Vecta(this.x / magnitude, this.y / magnitude);
  }

  public limit(max: number, factor: number) {
    return new Vecta(
      Math.abs(this.x) > max ? this.x * factor : this.x,
      Math.abs(this.y) > max ? this.y * factor : this.y,
    );
  }

  public random(topLeft: Vecta, bottomRight: Vecta) {
    return new Vecta(
      Math.random() * (bottomRight.x - topLeft.x) + topLeft.x,
      Math.random() * (topLeft.y - bottomRight.y) + bottomRight.y,
    );
  }

  public round() {
    return new Vecta(
      Math.round(this.x),
      Math.round(this.y),
    );
  }

  public interpolate(vector: Vecta, factorX: number, factorY: number) {
    return new Vecta(
      (1 - factorX) * this.x + factorX * vector.x,
      (1 - factorY) * this.x + factorY * vector.y,
    );
  }

  public zero() {
    return new Vecta(0, 0);
  }

  public dotProduct(vector: Vecta) {
    return this.x * vector.x + this.y * vector.y;
  }

  public crossProduct(vector: Vecta) {
    return this.x * vector.y - this.y * vector.x;
  }

  public angleRad(horizontal = true) {
    return Math.atan2(this.y, this.x);
  }

  public angle() {
    return this.angleRad() * 180 / Math.PI;
  }

  public rotateRad(radians: number): Vecta {
    return new Vecta(
      this.x * Math.cos(radians) - this.y * Math.sin(radians),
      this.x * Math.sin(radians) + this.y * Math.cos(radians),
    );
  }

  public rotate(degrees: number) {
    return this.rotateRad(degrees / 180 * Math.PI);
  }

  public distance(vector: Vecta) {
    const dx = vector.x - this.x;
    const dy = vector.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  public toString() {
    return `Vecta { x: ${this.x}, y: ${this.y} }`;
  }
}
