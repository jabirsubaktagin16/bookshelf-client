export interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean | true;
}

export interface IInputComponent {
  label: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  readonly?: boolean | false;
  type?: string | "text";
}
