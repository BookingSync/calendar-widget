/* global NODE_ENV */

export default {
  name:    'Calendar Widget',
  apiHost: NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bookingsync.com',
  apiNamespace: '/api/v2/public',

  rentalUrl(id) {
    return NODE_ENV === 'development' ? `${this.apiHost}/rental` : `${this.apiHost}${this.apiNamespace}/maps.json?rental_id=${id}`;
  },
};
