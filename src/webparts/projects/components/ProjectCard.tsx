import * as React from 'react';
import styles from './Projects.module.scss';
import { IProjectCardProps } from './IProjectCardProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { 
  Persona,
  PersonaSize
 } from 'office-ui-fabric-react/lib/';

 export default class ProjectCard extends React.Component<IProjectCardProps, void> {    
     public render(): React.ReactElement<IProjectCardProps> {
        let icon = this.props.isFollowed ? 'FavoriteStarFill' : 'FavoriteStar';

         return (
            <div className={styles.projectCard} >
                <a href={this.props.link} target="_blank">
                    <div className={styles.container}>
                    <div className={styles.follow}>
                        <i className={"ms-Icon ms-Icon--" + icon} aria-hidden="true"></i>
                    </div>
                    <div className={styles.top}>
                        <div className={styles.header}></div>
                        <div className={styles.acronym}>{this.props.acronym}</div>
                        <div className={styles.title}>{this.props.title}</div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contacts}>
                        <div className={styles.persona}>
                            <Persona
                            { ...this.props.projectOwner }
                            size={ PersonaSize.small }
                            hidePersonaDetails={false}
                            />
                        </div>
                        <div className={styles.persona}>
                            <Persona
                            { ...this.props.secondaryContact }
                            size={ PersonaSize.small }
                            hidePersonaDetails={false}
                            />
                        </div>
                        </div>
                        <div className={styles.status}>
                        <div className={styles.title}>Current status: <span className={this.props.statusColor}>{this.props.status}</span></div>
                        </div>
                    </div>
                    </div>
            </a>
          </div>
            )
     }
 }