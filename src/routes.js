import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';
import Commits from "~/pages/Commits";

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        Repositories,
        Commits
      },
      {
        initialRouteName: userLogged ? "Repositories" : "Welcome"
      }
    )
  );

export default Routes;
