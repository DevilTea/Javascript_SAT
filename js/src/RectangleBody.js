class RectangleBody extends Body {
    constructor(x, y, width, height) {
        super(x, y)
        this.originalVertices.push(new Vector(-width / 2, -height / 2))
        this.originalVertices.push(new Vector(width / 2, -height / 2))
        this.originalVertices.push(new Vector(width / 2, height / 2))
        this.originalVertices.push(new Vector(-width / 2, height / 2))
        this.originalVertices.forEach((vertex) => {
            this.predictionVertices.push(Vector.copy(vertex))
            this.currentVertices.push(Vector.copy(vertex))
            this.previousVertices.push(Vector.copy(vertex))
        })
    }
}