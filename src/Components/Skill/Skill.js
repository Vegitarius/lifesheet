import React, { Component } from 'react';
import './Skill.css';

class Skill extends Component {
  render() {
    return (
      <div>
        <div className='skill-header'>
          {this.props.skillName}
          <div className='progress'>
            <span></span>
            <div className='levels'>
              <span className="start-level">{this.props.skillLevel}</span>
              <span className='end-level'>{Number(this.props.skillLevel)+1}</span>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Skill;