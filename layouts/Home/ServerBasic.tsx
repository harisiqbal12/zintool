'use server';

import { ShowCaseCard } from '@components';

import type { ServerComponentProps } from '@types';
import type { Props } from './types';

const ServerBasic: ServerComponentProps<Props> = async ({ title, children }) => {
	return (
		<div className='flex flex-col'>
			<span className='text-2xl font-semibold text-gray-900'>{title}</span>

			{children}
		</div>
	);
};

export default ServerBasic;
