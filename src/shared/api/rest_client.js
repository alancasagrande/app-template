import http from 'superagent';
import _ from 'lodash';
import appConfig from 'appConfig';


/*
  Example:

  var usersApi = new RestClient('users');

  usersApi.list({ page: 2, per_page: 10 }, (error, response) => {
    if (error) { return this.setState({ error: error }); }
    this.setState({ users: response.body });
  });
*/
export default class RestClient {

  constructor (resource) {
    this.url = appConfig.api + '/' + resource + '/';
  }

  list (query, callback) {
    http
      .get(this.url)
      .set('Authorization', window.localStorage.authorization)
      .query(_.extend({ factory: appConfig.factory }, query))
      .end(callback);
  }

  get (id, callback) {
    http
      .get(this.url + id)
      .query(_.extend({ factory: appConfig.factory }))
      .set('Authorization', window.localStorage.authorization)
      .end(callback);
  }

  create (data, callback) {
    http
      .post(this.url)
      .send(_.extend({ factory: appConfig.factory }, data))
      .set('Authorization', window.localStorage.authorization)
      .end(callback);
  }

  update (id, data, callback) {
    http
      .patch(this.url + id)
      .send(_.extend({ factory: appConfig.factory }, data))
      .set('Authorization', window.localStorage.authorization)
      .end(callback);
  }

  delete (id, callback) {
    http
      .del(this.url + id)
      .set('Authorization', window.localStorage.authorization)
      .end(callback);
  }

  save (data, callback) {
    if (data._id) { this.update(data._id, data, callback); }
    else { this.create(data, callback); }
  }
}
