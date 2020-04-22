import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { PageConfig } from '@jupyterlab/coreutils';

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

    // 1. Add a command
    const back_to_renkulab = 'renku-tools:back_to_renkulab';
    commands.addCommand(back_to_renkulab, {
      label: 'Open renkulab.io',
      caption: 'Execute renku-tools:back-to-renkulab Command',
      execute: (args: any) => {

        console.log(
          `renku-tools:back-to-renkulab has been called ${args['origin']}.`
        );
        window.open('https://renkulab.io')
      }
    });

    const renkulab_docs = 'renku-tools:renkulab-docs';
    commands.addCommand(renkulab_docs, {
      label: 'Open Renkulab (platform) docs',
      caption: 'Execute renku-tools:renkulab-docs Command',
      execute: (args: any) => {

        console.log(
          `renku-tools:renkulab-docs has been called ${args['origin']}.`
        );
        window.open('https://renku.readthedocs.io/en/latest/')
      }
    });

    const renku_python_docs = 'renku-tools:renku-python-docs';
    commands.addCommand(renku_python_docs, {
      label: 'Open renku (command-line interface) docs',
      caption: 'Execute renku-tools:renku-python-docs Command',
      execute: (args: any) => {

        console.log(
          `renku-tools:renku-python-docs has been called ${args['origin']}.`
        );
        window.open('https://renku-python.readthedocs.io/en/latest/')
      }
    });

    const open_classic_notebook = 'renku-tools:open-classic-notebook';
    commands.addCommand(open_classic_notebook, {
      label: 'Open /tree endpoint',
      caption: 'Execute renku-tools:open-classic-notebook Command',
      execute: (args: any) => {

        console.log(
          `renku-tools:open-classic-notebook has been called ${args['origin']}.`
        );

        // thanks to jupyterlab's help menu code here:
        // https://github.com/jupyterlab/jupyterlab/blob/f0153e0258b32674c9aec106383ddf7b618cebab/packages/help-extension/src/index.tsx
        window.open(PageConfig.getBaseUrl() + 'tree');

      }
    });

    // TODO: Conditionally gray this out this based on first line in docker image
    const open_rstudio = 'renku-tools:open-rstudio';
    commands.addCommand(open_rstudio, {
      label: 'Open /tree endpoint',
      caption: 'Execute renku-tools:open-rstudio Command',
      execute: (args: any) => {

        console.log(
          `renku-tools:open-rstudio has been called ${args['origin']}.`
        );

        // thanks to jupyterlab's help menu code here:
        // https://github.com/jupyterlab/jupyterlab/blob/f0153e0258b32674c9aec106383ddf7b618cebab/packages/help-extension/src/index.tsx
        window.open(PageConfig.getBaseUrl() + 'rstudio');

      }
    });


    // 2. Add the command to the command palette
    const category = 'Renku Tools';
    palette.addItem({
      command:back_to_renkulab,
      category,
      args: { origin: 'from the palette' }
    });

    palette.addItem({
      command:renkulab_docs,
      category,
      args: { origin: 'from the palette' }
    });

    palette.addItem({
      command:renku_python_docs,
      category,
      args: { origin: 'from the palette' }
    });

    palette.addItem({
      command:open_classic_notebook,
      category,
      args: { origin: 'from the palette' }
    });

    palette.addItem({
      command:open_rstudio,
      category,
      args: { origin: 'from the palette' }
    });


    // 3. Create a menu (just once)
    const renkuMenu: Menu = new Menu({ commands });
    renkuMenu.title.label = 'Renku Tools Menu';
    mainMenu.addMenu(renkuMenu, { rank: 80 });

    // 4. Add the command to the menu
    renkuMenu.addItem({ command:back_to_renkulab, args: { origin: 'from the menu' } });

    renkuMenu.addItem({ command:renkulab_docs, args: { origin: 'from the menu' } });

    renkuMenu.addItem({ command:renku_python_docs, args: { origin: 'from the menu' } });

    renkuMenu.addItem({ command:open_classic_notebook, args: { origin: 'from the menu' } });

    renkuMenu.addItem({ command:open_rstudio, args: { origin: 'from the menu' } });

  }
};

export default extension;
