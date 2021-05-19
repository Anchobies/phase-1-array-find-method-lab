var superbowlWin = record => {
    const game = record.find(function(obj) {
        return obj.result === "W";
    });

    if (game != undefined) {
        return game.year;
    }

    return game;
}
