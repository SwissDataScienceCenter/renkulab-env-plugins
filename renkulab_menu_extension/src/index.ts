import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the renkulab-menu-extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'renkulab-menu-extension',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension renkulab-menu-extension is activated!');
  }
};

export default extension;
