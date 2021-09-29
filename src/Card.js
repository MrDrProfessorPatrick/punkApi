import React from 'react';
import {CardDefault} from './CardDefault'; 
import {CardFullInfo}  from './CardFullInfo';

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDefault: true,
    };
    this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
    this.setState((state) => ({ isDefault: !state.isDefault }));
  }

  render() {
    const { item } = this.props;

    return (
      <div className="card">
        <button className="showButton" onClick={this.toggle}>
          {this.state.isDefault ? "Full Info" : "Back"}
        </button>
        {this.state.isDefault ? (
          <CardDefault
            name={item.name}
            image_url={item.image_url}
            description={item.description}
          />
        ) : (
          <CardFullInfo
            name={item.name}
            description={item.description}
            abv={item.abv}
            contributed_by={item.contributed_by}
            brewers_tips={item.brewers_tips}
            first_brewed={item.first_brewed}
            food_pairing={item.food_pairing}
            ibu={item.ibu}
            ph={item.ph}
            srm={item.srm}
            tagline={item.tagline}
          />
        )}
      </div>
    );
  }
}