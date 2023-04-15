export interface Nav {
	heading: string;
	page: string;
	slug: string;
	order: number;
}
const navItems = [
	{
		heading: 'Our Groups',
		items: [
			{
				page: 'Westwoods Kids',
				slug: '/westwoods-kids',
				order: 1
			},
			{
				page: 'Westwoods Students',
				slug: '/westwoods-students',
				order: 2
			},
			{
				page: 'Women of Westwoods',
				slug: '/women-of-westwoods',
				order: 3
			},
			{
				page: 'Missional Communities',
				slug: '/missional-communities',
				order: 4
			}
		]
	},
	{
		heading: 'About Us',
		items: [
			{
				page: 'Values',
				slug: '/about-us/values',
				order: 5
			},
			{
				page: 'Mission',
				slug: '/about-us/mission',
				order: 6
			},
			{
				page: 'Vision',
				slug: '/about-us/vision',
				order: 7
			},
			{
				page: 'Volunteer Opportunities',
				slug: '/about-us/volunteer-opportunities',
				order: 8
			},
			{
				page: 'What We Believe',
				slug: '/about-us/what-we-believe',
				order: 9
			},
			{
				page: 'Leadership',
				slug: '/about-us/leaders',
				order: 10
			},
			{
				page: 'Current Events',
				slug: '/current-events',
				order: 11
			}
		]
	},
	{
		heading: 'Building Usage',
		items: [
			{
				page: 'Facility Rentals',
				slug: '/facility-rentals/',
				order: 12
			},
			{
				page: 'Weddings',
				slug: '/facility-rentals/weddings',
				order: 13
			}
		]
	},
	{
		heading: 'Campaign',
		items: [{ page: '7700 Lighthouse', slug: '/lighthouse', order: 13 }]
	},
	{
		heading: 'Have a Question',
		items: [{ page: 'Contact Us', slug: '/contact-us', order: 14 }]
	}
];

export default navItems;
