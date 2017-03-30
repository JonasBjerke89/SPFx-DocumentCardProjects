import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from '@microsoft/sp-webpart-base';

import * as strings from 'projectsStrings';
import Projects from './components/Projects';
import { IProjectsProps } from './components/IProjectsProps';
import { IProjectsWebPartProps } from './IProjectsWebPartProps';

export default class ProjectsWebPart extends BaseClientSideWebPart<IProjectsWebPartProps> {

  public render(): void {    
    const element: React.ReactElement<IProjectsProps > = React.createElement(
      Projects,
      {
        description: this.properties.description,
        count: this.properties.count
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneSlider('count', {
                  label: "Count",
                  min: 0,
                  max: 100
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
