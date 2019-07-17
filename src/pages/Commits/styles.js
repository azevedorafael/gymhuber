import { StyleSheet } from 'react-native';
import { metrics } from '~/styles';
import { ICONS } from 'jest-util/build/specialChars';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  loading: {
    marginTop: metrics.baseMargin * 10
  },

  icon: {
    marginTop: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    marginLeft: metrics.baseMargin
  }
});

export default styles;
