'use server';

import Image from 'next/image';

import type { ServerComponentProps } from '@types';
import type { ShowCaseCardProps } from './types';

const ShowCaseCard: ServerComponentProps<ShowCaseCardProps> = async ({
	title,
	description,
	src,
}) => {
	return (
		<div className='w-full sm:w-60 h-48 rounded-lg border shrink-0 flex flex-col justify-center px-4 gap-5 cursor-pointer hover:shadow-lg transition duration-300 py-4'>
			<div className='w-16 h-20 relative'>
				<Image src={src} alt='edit-pdf' fill className='object-cover' />
			</div>
			<div className='flex flex-col gap-2'>
				<span className='text-lg font-semibold'>{title}</span>
				<p title={description} className='text-xs opacity-50'>
					{description?.slice(0, 55)} {description?.length > 50 && '...'}
				</p>
			</div>
		</div>
	);
};

export default ShowCaseCard;
