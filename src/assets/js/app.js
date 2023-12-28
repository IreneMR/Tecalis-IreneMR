import '../css/app.scss';

function importAll(r) {
  return r.keys().map(r);
}
importAll(require.context('./../img/', false, /\.(png|jpe?g|webp|svg|ico)$/));

import Header from './modules/header';
import InfoSection from './modules/info-section';

Header.init();
InfoSection.init();
