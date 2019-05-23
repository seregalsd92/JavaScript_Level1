"use strict";

function food() {
    let x = null;
    let y = null;

    function setFoodCoordinates(point) {
        x = point.x;
        y = point.y;
    }

    function getFoodCoordinates() {
        return {x: x, y: y};
    }

    function isFoodPoint(point) {
        return x === point.x && y === point.y;
    }

    return {
        setFoodCoordinates: setFoodCoordinates,
        getFoodCoordinates: getFoodCoordinates,
        isFoodPoint: isFoodPoint
    }
}
