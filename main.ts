namespace fastloop {
    /**
     * Runs a function in a fast loop without blocking other tasks.
     */
    //% block="fast loop every $interval ms"
    //% interval.min=1 interval.max=1000
    export function runFastLoop(interval: number, handler: () => void): void {
        control.inBackground(() => {
            while (true) {
                handler();
                control.waitMicros(interval * 1000);
            }
        });
    }
}
