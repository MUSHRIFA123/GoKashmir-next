import Link from 'next/link'

import Navbar from '@/components/Navbar'

export default function TravelGuidePage() {
	return (
		<>
			<head>
				<title>Travel Guide Page</title>
			</head>
			<body>
				<Navbar/>
				<div className="max-w-7xl mx-auto py-10">
					<Link href="/" className="underline">
						Home
					</Link>		
					<h1 className="text-3xl font-bold py-10">Travel Guide Page</h1>		
				</div>
			</body>
		</>
	)
}