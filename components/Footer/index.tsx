'use server';

import { FaYoutube, FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { IoMdMoon } from 'react-icons/io';

import type { ServerComponent } from '@types';
import Link from 'next/link';

const Footer: ServerComponent = async () => {
	return (
		<footer className='h-96 w-full bg-[#F3F4F5] shrink-0 flex flex-col px-4 sm:px-[72px] py-6 text-xs font-medium text-gray-700 gap-6	'>
			<div className='w-full flex flex-row items-center gap-6 pb-6 border-b'>
				<span>Follow us</span>
				<FaYoutube size={22} />
				<FaTwitter size={20} />
				<FaFacebookF size={20} />
			</div>
			<div className='grid sm:grid-cols-5 grid-cols-2 gap-10 border-b pb-8'>
				<div className='flex flex-col font-normal gap-6'>
					<h4 className='font-semibold'>Internal Links</h4>
					<div className='gap-4 flex flex-col'>
						<Link passHref href='/'>
							<span className='navbar-link'>Documentaries</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Themes</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Chrome Casts</span>
						</Link>
					</div>
				</div>
				<div className='flex flex-col font-normal gap-6'>
					<h4 className='font-semibold'>Enterprise</h4>
					<div className='gap-4 flex flex-col'>
						<Link passHref href='/'>
							<span className='navbar-link'>Download Chrome Browser</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Chrome Browser For Enterprise</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Chrome Browser Devices</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>ChromeOS</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Google Cloud</span>
						</Link>
					</div>
				</div>
				<div className='flex flex-col font-normal gap-6'>
					<h4 className='font-semibold'>Internal Links</h4>
					<div className='gap-4 flex flex-col'>
						<Link passHref href='/'>
							<span className='navbar-link'>Documentaries</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Themes</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Chrome Casts</span>
						</Link>
					</div>
				</div>
				<div className='flex flex-col font-normal gap-6'>
					<h4 className='font-semibold'>Enterprise</h4>
					<div className='gap-4 flex flex-col'>
						<Link passHref href='/'>
							<span className='navbar-link'>Download Chrome Browser</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Chrome Browser For Enterprise</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Chrome Browser Devices</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>ChromeOS</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Google Cloud</span>
						</Link>
					</div>
				</div>
				<div className='flex flex-col font-normal gap-6'>
					<h4 className='font-semibold'>Internal Links</h4>
					<div className='gap-4 flex flex-col'>
						<Link passHref href='/'>
							<span className='navbar-link'>Documentaries</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Themes</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Chrome Casts</span>
						</Link>
					</div>
				</div>
			</div>
			<div className='w-full flex flex-col sm:flex-row items-center justify-between'>
				<div className='flex items-center gap-6'>
					<div className='flex items-center gap-2'>
						<h4 className='text-lg font-bold'>Similar</h4>
						<div className='py-2 rounded-xl px-4 bg-gray-800 text-white flex items-center justify-center font-bold'>
							<span>Watch</span>
						</div>
					</div>
					<div className='hidden sm:flex items-center gap-4'>
						<Link passHref href='/'>
							<span className='navbar-link'>Privacy Policy</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Terms and conditions</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Cookies Policy</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>About us</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>EULA</span>
						</Link>
						<Link passHref href='/'>
							<span className='navbar-link'>Contact</span>
						</Link>
					</div>
				</div>
				<div className='flex sm:hidden items-center gap-4 mt-4'>
					<Link passHref href='/'>
						<span className='navbar-link'>Privacy Policy</span>
					</Link>
					<Link passHref href='/'>
						<span className='navbar-link'>Terms and conditions</span>
					</Link>
					<Link passHref href='/'>
						<span className='navbar-link'>Cookies Policy</span>
					</Link>
					
				</div>
				<div className='w-10 h-10 mt-4 sm:mt-0 flex rounded-full bg-[#DEDEDE] items-center justify-center text-gray-700 cursor-pointer hover:scale-110 transition duration-150'>
					<IoMdMoon size={22} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
