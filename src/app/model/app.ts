import { ReactNode } from "react";

/*
this is a model for the app
it defines the structure of the app 
* APP > PAGE[] > SECTION[] > COMPONENT
*/

export interface Head {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
}

export interface Section {
  index: number;
  name: string;
  component: ReactNode;
}

export interface Page {
  name: string;
  head: Head;
  url: string;
  image?: string;
  protected: boolean;
  sections: Section[];
  subPages?: Page[];
  dynamicPages?: Page[];
}

type authState = "VERIFIED" | "UNVERIFIED" | "UNAUTHENTICATED" | "GUEST";

interface AppModel {
  name: string;
  AuthState: authState;
  pages: Page[];
}

export default AppModel;

