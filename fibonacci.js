console.log("Loading fibonacci.wasm")

request = new XMLHttpRequest();
request.open('GET', 'fibonacci.wasm');
request.responseType = 'arraybuffer';
request.send();

request.onload = function() {
    var bytes = request.response;
    console.log("Loaded fibonacci.wasm OK");

    WebAssembly.instantiate(bytes, {
        env: {}
    }).then(result => {
        console.log("Instantiated fibonacci.wasm OK. Exports:", result.instance.exports);

        const fib = result.instance.exports.fib;
        console.log("fib(10) = ", fib(10));
        
        // store references to Zig functions
        // get_pos = result.instance.export.get_pos;
        // repeat etc ...
    });
}