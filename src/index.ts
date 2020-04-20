import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the renkulab-env-plugins extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'renkulab-env-plugins',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension renkulab-env-plugins is activated!');
  }
};

export default extension;
