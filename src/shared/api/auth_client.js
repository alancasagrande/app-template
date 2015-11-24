import http from 'superagent';
import appConfig from 'appConfig';


export default class AuthClient {

  static signup (data, callback) {
    http
      .post(appConfig.api + '/signup')
      .send(data)
      .end((err, res) => callback(err, res && res.body));
  }

  static login (credentials, callback) {
    http
      .get(appConfig.api + '/login')
      .query(credentials)
      .end(callback);
  }

  static logout (callback) {
    http
      .get(appConfig.api + '/logout')
      .end(callback);
  }
}
