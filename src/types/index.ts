type DetailsType = {
  title?: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  codeUrl: string;
  benefits?: DetailsType[];
  newCode?: string;
  oldCode?: string;
  features?: DetailsType[]; 
}
