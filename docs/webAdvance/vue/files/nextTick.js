export const nextTick = (function () {
    var callbacks = []
    var pending = false
    var timerFunc
    function nextTickHandler() {
        pending = false
        var copies = callbacks.slice(0)
        callbacks = []
        for (var i = 0; i < copies.length; i++) {
            copies[i]()
        }
    }

    if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
        var counter = 1
        var textNode = document.createTextNode(counter)
        var observer = new MutationObserver(nextTickHandler)
        observer.observe(textNode, {
            characterData: true
        })
        timerFunc = function () {
            counter = (counter + 1) % 2
            textNode.data = counter
        }
    } else {
        const context = inBrowser ?
            window :
            typeof global !== 'undefined' ? global : {}
        timerFunc = context.setImmediate || setTimeout
    }
    return function (cb, ctx) {
        var func = ctx
            ?
            function () {
                cb.call(ctx)
            }
            :
            cb
        callbacks.push(func)
        if (pending) return
        pending = true
        timerFunc(nextTickHandler, 0)
    }
})()
