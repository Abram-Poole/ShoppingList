import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import platform from "./native-base-theme/variables/platform";
import {Home} from "./src/components/LandingPage";
export default class App extends Component {
  render() {
    return (
        <StyleProvider style={getTheme(platform)}>
          <Container>
            <Content>
                <Home/>
            </Content>
          </Container>
        </StyleProvider>
    );
  }
}
