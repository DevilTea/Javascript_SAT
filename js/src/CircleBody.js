class CircleBody extends PolygonBody {
    constructor(x, y, radius, maxSideQuantity = 25) {
        super(x, y, radius, Math.max(10, Math.min(radius, maxSideQuantity)))
    }
}