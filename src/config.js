/* global NODE_ENV */

export default {
  name:    'Calendar Widget',
  apiHost: NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bookingsync.com',
  apiNamespace: '/api/v2/public',
  apiMapsRoute: '/maps.json?rental_id={params}',

  rentalUrl(ids) {
    const route = this.apiMapsRoute.replace('{params}', ids);

    return NODE_ENV === 'development' ? `${this.apiHost}/rental` : `${this.apiHost}${this.apiNamespace}${route}`;
  },
};
