"use strict";

function status() {
    let condition = null;

    function setPlaying() {
        condition = 'playing';
    }

    function setStopped() {
        condition = 'stopped';
    }

    function setFinished() {
        condition = 'finished';
    }

    function isPlaying() {
        return condition === 'playing';
    }

    function isStopped() {
        return condition === 'stopped';
    }

    return {
        setPlaying: setPlaying,
        setStopped: setStopped,
        setFinished: setFinished,
        isPlaying: isPlaying,
        isStopped: isStopped
    }
}