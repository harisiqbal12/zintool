'use server';

import Link from 'next/link';

import HeaderRC from './Header';
import { navbarConstants } from '@constants';

import type { ServerComponent } from '@types';
import { ServerBasicGenerator } from '..';
import { FaSearch } from 'react-icons/fa';

const Header: ServerComponent = async () => {
	return (
		<header className='w-full flex flex-col h-32 shadow-md px-4 sm:px-10 shrink-0'>
			<HeaderRC />
			<nav className='w-full px-8 items-center justify-between text-xs h-[35%] border-t text-gray-600 font-medium border-t-gray-100 hidden sm:flex'>
				<ServerBasicGenerator data={navbarConstants} Child={TextField} />
			</nav>
			<div className='flex sm:hidden w-full pb-4'>
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
		</header>
	);
};

const TextField = ({ name }: { name: string }) => (
	<Link href='/' passHref>
		<span className='navbar-link'>{name}</span>
	</Link>
);

export default Header;
