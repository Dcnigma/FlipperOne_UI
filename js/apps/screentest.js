var ScreenTestScene = (function() {
    function ScreenTestScene() {}

    ScreenTestScene.prototype.enter = function() {};
    ScreenTestScene.prototype.exit = function() {};

    ScreenTestScene.prototype.handleInput = function(action) {
        if (action === 'back') return 'pop';
    };

    ScreenTestScene.prototype.render = function(canvas) {
        var w = canvas.w;
        var h = canvas.h;

        // Black background
        canvas.drawRect(0, 0, w, h, '#000');

        // 1px white border
        canvas.drawHLine(0, 0, w, '#ffa550');
        canvas.drawHLine(0, h - 1, w, '#ffa550');
        canvas.drawVLine(0, 0, h, '#ffa550');
        canvas.drawVLine(w - 1, 0, h, '#ffa550');

        // Diagonal cross
        for (var i = 0; i < w; i++) {
            var y1 = Math.round(i * (h - 1) / (w - 1));
            canvas.drawPixel(i, y1, '#ffa550');
            var y2 = h - 1 - y1;
            canvas.drawPixel(i, y2, '#ffa550');
        }

        // Center crosshair
        var cx = Math.floor(w / 2);
        var cy = Math.floor(h / 2);
        canvas.drawHLine(cx - 10, cy, 21, '#ffa550');
        canvas.drawVLine(cx, cy - 10, 21, '#ffa550');

        // Corner labels
        canvas.drawText('0,0', 2, 2, '#ffa550');
        var tr = (w - 1) + ',' + 0;
        canvas.drawText(tr, w - 2 - tr.length * 6, 2, '#ffa550');
        var bl = 0 + ',' + (h - 1);
        canvas.drawText(bl, 2, h - 9, '#ffa550');
        var br = (w - 1) + ',' + (h - 1);
        canvas.drawText(br, w - 2 - br.length * 6, h - 9, '#ffa550');
    };

    return ScreenTestScene;
})();
