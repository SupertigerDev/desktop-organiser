const {app, screen, BrowserWindow} = require("electron");
const path = require("path");

const margin = 10;
const width = 800;

app.whenReady().then(() => {
    const size = screen.getPrimaryDisplay().workAreaSize;
    const test = new BrowserWindow({
        frame: false,
        x: size.width - width - margin,
        y: margin,
        height: size.height - (margin * 2),
        webPreferences: {
            webSecurity: false
        },
        width,
        resizable: false,
        // focusable: false,
    })
    // test.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
    test.loadURL(`http://localhost:3000`);

})

