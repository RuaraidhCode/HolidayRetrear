import React from 'react'
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Overview.css';
import { Button } from './button';

function Overview() {
  return (
    <div className='overview-wrapper'>
        <h1 className='overview-title'>Overview</h1>
        <div className='overview-container'>
            <p className='overview-text'>
Balgonie Retreat, nestled in the serene Borders countryside, offers a unique blend of outdoor adventure and tranquil relaxation. This recently refurbished property, with over two decades of family history, presents an idyllic escape for all age groups. Whether you're seeking to invigorate yourself following a day's exploration in the hills or yearn for a cozy moment by a warm woodburning fire, Balgonie Retreat caters to every need.</p>
        </div>
    </div>
  );
}

export default Overview