const { app, BrowserWindow } = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1366,
        height: 768,
        title: "OEE Simulator PRO - WLDN-Soft",
        autoHideMenuBar: true, 
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false // <--- INI KUNCI JAWABANNYA: Mengizinkan akses file lokal
        }
    });

    mainWindow.maximize(); 
    
    // Cukup panggil nama filenya langsung, biarkan Electron yang mengatur jalurnya
    mainWindow.loadFile('index.html'); 
    
    // Alat Rontgen kita matikan saja (diberi tanda komentar)
    // mainWindow.webContents.openDevTools(); 
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});