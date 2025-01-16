const { app, BrowserWindow, nativeTheme } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true
  });

  win.loadURL('https://github.com/');

  nativeTheme.themeSource = 'dark';

  win.webContents.on('did-start-navigation', () => {
    win.webContents.executeJavaScript(`
      (function() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '::-webkit-scrollbar { display: none; }';
        document.head.appendChild(style);
      })();
    `);
  });

  win.webContents.on('did-finish-load', () => {
    win.webContents.executeJavaScript(`
      (function() {
        if (!document.documentElement.classList.contains('color-mode-dark')) {
          document.documentElement.classList.add('color-mode-dark');
        }
      })();
    `);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
