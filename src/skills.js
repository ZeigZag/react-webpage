import React from 'react';
import './skills.css';
import Game from './game.js'
import Images from './images.js'
import Summary from './summary.js'
import Tab from 'react-bootstrap/Tabs';
import Tabs from 'react-bootstrap/Tabs';


  
  export class Skills extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imageIndexes: []
        }
    }

    render() {
      return (

        <Tabs className="tabs" defaultActiveKey="game" id="uncontrolled-tab-example"  onSelect={() => this.randomizeImages()}>
            <Tab className="tab" eventKey="game" title="Tic-Tac-Toe">
                <Game />
            </Tab>
            <Tab className="tab" eventKey="images" title="Images">
                <Images images={this.state.imageIndexes}/>
            </Tab>
            <Tab className="tab" eventKey="contact" title="Summary">
                <Summary />
            </Tab>
      </Tabs>
      );
    }

    randomizeImages(){
        let newIndexes = [];
  
        while(newIndexes.length < 4){
            let randNum = Math.floor(Math.random() * 6);
            if(!newIndexes.includes(randNum)){
                newIndexes.push(randNum);
            } 
        }
  
        this.setState({imageIndexes: newIndexes});
    }


  }

  export default Skills;