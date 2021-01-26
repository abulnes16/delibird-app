/* App Navigator
  Contains the whole app navigation configuration
*/

// React
import React from 'react';

// Navigators
import AuthNavigator from './auth/auth.navigator';

const AppNavigation = (): React.ReactElement => {
  return <AuthNavigator />;
};

export default AppNavigation;
