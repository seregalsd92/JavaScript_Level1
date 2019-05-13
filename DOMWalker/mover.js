let mover = {

    makeStep(event) {
        let newPosition = this.getNewPosition(event);

        if(!this.canPlayerMakeStep(newPosition)) {
            return;
        }

        if (this.arePositionsEqual(player, newPosition)) {
            return;
        }

        renderer.clearUserPosition();
        player.changePosition(newPosition);
        renderer.renderUserPosition(newPosition);
    },

    getNewPosition(event) {
        switch (event.key) {
            case 'ArrowUp':
                return {x: player.x, y: player.y - 1};
            case 'ArrowDown':
                return {x: player.x, y: player.y + 1};
            case 'ArrowRight':
                return {x: player.x + 1, y: player.y};
            case 'ArrowLeft':
                return {x: player.x - 1, y: player.y};
            default:
                return {x: player.x, y: player.y};
        }
    },

    canPlayerMakeStep(nextPoint) {
        return renderer.getSquare(nextPoint) !== null;
    },

    arePositionsEqual(curPos, newPos) {
        return curPos.x == newPos.x && curPos.y == newPos.y;
    }
};
