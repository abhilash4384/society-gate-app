import React from 'react';
import { Item, Input, Text, Button, Icon } from 'native-base';

import styles from './styles';

export default class FormInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSecureText: this.props.secureTextEntry
    }
  }


render() {
  let { label, secureTextEntry = false, 
    autoCapitalize,
    keyboardType = 'default',
    returnKeyType = 'go',
    onChangeCustom = () => { },
    input: { onChange, ...input },
    meta: { touched, error },
    multiline,
      style
  } = this.props;


  return (
    <React.Fragment>
      <Item error={error && touched} last style={styles.formItem}>
        <Input
          secureTextEntry={this.state.isSecureText}
          multiline={multiline}
          style={{ ...styles.formInput, fontFamily: 'Poppins-Regular', ...style,}}
          placeholderTextColor="#808080"  
          placeholder={label}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onChange={value => {
            onChange(value);
          }}
          onChangeText={value => {
            onChangeCustom(value);
          }}
          {...input}
        />
        
        {this.props.secureTextEntry &&
          (<Button transparent style={{ marginTop: 15 }} onPress={() => this.setState({ isSecureText: !this.state.isSecureText })}>
            <Icon type="SimpleLineIcons" name={'eye'} style={styles.eyeIcon} />
          </Button>)}

        {touched && error && <Text style={styles.formError}>{error}</Text>}
      </Item>
    </React.Fragment>
  )
}
}
