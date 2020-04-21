import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IMainMenu } from '@jupyterlab/mainmenu';

import { Menu } from '@lumino/widgets';

import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the renkulab-menu-extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'renkulab-menu-extension',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    mainMenu: IMainMenu
  ) => {
    console.log('Renku Extension Activation!')
    const { commands } = app;

    // Add a command to open renkulab.io
    const command = 'renku-tools:renkulab-menu-extension';
    commands.addCommand(command, {
      label: 'Open renkulab.io',
      caption: 'Execute renku-tools:renkulab-menu-extension Command',
      execute: (args: any) => {

        console.log(
          `renku-tools:renkulab-menu-extension has been called ${args['origin']}.`
        );
        window.open("https://renkulab.io")
      }
    });

    // Add the command to the command palette
    const category = 'Renku Tools';
    palette.addItem({
      command,
      category,
      args: { origin: 'from the palette' }
    });


    // Create a menu
    const renkuMenu: Menu = new Menu({ commands });
    renkuMenu.title.label = 'Renku Tools Menu';
    mainMenu.addMenu(renkuMenu, { rank: 80 });

    // Add the command to the menu
    renkuMenu.addItem({ command, args: { origin: 'from the menu' } });

  }
};

export default extension;
