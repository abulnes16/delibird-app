/* App Navigator
  Contains the whole app navigation configuration
*/
import React from 'react';
import AuthNavigator from './auth/auth.navigator';

const AppNavigation = (): React.ReactElement => {
  return <AuthNavigator />;
};

export default AppNavigation;
