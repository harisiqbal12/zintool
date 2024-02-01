export type ClientComponent = () => JSX.Element;
export type ClientComponentProps<T> = (props: T) => JSX.Element;
export type ServerComponent = () => Promise<JSX.Element>;
export type ServerComponentProps<T> = (props: T) => Promise<JSX.Element>;
