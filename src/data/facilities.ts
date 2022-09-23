export interface Facilities {
	title: string;
	desc: string[];
	id: number;
}

const Facilities = [
	{
		title: 'Auditorium',
		desc: [
			'Seating for 200-400',
			'Full sound, lighting and video options',
			'Hanging lights and pallet backdrop'
		],
		id: '01'
	},
	{
		title: 'The Workshop',
		desc: [
			'Multipurpose room with seating for up to 60 in rows or 45 at tables with room for a buffet, approximately',
			'Mounted TV for presentations'
		],
		id: '02'
	},
	{
		title: 'The Café',
		desc: [
			'Seating for up to 150 in rows or 100 at tables with room for a buffet, approximately',
			'Mounted TV for presentations and sound system',
			'In good weather, option of outside courtyard',
			'Access to kitchen for food prep or storage'
		],
		id: '03'
	},
	{
		title: 'The Coffeeshop',
		desc: [
			'Option of couches and high top tables and stools for casual seating, approximately 20 with space to move in more seating',
			'Bar counter for easy serving'
		],
		id: '04'
	},
	{
		title: 'Adult Classroom 1',
		desc: [
			'Conference table with seating for 10-12',
			'White board for presentations',
			'Optional TV on a cart'
		],
		id: '05'
	},
	{
		title: 'Adult Classroom 2',
		desc: ['Multipurpose room for seating or tables', 'Optional TV on a cart'],
		id: '01'
	}
];

export default Facilities;
