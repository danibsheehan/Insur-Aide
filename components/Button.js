import React, { Component, PropTypes } from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

export default class Button extends Component {
  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.props.press}>
          <Text>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

// Button.propTypes = {
//   press : PropTypes.func.isRequired,
//   text : PropTypes.string.isRequired,
// } 

// if we are customizing the button color, use a default color
// Button.defaultProps = {
//   color : 'red', 
// }

var styles = StyleSheet.create({
  button: {
    backgroundColor: '#eeeeee',
    marginBottom: 7,
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
  }
});