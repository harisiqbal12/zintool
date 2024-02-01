'use client';

import { useEffect, useState } from 'react';

import { FaArrowLeftLong } from 'react-icons/fa6';

import type { ClientComponentProps } from '@types';
import type { Props } from './types';

const Carousal: ClientComponentProps<Props> = ({ total, children }) => {
	const [scrollPosition, setScrollPosition] = useState<number>(0); 
	const [dynamicTotal, setDynamicTotal] = useState<number>(0);

	const handleLeftScroll = () => {
		setScrollPosition(prevPosition => Math.max(prevPosition - 1, 0));
	};

	const handleRightScroll = () => {
		if (scrollPosition * 10 >= total * 5) {
			setScrollPosition(0);
			return;
		}
		setScrollPosition(prevPosition => prevPosition + 1);
	};

	useEffect(() => {
		const screenWidth = window.innerWidth;
		setDynamicTotal(screenWidth < 1000 ? 100 : total);
	}, [total]);

	return (
		<div className='w-full sm:w-[1300px] flex mt-6 gap-6 items-center  hidescrollbar overflow-x-hidden'>
			<div
				onClick={handleLeftScroll}
				className='w-8 h-8 rounded-full bg-gray-600 border border-gray-600 absolute left-1 z-[999] sm:left-28 cursor-pointer flex items-center justify-center text-white'>
				<FaArrowLeftLong />
			</div>
			<div
				style={{ transform: `translateX(-${scrollPosition * dynamicTotal}%)` }}
				className='flex transition-transform duration-300 gap-6'>
				{children}
			</div>
			<div
				onClick={handleRightScroll}
				className='w-8 h-8 rounded-full bg-gray-600 border border-gray-600 absolute z-[999] right-0 xl:right-0 2xl:right-40 desktop:right-[20%] 2k:right-[25x2%] cursor-pointer flex items-center justify-center text-white'>
				<FaArrowLeftLong className='rotate-180' />
			</div>
		</div>
	);
};

export default Carousal;
