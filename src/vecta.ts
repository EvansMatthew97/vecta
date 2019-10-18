/**
 * 2D vector class.
 * 
 * This class is designed to be immutable. The x and y coordinates are
 * private and so should not be changed. None of the class methods
 * change these values - they instead all return a new Vecta with
 * equal values.
 * 
 * All methods are designed with chaining in mind, unless it returns
 * a scalar value.
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
   * Creates a new vector at a pseudorandom point in a rectangle
   * defined by the * given top-left and bottom-right corners.
   *       topLeft
   *           v---------------
   *           |              |
   *           |              |
   *           |              |
   *           |  r           |  <-- R might be the random location
   *           |              |
   *           ---------------v
   *                        bottomRight
   * @param topLeft The top-left corner of the square
   * @param bottomRight The bottom-right corner of the square
   */
  public static random(topLeft: Vecta, bottomRight: Vecta) {
    const minX = Math.min(topLeft.x, bottomRight.x);
    const maxX = Math.max(topLeft.x, bottomRight.x);

    const minY = Math.min(topLeft.y, bottomRight.y);
    const maxY = Math.max(topLeft.y, bottomRight.y);

    return new Vecta(
      Math.random() * (maxX - minX) + minX,
      Math.random() * (maxY - minY) + minY,
    );
  }

  /**
   * Converts an object containing the properties x and y of type
   * number into a Vecta
   * @param ob 
   */
  public static fromObject(ob: { x: number, y: number }): Vecta {
    return new Vecta(ob.x, ob.y);
  }

  /**
   * Returns a new Vecta with the same x and y values.
   */
  public clone() {
    return new Vecta(this.x, this.y);
  }

  /**
   * Returns the vector's x value
   */
  public getX() {
    return this.x;
  }

  /**
   * Returns the vector's y value
   */
  public getY() {
    return this.y;
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
   * Adds the given scalar to both axes of the vecta and returns
   * a new Vecta with the result
   * @param scalar 
   */
  public addScalar(scalar: number) {
    return new Vecta(this.x + scalar, this.y + scalar);
  }

  /**
   * Adds the given scalar value to the vector's x axis and returns
   * a new Vecta with the result.
   * @param scalar 
   */
  public addScalarX(scalar: number) {
    return new Vecta(this.x + scalar, this.y);
  }

  /**
   * Adds the given scalar value to the vector's y axis and returns
   * a new Vecta with the result.
   * @param scalar 
   */
  public addScalarY(scalar: number) {
    return new Vecta(this.x, this.y + scalar);
  }


  /**
   * Subtracts the x coordinate of the given vector from this
   * Vecta's x coordinate and does the same for the y value.
   * Returns the result in a new Vecta.
   * @param vector 
   */
  public sub(vector: Vecta) {
    return new Vecta(this.x - vector.x, this.y - vector.y);
  }

  /**
   * Subtracts the x coordinate of the given vector from this
   * vecta's x coordinate and returns a new Vecta with the result
   * @param vector 
   */
  public subX(vector: Vecta) {
    return new Vecta(this.x - vector.x, this.y);
  }

  /**
   * Subtracts the y coordinate of the given vector from this
   * vecta's y coordinate and returns a new Vecta with the result
   * @param vector 
   */
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

  public normalize() {
    const magnitude = this.magnitude();

    if (magnitude === 0) {
      return new Vecta(0, 0);
    }

    return new Vecta(this.x / magnitude, this.y / magnitude);
  }

  public limit(max: number, factor: number) {
    return new Vecta(
      Math.abs(this.x) > max ? this.x * factor : this.x,
      Math.abs(this.y) > max ? this.y * factor : this.y,
    );
  }

  /**
   * Rounds the x and y coordinates
   */
  public round() {
    return new Vecta(
      Math.round(this.x),
      Math.round(this.y),
    );
  }

  /**
   * Interpolates between two vectors. Factor indicates how progressed (between 0 and 1)
   * the interpolation is towards the given vector. The interpolation method allows for
   * nonlinear interpolation
   * @param vector The vector to interpolate to
   * @param factorX Progression towards vector (0 to 1) on x axis
   * @param factorY Progression towards vector (0 to 1) on y axis
   */
  public interpolate(vector: Vecta, factorX: number, factorY: number) {
    return new Vecta(
      (1 - factorX) * this.x + factorX * vector.x,
      (1 - factorY) * this.y + factorY * vector.y,
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
