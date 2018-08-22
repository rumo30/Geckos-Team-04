export const handyman = [
  {
    professionalsToFind: 'Handymen',
    type: 'intro',
    nextButtons: 'next',
  },
  {
    question: 'How would you best describe your handyman needs?',
    type: 'single',
    options: [
      'I need help with one project or a few simple projects, less than 2 hours of work',
      'I need help with a variety of projects, approximately 2-5 hours of work',
      'I need help with many long-term or complex projects, approximately a full day of work',
    ],
    required: true,
    nextButtons: 'backAndNext',
    validation: 'required',
    validationMessage: 'Please give an answer',
  },
  {
    question: 'What type of service do you need?',
    type: 'multi',
    options: ['Repairs', 'Installation', 'Maintenance', 'Assembly', 'Painting', 'Cleaning'],
    required: true,
    nextButtons: 'backAndNext',
    validation: 'required',
    validationMessage: 'Please give an answer',
  },
  {
    question: 'Which areas of the home need work?',
    type: 'multi',
    options: [
      'Bathroom',
      'Kitchen',
      'Living room',
      'Bedroom',
      'Basement',
      'Athletic',
      'Garage',
      'Deck or porch',
      'Closet',
    ],
    required: true,
    nextButtons: 'backAndNext',
    validation: 'required',
    validationMessage: 'Please give an answer',
  },
  {
    question: 'What would you like the handyman to work on?',
    type: 'multi',
    options: [
      'Doors',
      'Windows',
      'Interior walls',
      'Exterior walls',
      'Gutters',
      'Cabinets',
      'Shelving',
      'Molding or baseboards',
      'Flooring',
      'Tiling',
      'Appliances',
      'Plumbing',
      'Lighting',
      'Hanging pictures or mirrors',
      'Furniture repair',
    ],
    required: true,
    nextButtons: 'backAndNext',
    validation: 'required',
    validationMessage: 'Please give an answer',
  },
  {
    question: 'Please provide more details on your project.',
    type: 'textarea',
    required: false,
    nextButtons: 'backAndSkip',
    validation: '',
    validationMessage: '',
  },
  {
    question: 'What is the type of property?',
    type: 'single',
    options: ['Residential', 'Commercial'],
    required: true,
    nextButtons: 'backAndNext',
    validation: 'required',
    validationMessage: 'Please give an answer',
  },
  {
    question: 'Where are you in your hiring process?',
    type: 'single',
    options: [
      "I'm ready to hire the right handyman based on price & fit",
      "I'm conducting initial research",
    ],
    required: true,
    nextButtons: 'backAndNext',
    validation: 'required',
    validationMessage: 'Please give an answer',
  },
  {
    question: 'When do you need this service?',
    type: 'single',
    options: ['In the next few days', 'Within a week', 'As recommended by the pro'],
    required: true,
    nextButtons: 'backAndNext',
    validation: 'required',
    validationMessage: 'Please give an answer',
  },
  {
    question: 'Anything else the handyman should know?',
    type: 'textarea',
    required: false,
    nextButtons: 'backAndSkip',
    validation: '',
    validationMessage: '',
  },
  {
    question: 'Please confirm where you need the house cleaner.',
    type: 'zipCode',
    required: true,
    nextButtons: 'backAndNext',
    validation: 'zipcode',
    validationMessage: 'Please give a valid 5-digit zipcode.',
  },
  {
    question: 'Where should we send your matches?',
    type: 'email',
    required: true,
    nextButtons: 'backAndNext',
    validation: 'email',
    validationMessage: 'Please give a valid email address.',
  },
  {
    question: 'Please enter your full name.',
    type: 'name',
    required: true,
    nextButtons: 'submit',
    validation: 'name',
    validationMessage: 'Please give your full name.',
  },
];