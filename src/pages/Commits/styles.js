import { StyleSheet } from 'react-native';
import { metrics } from '~/styles';

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
  },

  input: {
    marginTop: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    padding: metrics.basePadding / 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
});

export default styles;
