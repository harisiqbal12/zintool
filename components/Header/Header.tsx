'use server';

import { FaCog, FaSearch } from 'react-icons/fa';

import type { ServerComponent } from '@types';

const Header: ServerComponent = async () => {
	return (
		<div className='w-full flex h-[65%] items-center justify-between'>
			<div className='flex items-center gap-1 font-black'>
				<div className='w-8 h-8 rounded-md bg-btn-primary flex items-center justify-center'>
					<FaCog color='#fff' size={22} />
				</div>
				<span>ZinTools</span>
			</div>
			<div className='hidden sm:flex w-[40%]'>
				<div className='w-full flex rounded-full h-12 bg-gray-200 px-4 text-xs items-center focus-within:border-btn-primary duration-150 transition border border-transparent'>
					<input
						className='w-[90%] flex outline-none bg-transparent'
						placeholder='Search for Movies, TV Shows, Themes & Cast'
					/>
					<div className='w-[10%] border-l border-l-gray-300 h-8 flex items-center justify-center text-gray-600'>
						<FaSearch size={20} />
					</div>
				</div>
			</div>
			<div className='flex items-center gap-4'>
				<span className='text-xs font-semibold text-gray-600'>Log in</span>
				<button className='py-3 px-6 rounded-full text-white text-xs bg-btn-primary'>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Header;
