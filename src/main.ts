import 'phaser';

import { config } from './configuration';

window.onload = () => {
  const game = new Phaser.Game(config);
  window.focus();
}
