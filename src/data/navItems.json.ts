export interface Nav {
	heading: string;
	page: string;
	slug: string;
	order: number;
}
export default {
	navItems: [
		{
			heading: 'Our Groups',
			items: [
				{
					page: 'Missional Communities',
					slug: '/missional-communities',
					order: '01'
				},
				{
					page: 'Westwoods Kids',
					slug: '/westwoods-kids',
					order: '02'
				},
				{
					page: 'Westwoods Students',
					slug: '/westwoods-students',
					order: '03'
				},
				{
					page: 'Women of Westwoods',
					slug: '/women-of-westwoods',
					order: '04'
				}
			]
		},
		{
			heading: 'About Us',
			items: [
				{
					page: 'Values',
					slug: '/about-us/values',
					order: '05'
				},
				{
					page: 'Mission',
					slug: '/about-us/mission',
					order: '06'
				},
				{
					page: 'Vision',
					slug: '/about-us/vision',
					order: '07'
				},
				{
					page: 'Volunteer Opportunites',
					slug: '/about-us/volunteer-opportunities',
					order: '08'
				},
				{
					page: 'What We Believe',
					slug: '/about-us/what-we-believe',
					order: '09'
				}
			]
		},
		{
			heading: 'Building Usage',
			items: [
				{
					page: 'Facility Rentals',
					slug: '/facility-rentals/',
					order: '10'
				},
				{
					page: 'Weddings',
					slug: '/facility-rentals/weddings',
					order: '11'
				}
			]
		},
		{
			heading: 'Contact Us',
			items: [{ page: 'Contact Us', slug: '/contact-us', order: '12' }]
		}
	]
};
