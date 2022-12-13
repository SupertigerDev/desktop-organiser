const {app, screen, BrowserWindow} = require("electron");
const path = require("path");

const margin = 10;

app.whenReady().then(() => {
    const size = screen.getPrimaryDisplay().workAreaSize;
    const test = new BrowserWindow({
        frame: false,
        x: margin,
        y: margin,
        height: size.height - (margin * 2),
        width: 500,
        resizable: false,
        focusable: false,
    })
    test.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)

})

