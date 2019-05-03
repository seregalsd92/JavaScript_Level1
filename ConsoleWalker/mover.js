/**
 * Объект, отвечающий за перемещение
 * @type {{getDirection(): (null|*|undefined), getNextPosition(*): *}}
 */
let mover = {

    // JSDOC
    /**
     * Метод для получение направления
     * @returns {direction - направление, которое может быть 2, 4...}
     */
    getDirection() {

        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];

        while(true) {
           let direction =  parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));

           if(isNaN(direction)) {
               return null;
           }

           if(!availableDirections.includes(direction)) {
               alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
               continue;
           }

           return direction;
        }
    },

    /**
     *
     * @param direction - направление движения
     * @returns {{x: (number|*), y: (number|*)}} - координата
     */
    getNextPosition(direction) {
        let nextPosition = {
            x: player.x,
            y: player.y
        };

        switch (direction) {
            case 2:
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 1:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y--;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y++;
                break;
        }

        if (nextPosition.x < 0 || nextPosition.x >= config.collCount) nextPosition.x = player.x;
        if (nextPosition.y < 0 || nextPosition.y >= config.rowCount) nextPosition.y = player.y;

        return nextPosition;
    }
};

/*123
  456
  789
 */
