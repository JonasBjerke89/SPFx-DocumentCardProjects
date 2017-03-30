import * as React from 'react';
import styles from './Projects.module.scss';
import { IProjectsProps } from './IProjectsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  Persona,
  PersonaSize
 } from 'office-ui-fabric-react/lib/';
 import ProjectCard from './ProjectCard';
 import Project from './Project';

export default class Projects extends React.Component<IProjectsProps, void> {  
  public render(): React.ReactElement<IProjectsProps> {    
    let projects = new Array<Project>(0);

    for(let i = 0; i<25; i++)
    {
      let p = new Project();
        p.acronym = "P" + i;
        p.title = "Project Bladerunner #" + i,
        p.status = i % 5 ? "On track" : "Delayed",
        p.statusColor = i % 5 ? "ms-fontColor-green" : "ms-fontColor-red",
        p.isFollowed = i % 5 ? true : false,
        p.projectOwner = {
                    imageInitials: 'JH',
                    primaryText: 'Jonas Bjerke Hansen',
                    secondaryText: 'Project owner'
                  },
        p.secondaryContact = {  
                    imageInitials: 'ML',
                    primaryText: 'Mikkel Løvengren',
                    secondaryText: 'Daily chief'
                  }
        p.link = "https://itrelation.sharepoint.com/sites/johandev";
      
      projects.push(p);
    }
 
    return (      
        <div className={styles.outerwrapper}>
          {
            projects.map((val, index, array) =>
            {
            return <ProjectCard
                title={val.title}
                acronym={val.acronym}
                status={val.status}
                statusColor={val.statusColor}
                isFollowed={val.isFollowed} 
                projectOwner={val.projectOwner} 
                secondaryContact={val.secondaryContact}
                link={val.link}
              />
            })
          }
        </div>
    );
  }
}
