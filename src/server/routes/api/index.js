import Express from 'express';
import _ from 'lodash';
 
import backup from '../../backup';

let http = Express.Router();

http.post('/', function( req, res, next ) {
  const { opts } = _.assign( {}, req.body );
  res.set({
    'Content-Type': 'text/plain'
  });

  backup( opts )
    .then( msg => res.send( msg ) )
    .catch( next );
});

export default http;