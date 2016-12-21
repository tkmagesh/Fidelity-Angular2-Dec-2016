var pgm = (function(){
    function addSync(x,y){
        console.log(`       [Service] processing ${x} and ${y}`);
        var result = x + y;
        console.log(`       [Service] returning the result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[Consumer] trigger addSync for ${x} and ${y}`);
        var result = addSync(x,y);
        console.log(`[Consumer] result = ${result}`);
    }

    function addAsyncCallback(x,y, onResult){
        console.log(`       [Service] processing ${x} and ${y}`);
        setTimeout(function(){
            var result = x + y;
            console.log(`       [Service] returning the result`);
            if (typeof onResult === 'function')
                onResult(result);
        }, 3000);
    }

    function addAsyncCallbackClient(x,y){
        console.log(`[Consumer] trigger addAsyncCallback for ${x} and ${y}`);
        addAsyncCallback(x,y, function(result){
            console.log(`[Consumer] result = ${result}`);
        });
    }

    var addAsyncEvents = (function(){
        var _callbacks = [];
        function subscribe(callbackFn){
            _callbacks.push(callbackFn);
        }
        function start(x, y){
            console.log(`       [Service] processing ${x} and ${y}`);
            setTimeout(function(){
                var result = x + y;
                console.log(`       [Service] returning the result`);
                _callbacks.forEach(callback => callback(result));
            }, 3000);
        }
        return {
            subscribe : subscribe,
            start : start
        }
    })();

    function addAsyncPromise(x,y){
        console.log(`       [Service] processing ${x} and ${y}`);
        var promise = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                var result = x + y;
                console.log(`       [Service] returning the result`);
                resolveFn(result);
            }, 3000);
        });
            
        return promise;
    }

    return {
        addSyncClient : addSyncClient,
        addAsyncCallbackClient : addAsyncCallbackClient,
        addAsyncEvents : addAsyncEvents,
        addAsyncPromise : addAsyncPromise
    }
})();