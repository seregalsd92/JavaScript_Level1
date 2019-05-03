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

        const availableDirections = [2, 4, 6, 8];

        while(true) {
           let direction =  parseInt(prompt('Введите число (2, 4, 6 или 8), куда вы хотите переместиться, "Отмена" для выхода.'));

           if(isNaN(direction)) {
               return null;
           }

           if(!availableDirections.includes(direction)) {
               alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8.');
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
        }

        return nextPosition;
    }
};

/*123
  456
  789
 */
