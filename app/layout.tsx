import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppLayout } from '@layouts';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Zinlab',
	description: 'Zinlab',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
}
