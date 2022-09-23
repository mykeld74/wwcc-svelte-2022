export interface Readings {
	date: string;
	passage: string;
}

const Readings = [
	{
		date: '8-21-2022',
		passage: 'John 13:31-35'
	},
	{
		date: '8-22-2022',
		passage: '1 Thessalonians 5:8-22'
	},
	{
		date: '8-23-2022',
		passage: 'Romans 16:1-16'
	},
	{
		date: '8-24-2022',
		passage: 'Romans 12: 9-16'
	},
	{
		date: '8-25-2022',
		passage: 'Romans 13: 8-10'
	},
	{
		date: '8-26-2022',
		passage: 'James 5:13-20'
	},
	{
		date: '8-27-2022',
		passage: 'Romans 15:1-17'
	},
	{
		date: '8-28-2022',
		passage: 'Hebrews 10:19-25'
	},
	{
		date: '8-29-2022',
		passage: '1 Corinthians 1:10-17'
	},
	{
		date: '8-30-2022',
		passage: 'Galatians 5:1-26'
	},
	{
		date: '8-31-2022',
		passage: 'Ephesians 3:14-4:6'
	},
	{
		date: '9-1-2022',
		passage: 'Ephesians 4:29-5:2'
	},
	{
		date: '9-2-2022',
		passage: 'Colossians 3:1-17'
	},
	{
		date: '9-3-2022',
		passage: 'Romans 12:1-10'
	},
	{
		date: '9-4-2022',
		passage: 'Galatians 6'
	},
	{
		date: '9-5-2022',
		passage: 'Romans 14:1-23'
	},
	{
		date: '9-6-2022',
		passage: 'James 4:1-12'
	},
	{
		date: '9-7-2022',
		passage: '1 Peter 1:13-25'
	},
	{
		date: '9-8-2022',
		passage: '1 Peter 4:7-9'
	},
	{
		date: '9-9-2022',
		passage: '1 Peter 5:1-7'
	},
	{
		date: '9-10-2022',
		passage: 'John 13:1-17'
	},
	{
		date: '9-11-2022',
		passage: 'Luke 22: 39-46'
	},
	{
		date: '9-12-2022',
		passage: 'John 6: 25-59'
	},
	{
		date: '9-13-2022',
		passage: 'Matthew 6:5-15'
	},
	{
		date: '9-14-2022',
		passage: 'John 5:16-30'
	},
	{
		date: '9-15-2022',
		passage: 'Matthew 10: 37-42'
	},
	{
		date: '9-16-2022',
		passage: 'John 15: 1-17'
	},
	{
		date: '9-17-2022',
		passage: 'John 17'
	},
	{
		date: '9-18-2022',
		passage: '1 Samuel 3'
	},
	{
		date: '9-19-2022',
		passage: 'Acts 9:1-19'
	},
	{
		date: '9-20-2022',
		passage: 'Jeremiah 1:4-19'
	},
	{
		date: '9-21-2022',
		passage: 'lamentations 3:22-26'
	},
	{
		date: '9-22-2022',
		passage: 'John 10:1-18'
	},
	{
		date: '9-23-2022',
		passage: 'psalm 23:1-6'
	},
	{
		date: '9-24-2022',
		passage: 'Isaiah 6'
	},
	{
		date: '9-25-2022',
		passage: 'John 17'
	},
	{
		date: '9-26-2022',
		passage: 'Ephesians 1:3-14'
	},
	{
		date: '9-27-2022',
		passage: 'psalm 119:33-40'
	},
	{
		date: '9-28-2022',
		passage: '1 Kings 3:7-9'
	},
	{
		date: '9-29-2022',
		passage: 'Ephesians 4: 1-6'
	},
	{
		date: '9-30-2022',
		passage: 'Jonah 2'
	},
	{
		date: '10-1-2022',
		passage: 'Psalm 71:17-22'
	},
	{
		date: '10-2-2022',
		passage: '1 John 1:9'
	},
	{
		date: '10-3-2022',
		passage: 'Psalm 32'
	},
	{
		date: '10-4-2022',
		passage: 'Nehemiah 9: 1-37'
	},
	{
		date: '10-5-2022',
		passage: '1 Timothy 1:12-17'
	},
	{
		date: '10-6-2022',
		passage: 'Psalm 51'
	},
	{
		date: '10-7-2022',
		passage: 'Proverbs 28:13'
	},
	{
		date: '10-8-2022',
		passage: 'Psalm 63:1-8'
	},
	{
		date: '10-9-2022',
		passage: 'Galatians 6'
	},
	{
		date: '10-10-2022',
		passage: 'Mark 12'
	},
	{
		date: '10-11-2022',
		passage: 'Proverbs 27:34-35'
	},
	{
		date: '10-12-2022',
		passage: 'John 10:1-6'
	},
	{
		date: '10-13-2022',
		passage: 'John 10:7-18'
	},
	{
		date: '10-14-2022',
		passage: '2 Corinthians 9: 6-11'
	},
	{
		date: '10-15-2022',
		passage: 'Matt 12:33-37'
	},
	{
		date: '10-16-2022',
		passage: 'John 15:1-17'
	},
	{
		date: '10-17-2022',
		passage: '2 Corinthians 12:1-10'
	},
	{
		date: '10-18-2022',
		passage: 'Proverbs 31'
	},
	{
		date: '10-19-2022',
		passage: 'Philippians 2:12-18'
	},
	{
		date: '10-20-2022',
		passage: 'Colossians 2:6-23'
	},
	{
		date: '10-21-2022',
		passage: 'Ephesians 2:1-10'
	},
	{
		date: '10-22-2022',
		passage: 'Colossians 3'
	},
	{
		date: '10-23-2022',
		passage: 'Matthew 13:1-23'
	},
	{
		date: '10-24-2022',
		passage: 'Philippians 4:10-13'
	},
	{
		date: '10-25-2022',
		passage: 'Ezekiel 17'
	},
	{
		date: '10-26-2022',
		passage: 'Psalm 1'
	},
	{
		date: '10-27-2022',
		passage: 'Matthew 13:31-32'
	},
	{
		date: '10-28-2022',
		passage: 'Jeremiah 17:5-8'
	},
	{
		date: '10-29-2022',
		passage: 'Isaiah 61'
	},
	{
		date: '10-30-2022',
		passage: 'Psalm 34'
	},
	{
		date: '10-31-2022',
		passage: 'Ephesians 1:15-23'
	},
	{
		date: '11-1-2022',
		passage: '1 Chronicles 16:7-36'
	},
	{
		date: '11-2-2022',
		passage: 'Colossians 3:15-17'
	},
	{
		date: '11-3-2022',
		passage: '1 Thessalonians 5:16-18'
	},
	{
		date: '11-4-2022',
		passage: 'Psalm 28'
	},
	{
		date: '11-5-2022',
		passage: '2 Corinthians 4:13-18'
	},
	{
		date: '11-6-2022',
		passage: 'Psalm 100'
	},
	{
		date: '11-7-2022',
		passage: 'Philippians 4:4-7'
	},
	{
		date: '11-8-2022',
		passage: '2 Corinthians 9:10-15'
	},
	{
		date: '11-9-2022',
		passage: 'Isaiah 12'
	},
	{
		date: '11-10-2022',
		passage: 'Psalm 118:1-9'
	},
	{
		date: '11-11-2022',
		passage: 'Philemon 4-7'
	},
	{
		date: '11-12-2022',
		passage: 'Psalm 107'
	},
	{
		date: '11-13-2022',
		passage: 'Psalm 111'
	},
	{
		date: '11-14-2022',
		passage: 'Ephesians 3:14-21'
	},
	{
		date: '11-15-2022',
		passage: 'Colossians 4:2-6'
	},
	{
		date: '11-16-2022',
		passage: '1 Timothy 4: 1-8'
	},
	{
		date: '11-17-2022',
		passage: 'Jonah 2: 9'
	},
	{
		date: '11-18-2022',
		passage: 'Hebrews 12:28-29'
	},
	{
		date: '11-19-2022',
		passage: 'Hebrews 13:15-16'
	},
	{
		date: '11-20-2022',
		passage: 'Psalm 95'
	},
	{
		date: '11-21-2022',
		passage: 'Psalm 89'
	},
	{
		date: '11-22-2022',
		passage: 'Psalm 92'
	},
	{
		date: '11-23-2022',
		passage: 'Psalm 7:17'
	},
	{
		date: '11-24-2022',
		passage: '1 Corinthians 15:50-58'
	},
	{
		date: '11-25-2022',
		passage: 'Romans 7:21-25'
	},
	{
		date: '11-26-2022',
		passage: '1 Timothy 2:1-4'
	},
	{
		date: '11-27-2022',
		passage: 'Luke 1: 26-38'
	},
	{
		date: '11-28-2022',
		passage: '1 Timothy 4:9-10'
	},
	{
		date: '11-29-2022',
		passage: 'Romans 12:12'
	},
	{
		date: '11-30-2022',
		passage: 'Colossians 1:24-29'
	},
	{
		date: '12-1-2022',
		passage: 'Hebrews 6:13-20'
	},
	{
		date: '12-2-2022',
		passage: 'Isaiah 40:28-31'
	},
	{
		date: '12-3-2022',
		passage: 'Romans 5:1-8'
	},
	{
		date: '12-4-2022',
		passage: 'Luke 2: 8-12'
	},
	{
		date: '12-5-2022',
		passage: 'John 16:16-33'
	},
	{
		date: '12-6-2022',
		passage: 'Matthew 2:10-11'
	},
	{
		date: '12-7-2022',
		passage: 'Romans 15:13'
	},
	{
		date: '12-8-2022',
		passage: 'Isaiah 49:13'
	},
	{
		date: '12-9-2022',
		passage: 'Luke 1:39-45'
	},
	{
		date: '12-10-2022',
		passage: 'Luke 1:46-56'
	},
	{
		date: '12-11-2022',
		passage: 'Luke 2: 13-20'
	},
	{
		date: '12-12-2022',
		passage: 'John 14:25-31'
	},
	{
		date: '12-13-2022',
		passage: '2 Thessalonians 3:16'
	},
	{
		date: '12-14-2022',
		passage: 'Isaiah 26:3-4'
	},
	{
		date: '12-15-2022',
		passage: 'James 3:13-18'
	},
	{
		date: '12-16-2022',
		passage: 'Romans 8:1-17'
	},
	{
		date: '12-17-2022',
		passage: 'Hebrews 13:20-21'
	},
	{
		date: '12-18-2022',
		passage: 'Luke 1:46-56'
	},
	{
		date: '12-19-2022',
		passage: '1 John 4:10-12'
	},
	{
		date: '12-20-2022',
		passage: 'Ephesians 3:14-21'
	},
	{
		date: '12-21-2022',
		passage: 'John 1:1-5,14'
	},
	{
		date: '12-22-2022',
		passage: 'Romans 13:8-10'
	},
	{
		date: '12-23-2022',
		passage: '1 John 3: 1-3'
	}
];

export default Readings;
