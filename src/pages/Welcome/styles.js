import { StyleSheet } from 'react-native';
import { colors } from '~/styles';
import { metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: colors.secondary,
    padding: metrics.basePadding * 2,
  },

  title: {
    color: colors.white,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },

  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    color: colors.light,
    fontSize: 15,
    lineHeight: 21,
  },

  error: {
    color: colors.danger,
    textAlign: "center",
    marginTop: metrics.baseMargin,
  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
