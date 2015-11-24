import ReactDOM from 'react-dom';
import appConfig from 'appConfig';
import './phantom';


/* Wrapper for sinon fake server. Provides syntax sugar for HTTP methods. */
class Server {
  constructor() {
    this.server = sinon.fakeServer.create({ respondImmediately: true });
  }

  get (url, response, status) {
    this.server.respondWith(
      'GET',
      appConfig.api + url,
      [status || 200, { 'Content-Type': 'application/json' }, JSON.stringify(response)]
    );
  }
}


export var server = new Server();


/* Renders the React component so it can be manipulated. */
export function render (component) {
  var appContainer = document.getElementById('app-container');
  if (appContainer) { document.body.removeChild(appContainer); }
  document.body.insertAdjacentHTML('afterbegin', '<div id="app-container"></div>');
  ReactDOM.render(component, document.getElementById('app-container'));
}
