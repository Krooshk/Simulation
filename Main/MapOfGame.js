class MapOfGame extends Entity {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.map = []; // array in JS - vector so i mean, that length of array equal (width * height)
  }
}