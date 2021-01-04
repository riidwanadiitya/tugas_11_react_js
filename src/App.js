import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Dimmer,
  Divider,
  Grid, Header, Icon, Image, Input, List, Loader, Search, Segment
} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>OR</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                Cari Dokumen
              </Header>
                <Search placeholder="Search document ..." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="file pdf outline" />
                Tambah Dokumen Baru
              </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>

          <Image src="https://semantic-ui.com/examples/assets/images/wireframe/short-paragraph.png" />
        </Segment>

        <Grid columns="equal">
          <Grid.Column>
            <Segment>
              <Image src="https://semantic-ui.com/examples/assets/images/wireframe/short-paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <Segment>
              <Image src="https://semantic-ui.com/examples/assets/images/wireframe/short-paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Header as="h5">
              Website Terkait
            </Header>
            <List>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="https://google.com" target="_blank">Google</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content><a href="https://facebook.com" target="_blank">Facebook</a></List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content><a href="https://semantic-ui.com" target="_blank">Semantic UI</a></List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content><a href="https://niomic.com" target="_blank">Niomic</a></List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content><a href="https://reactjs.org" target="_blank">React</a></List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>




      </div>
    );
  }
}

export default App;