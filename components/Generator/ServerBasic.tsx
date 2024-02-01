'use server';

import type { ServerComponentProps } from '@types';
import type { ServerBasicProps } from './types';

const ServerBasic: ServerComponentProps<ServerBasicProps> = async ({
	data,
	Child,
}) => {
	return (
		<>
			{data.map((el, i) => (
				<Child {...el} key={el.id} />
			))}
		</>
	);
};

export default ServerBasic;
