import { Platform } from 'react-native';
import theme from '@theme/variables/societyTheme';

export default {
  eyeIcon: {
    marginLeft: 10,
    color: '#000',
    fontSize: 22,
  },
  formItem: {
    paddingLeft: 0,
    borderColor: '#F6F6F6',
  },
  formInput: {
    paddingLeft: 15,
    height: 40,
    fontSize: 20,
  },
  formError: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: theme.brandDanger,
    fontSize: Platform.OS === 'android' ? 12 : 15,
    paddingRight: 5,
    textAlign: 'right',
  },
};
