import _ from 'lodash';
import logger from '../system/logger';
import { User } from './model';

var _log:logger.Logger = logger.create('FakeUserRepository');

var fakeUserDetails = [{
  shortCode: 'LMO',
  firstName: 'Lorretta',
  lastName: 'Moe'
}, {
  shortCode: 'WMO',
  firstName: 'Wenona',
  lastName: 'Moshier'
}, {
  shortCode: 'NGA',
  firstName: 'Nita',
  lastName: 'Garica'
}, {
  shortCode: 'HHA',
  firstName: 'Hyun',
  lastName: 'Havlik'
}, {
  shortCode: 'EDO',
  firstName: 'Elizebeth',
  lastName: 'Doverspike'
}, {
  shortCode: 'MDA',
  firstName: 'Magali',
  lastName: 'Dash'
}, {
  shortCode: 'DGR',
  firstName: 'Dorinda',
  lastName: 'Granillo'
}, {
  shortCode: 'JMC',
  firstName: 'Jade',
  lastName: 'Mccollister'
}, {
  shortCode: 'MPE',
  firstName: 'Michiko',
  lastName: 'Perl'
}, {
  shortCode: 'CZA',
  firstName: 'Chanda',
  lastName: 'Zager'
}, {
  shortCode: 'JED',
  firstName: 'Jarrett',
  lastName: 'Eddings'
}, {
  shortCode: 'HLU',
  firstName: 'Harley',
  lastName: 'Luther'
}, {
  shortCode: 'DOR',
  firstName: 'Dong',
  lastName: 'Ortega'
}, {
  shortCode: 'KLA',
  firstName: 'King',
  lastName: 'Lamb'
}, {
  shortCode: 'AZE',
  firstName: 'Andres',
  lastName: 'Zebrowski'
}, {
  shortCode: 'RNI',
  firstName: 'Rufus',
  lastName: 'Nilges'
}, {
  shortCode: 'FAP',
  firstName: 'Fritz',
  lastName: 'Aparicio'
}, {
  shortCode: 'DNA',
  firstName: 'Don',
  lastName: 'Nason'
}, {
  shortCode: 'ESP',
  firstName: 'Eldridge',
  lastName: 'Spoor'
}, {
  shortCode: 'AGE',
  firstName: 'Ambrose',
  lastName: 'Gerdts'
}];

let userDetails = _.sample(fakeUserDetails);
let currentUser : User = new User(userDetails.firstName, userDetails.lastName, userDetails.shortCode);
_log.info(`Will use user ${currentUser.firstName} ${currentUser.lastName} (${currentUser.code}) for this session`);

export default class FakeUserRepository {
  /**
   * A hardcoded current users that gets set on app start up. There is no concept of sessions or users on the backend.
   */
  static get currentUser() {
    return currentUser;
  }
}
