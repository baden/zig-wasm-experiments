fibonacci.wasm: fibonacci.zig
	zig build-lib fibonacci.zig -target wasm32-freestanding -dynamic -O ReleaseSmall --name fibonacci
	@ls -l $@
