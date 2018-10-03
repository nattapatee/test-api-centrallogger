import axios from "axios"
import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import './App.css';




class App extends React.Component {
  public onInfo() {
    return axios.get(`http://localhost:5000/api/hello/Info`)
  }
  public onError() {
    return axios.get(`http://localhost:5000/api/hello/Error`)
  }
  public onDebug() {
    return axios.get(`http://localhost:5000/api/hello/Debug`)
  }
  public onWarning() {
    return axios.get(`http://localhost:5000/api/hello/Warning`)
  }
  public onCritical() {
    return axios.get(`http://localhost:5000/api/hello/Critical`)
  }
  public onTrace() {
    return axios.get(`http://localhost:5000/api/hello/Trace`)
  }

  public ClickInfo = () => {
    this.onInfo().catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err)
    })
  }
  public ClickError = () => {
    this.onError().catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err)
    })
  }
  public ClickDebug = () => {
    this.onDebug().catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err)
    })
  }
  public ClickWarning = () => {
    this.onWarning().catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err)
    })
  }
  public ClickCritical = () => {
    this.onCritical().catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err)
    })
  }
  public ClickTrace = () => {
    this.onTrace().catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err)
    })
  }

  public render() {
    return (
      <div className='login-form' style={{ backgroundColor: "teal" }}>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              ทดสอบ
        </Header>
            <Form size='large'>
              <Segment stacked={true}>
                <br />
                <Button color='teal' fluid={true} size='large' onClick={this.ClickInfo}>
                  Info
            </Button>
                <br />
                <Button color='red' fluid={true} size='large' onClick={this.ClickError}>
                  Error
            </Button>
                <br />
                <Button color='orange' fluid={true} size='large' onClick={this.ClickCritical}>
                  Critical
            </Button>
                <br />
                <Button color='blue' fluid={true} size='large' onClick={this.ClickTrace}>
                  Trace
            </Button>
                <br />
                <Button color='green' fluid={true} size='large' onClick={this.ClickDebug}>
                  Debug
            </Button>
                <br />
                <Button color='yellow' fluid={true} size='large' onClick={this.ClickWarning}>
                  Warning
            </Button>
                <br />
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
