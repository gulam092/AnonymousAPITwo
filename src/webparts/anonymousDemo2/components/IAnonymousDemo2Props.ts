import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IAnonymousDemo2Props {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;

  apiURL: string;
  userID: string;
  context: WebPartContext;

}
