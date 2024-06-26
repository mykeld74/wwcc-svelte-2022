export interface Staff {
	name: string;
	position: string;
	imgId: string;
}

const Staff = [
	{ name: 'Rick & Shanna Schmitz', position: 'Lead Pastor', imgId: 'Schmitz' },
	{ name: 'Joe & Sarah Brooks', position: 'Executive Pastor', imgId: 'Brooks' },
	{ name: 'Drew & Shelby Cole', position: 'Student Pastor', imgId: 'Cole' },
	{ name: 'Chris & Alyssa Sanchez', position: 'Worship/Creative Arts Pastor', imgId: 'Sanchez' },
	{ name: 'Kayla & Josh Brake', position: 'Kids Pastor', imgId: 'Brake' },
	{ name: 'Sara & Justin Phelps', position: 'Church Administrator', imgId: 'Phelps' }
];

export interface Elders {
	name: string;
	imgId: string;
}

const Elders = [
	{ name: 'Taryn & Matt Marchena', imgId: 'Marchena' },
	{ name: 'Sue & Steve Saindon', imgId: 'Saindon' },
	{ name: 'Charlie & Karissa Eberly', imgId: 'Eberly' },
	{ name: 'Tom & Jenni Blackman', imgId: 'Blackman' }
];

export { Staff, Elders };
