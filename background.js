var keys = {};

window.addEventListener('keyup', function(e) {
    keys[e.key] = false;
});

window.addEventListener('keydown', function(e) {
    keys[e.key] = true;
});

document.addEventListener("click", function (e) {
    if (keys['p'] || keys['P']) {
        console.log(e.target);
        domtoimage.toPng(e.target)
            .then (function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
                document.body.appendChild(img);
            })
            .catch(function (error) {
                console.error('Erro saving image', error);
            });
    }
}, false);

