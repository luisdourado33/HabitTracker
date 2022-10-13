/**
 * @format
 */

import { AppRegistry } from 'react-native';
<<<<<<< HEAD
import App from './src/App';
import { name as appName } from './app.json';
import { makeFirstPage } from './src/main/factories/pages/first-page-factory';

AppRegistry.registerComponent(appName, () => makeFirstPage);
=======
import { Router } from './src/main';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Router);
>>>>>>> ced8277c568615ab3005e5ae1135a81cc2faca56
