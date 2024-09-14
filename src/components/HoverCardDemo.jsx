import React from 'react';
import './HoverCardDemo.css' ; 
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@shadcn/ui';

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="hover-button">Hover over me</button>
      </HoverCardTrigger>
      <HoverCardContent className="hover-card-content">
        <div className="hover-card-content-inner">
          <h4 className="title">Title</h4>
          <p className="description">Description or additional content goes here.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default HoverCardDemo;
