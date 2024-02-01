import type { ReactNode } from 'react';

export type ServerBasicProps = {
	data: Array<{ [key: string]: any; id: number | string }>;
	Child: (props: any) => JSX;
};
