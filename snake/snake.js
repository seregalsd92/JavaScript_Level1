"use strict";
let snake = {
    body: null,
    direction: null,
    lastStepDirection: null,

    init(startPoint, direction) {
        this.body = [startPoint];
        this.direction = direction;
        this.lastStepDirection = direction;
    },

    getNextStepHeadPoint() {
        let firstPoint = this.body[0];

        switch (this.direction) {
            case 'up':
                return {x: firstPoint.x, y: firstPoint.y !== 0 ? firstPoint.y - 1 : settings.rowsCount - 1};
            case 'down':
                return {x: firstPoint.x, y: firstPoint.y !== settings.rowsCount - 1 ? firstPoint.y + 1 : 0};
            case 'right':
                return {x: firstPoint.x !== settings.colsCount - 1 ? firstPoint.x + 1 : 0, y: firstPoint.y};
            case 'left' :
                return {x: firstPoint.x !== 0 ? firstPoint.x - 1 : settings.colsCount - 1, y: firstPoint.y};
        }
    },

    /* teleport(nextHeadPoint) {
        let res = null;

        if (nextHeadPoint.x >= settings.colsCount) {
            res = {x: 0, y: nextHeadPoint.y};
        } else if (nextHeadPoint.y >= settings.rowsCount) {
            res = {x: nextHeadPoint.x, y: 0};
        } else if (nextHeadPoint.x < 0) {
            res = {x: settings.colsCount - 1, y: nextHeadPoint.y};
        } else if (nextHeadPoint.y < 0) {
            res = {x: nextHeadPoint.x, y: settings.rowsCount - 1};
        }
        return res;
    }, */

    makeStep() {
        //[{x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]

        //[{x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]

        //[{x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}]
        this.lastStepDirection = this.direction;
        /* if (this.teleport(this.getNextStepHeadPoint()) !== null) {
            this.body.unshift(this.teleport(this.getNextStepHeadPoint()));
        } else { */
        this.body.unshift(this.getNextStepHeadPoint());
        // }
        this.body.pop();
    },

    incrementBody() {
        let lastBodyIdx = this.body.length - 1;
        let lastBodyPoint = this.body[lastBodyIdx];
        let lastBodyPointClone = Object.assign({}, lastBodyPoint);
        this.body.push(lastBodyPointClone);
    },

    setDirection(direction) {
        this.direction = direction;
    },

    isBodyPoint(point) {
        return this.body.some(snakePoint => snakePoint.x === point.x && snakePoint.y === point.y);
    },
};
