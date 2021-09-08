function _0x14fb(_0x170f3b,_0x5401b6){const _0x16b058=_0x16b0();return _0x14fb=function(_0x14fb91,_0x1daac9){_0x14fb91=_0x14fb91-0x1a9;let _0x215607=_0x16b058[_0x14fb91];return _0x215607;},_0x14fb(_0x170f3b,_0x5401b6);}function _0x16b0(){const _0x118abd=['160261zowTjr','querySelector','value','nop','1921030SJLSRS','2292FijlnS','2ebXVGb','submit','30327lRqYWu','608676qisAhe','2932062RpbUkC','500cOdjyH','submit1','#submit1','148728jrBbnv','15JSetDG','10173woxGon','#pass','log','27JoUmQt'];_0x16b0=function(){return _0x118abd;};return _0x16b0();}(function(_0x3b708a,_0x202161){const _0x12988f=_0x14fb,_0x2cdc0b=_0x3b708a();while(!![]){try{const _0x4e7d61=-parseInt(_0x12988f(0x1aa))/0x1*(parseInt(_0x12988f(0x1b0))/0x2)+-parseInt(_0x12988f(0x1ba))/0x3*(-parseInt(_0x12988f(0x1b5))/0x4)+parseInt(_0x12988f(0x1b9))/0x5*(parseInt(_0x12988f(0x1b3))/0x6)+parseInt(_0x12988f(0x1b4))/0x7+parseInt(_0x12988f(0x1b8))/0x8*(-parseInt(_0x12988f(0x1a9))/0x9)+-parseInt(_0x12988f(0x1ae))/0xa+-parseInt(_0x12988f(0x1b2))/0xb*(parseInt(_0x12988f(0x1af))/0xc);if(_0x4e7d61===_0x202161)break;else _0x2cdc0b['push'](_0x2cdc0b['shift']());}catch(_0xd6dcad){_0x2cdc0b['push'](_0x2cdc0b['shift']());}}}(_0x16b0,0x33d83));const check_pass=()=>{const _0x46773e=_0x14fb;let _0x3d368c=document[_0x46773e(0x1ab)](_0x46773e(0x1bb))[_0x46773e(0x1ac)]['toLowerCase']();if(_0x3d368c=='vincent\x20van\x20gogh'||_0x3d368c=='van\x20gogh')console[_0x46773e(0x1bc)]('ok'),document['addEventListener'](_0x46773e(0x1b1),handleSelectPassFormSubmit),document['querySelector'](_0x46773e(0x1b7))['addEventListener'](_0x46773e(0x1b6),handleSelectNameFormSubmit);else return console[_0x46773e(0x1bc)]('nop'),alert(_0x46773e(0x1ad)),![];};

    function handleSelectPassFormSubmit(evt)  {
        evt.preventDefault();

        // cacher la div #game
        document.querySelector('#game').classList.add('hidden');
    
        // afficher la div #games2
        document.querySelector('#games2').classList.remove('hidden');
    } 