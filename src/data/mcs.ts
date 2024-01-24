export interface mcs {
	title: string;
	day: string;
	contact: string[];
	location: string;
}

const mcs = [
	{
		title: 'Ver Millers',
		day: '2nd Sunday',
		contact: ['303.519.0501'],
		time: '2:00pm'
	},
	{
		title: 'Brooks',
		day: 'Monday Night',
		contact: ['970.208.7560'],
		time: '6:30pm'
	},
	{
		title: 'Brink',
		day: 'Every Other Tuesday Night',
		contact: ['720.338.6478'],
		time: 'Evening'
	},
	{
		title: 'Sanchez/Eberly',
		day: '1st and 3rd Tuesday Night',
		contact: ['720.828.6422'],
		time: '6:00pm'
	},
	{
		title: 'Blackman/Winger',
		day: 'Wednesday Night',
		contact: ['303.859.3294', '303.985.4856'],
		time: '6:30pm'
	},
	{
		title: 'Van Schooten',
		day: '2nd and 4th Wednesday Night',
		contact: ['503.989.0932'],
		time: '7:00pm'
	},
	{
		title: 'Barrientos/Phelps',
		day: 'Thursday Night',
		contact: ['303.653.3148'],
		time: '6:30pm'
	},
	{
		title: 'Cole',
		day: 'Thursday Night',
		contact: ['303.547.7427'],
		time: '7:00pm'
	},
	{
		title: 'Westwoods Students',
		day: 'Monday Night',
		time: '7:00pm',
		location: '@Westwoods Community Church'
	}
];

export default mcs;
