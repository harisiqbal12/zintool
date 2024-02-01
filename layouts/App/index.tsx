'use server';

import { Footer, Header } from '@components';

import type { ServerComponentProps } from '@types';
import type { Props } from './types';

const App: ServerComponentProps<Props> = async ({ children }) => {
	return (
		<main className='w-screen h-screen flex flex-col'>
			<Header />
			<div className='flex flex-col w-full h-full overflow-y-scroll'>
				{children}
				<Footer />
			</div>
		</main>
	);
};

export default App;
