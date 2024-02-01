'use server';

import { ShowCaseCard, ServerBasicGenerator, Carousal } from '@components';
import { ServerBasicHomeLayout } from '@layouts';
import { bookmark, convert, carousal } from '@constants';

import type { ServerComponent } from '@types';

const Home: ServerComponent = async () => {
	return (
		<div className='px-4 sm:px-32 py-14 flex flex-col gap-16 relative'>
			<ServerBasicHomeLayout title='Your Bookmarks'>
				<div className='section-responvice'>
					<ServerBasicGenerator data={bookmark} Child={ShowCaseCard} />
				</div>
			</ServerBasicHomeLayout>
			<ServerBasicHomeLayout title='Convert from PDF'>
				<Carousal total={carousal.length}>
					<ServerBasicGenerator data={carousal} Child={ShowCaseCard} />
				</Carousal>
			</ServerBasicHomeLayout>
			<ServerBasicHomeLayout title='Convert from PDF'>
				<div className='section-responvice'>
					<ServerBasicGenerator data={convert} Child={ShowCaseCard} />
				</div>
			</ServerBasicHomeLayout>
			<ServerBasicHomeLayout title='Convert to PDF'>
				<div className='section-responvice'>
					<ServerBasicGenerator data={convert} Child={ShowCaseCard} />
				</div>
			</ServerBasicHomeLayout>
		</div>
	);
};

export default Home;
