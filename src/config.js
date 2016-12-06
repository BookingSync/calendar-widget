/* global NODE_ENV */

export default {
  name:    'Calendar Widget',
  apiHost: NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bookingsync.com/api/v2/public',

  rentalUrl(id) {
    return NODE_ENV === 'development' ? `${this.apiHost}/rental` : `${this.apiHost}/maps.json?rental_id=${id}`;
  },
};
