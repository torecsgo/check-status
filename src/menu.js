const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const TopMenu = [
    {
        label: 'Inicio',
        submenu: [
            {
                label: 'PING',
                accelerator: 'Ctrl+P',
                click() {
                    pingWindow = new BrowserWindow({
                        width: 800,
                        height: 600,
                        title: 'PING to an IP'
                    });
                    pingWindow.setMenu(null);
                    pingWindow.loadURL(url.format({
                        pathname: path.join(__dirname, 'windows/ping.html'),
                        protocol: 'file',
                        slashes: true
                    }));
                    pingWindow.on('closed', () => {
                        pingWindow = null;
                    });
                }

            },
            {
                label: 'DEV: Tore'
            }
        ]
    }/*,
    {
        label: 'Test',
        submenu: [
            {
                label: 'Test Submenu'
            }
        ]
    }*/
];
module.exports = TopMenu;