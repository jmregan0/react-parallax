import * as React from 'react';
import ProjectItem from './project_item';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <p style={{fontFamily: 'Barlow', fontSize: '48px', color: 'black'}}>Work</p>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <ProjectItem
          image="images/report.png"
          label="Project 1" />
        <ProjectItem
          image="images/woman_reading.png"
          label="Project 2" />
        <ProjectItem
          image="images/airplane.png"
          label="Project 3" />
      </div>
    </div>
  )
}
