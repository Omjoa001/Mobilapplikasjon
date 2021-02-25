// @flow
//This is a school assignment published on git for ease of use.
import * as React from 'react';
import { Component } from 'react-simplified';
import { View, Text, TextInput } from 'react-native';
import moji from 'moji-translate';

class Main extends Component {
  text: string = moji.translate('Hello World');

  handleChange(event: SyntheticInputEvent<any>) {
    this.text = moji.translate(event.target.value);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextInput
          style={{ fontSize: 24, borderWidth: 1, borderRadius: 5, padding: 5 }}
          placeholder="Type in to moji-translate!"
          onChange={this.handleChange}
        />
        <Text>{this.text}</Text>
      </View>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}
