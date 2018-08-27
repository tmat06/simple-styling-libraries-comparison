import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      materialField: ""
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Documentation</h1>
        <h3>Bootstrap: </h3>
        <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">
          https://getbootstrap.com/docs/4.1/getting-started/introduction/
        </a>
        <h3>Material UI: </h3>
        <a href="https://material-ui.com/">https://material-ui.com/</a>
        <h3>Semantic: </h3>
        <a href="http://react.semantic-ui.com/">
          http://react.semantic-ui.com/
        </a>
        <hr />
        <h1>Buttons</h1>
        <button>This is a Button</button>
        <button className="btn btn-lg">Bootstrap</button>
        <Button variant="outlined">Material UI</Button>
        <button class="ui button" role="button">
          Semantic
        </button>
        <h1>Input Fields</h1>
        <input placeholder="default" />
        <input
          style={{ width: 200 }}
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Bootstrap"
        />
        <TextField
          style={{ padding: 24 }}
          id="searchInput"
          placeholder="Material UI"
          margin="normal"
          onChange={e => this.setState({ materialField: e.target.value })}
        />
        <div class="ui focus input">
          <input type="text" placeholder="Semantic..." />
        </div>
        <h1>Cards</h1>
        <div class="card" style={{ width: "18rem" }}>
          <img
            class="card-img-top"
            src="https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Bootstrap</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <Card style={{ height: 400, width: 300 }}>
          <CardMedia
            style={{ height: 200, width: "100%" }}
            image="https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg"
            title="Dog"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Material UI
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <div class="ui card">
          <img
            src="https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg"
            class="ui image"
          />
          <div class="content">
            <div class="header">Semantic</div>
            <div class="meta">
              <span class="date">Joined in 2015</span>
            </div>
            <div class="description">
              Matthew is a musician living in Nashville.
            </div>
          </div>
          <div class="extra content">
            <a>
              <i aria-hidden="true" class="user icon" />
              22 Friends
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
