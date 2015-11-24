// PhantomJS .bind() polyfill
import 'es5-shim';

var context = require.context('.', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
export default context;
