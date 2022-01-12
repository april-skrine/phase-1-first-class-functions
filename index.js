function receivesAFunction(n) {
    n();
}

function returnsANamedFunction() {
    function thisFunction() {
    }
    return thisFunction;
}

function returnsAnAnonymousFunction() {
    return () => {}
}


    