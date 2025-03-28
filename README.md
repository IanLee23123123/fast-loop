# Fast Loop Extension for micro:bit 🚀

This MakeCode extension adds a **fast loop** block to run code at high speed without blocking other tasks.

## 🛠 Features
- Runs a function repeatedly at a specified interval (as low as 1ms).
- Uses `control.waitMicros()` for precision timing.
- Runs in the background without affecting the main loop.

## 🧩 Blocks
### 🔄 Fast Loop Block
| Block | Description |
|-------|------------|
| ![Fast Loop Block]([https://github.com/YOUR-USERNAME/pxt-fastloop/raw/main/icon.svg](https://github.com/IanLee23123123/fast-loop/)) | Runs code every X milliseconds in the background. |

```typescript
fastloop.runFastLoop(10, function () {
    led.toggle(2, 2); // Blink LED quickly
});
