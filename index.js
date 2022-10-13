/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { makeFirstPage } from './src/main/factories/pages/first-page-factory';

AppRegistry.registerComponent(appName, () => makeFirstPage);
