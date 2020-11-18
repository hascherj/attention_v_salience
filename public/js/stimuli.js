
scenarios = [
  {
    "index": 0,
    "name": 'elevator_personal',
    "act": 'by throwing them into the elevator cogs',
    "dont_act": 'by allowing them to fall into the elevator cogs',
    "means": 'crushed by elevator cogs',
    "action": 'throw a person',
    "personal": 1,
  },
  {
    "index": 1,
    "name": 'elevator_impersonal',
    "act": 'by pulling a cord to drop them into the elevator cogs',
    "dont_act": 'by allowing them to fall into the elevator cogs',
    "means": 'crushed by elevator cogs',
    "action": 'pull a cord',
    "personal": 0,
  },

  {
    "index": 2,
    "name": 'rabid_dog_personal',
    "act": 'by pushing them in front of the rabid dog',
    "dont_act": 'by leaving them in front of the rabid dog',
    "means": 'mauled by a rabid dog',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 3,
    "name": 'rabid_dog_impersonal',
    "act": 'by pushing a button to put them in front of the rabid dog',
    "dont_act": 'by leaving them in front of the rabid dog',
    "means": 'mauled by a rabid dog',
    "action": 'push a button',
    "personal": 0,
  },

  {
    "index": 4,
    "name": 'lion_personal',
    "act": 'by pushing them in front of the lion',
    "dont_act": 'by leaving them in front of the lion',
    "means": 'mauled by a lion',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 5,
    "name": 'lion_impersonal',
    "act": 'by pushing a button to put them in front of the lion',
    "dont_act": 'by leaving them in front of the lion',
    "means": 'mauled by a lion',
    "action": 'push a button',
    "personal": 0,
  },

  {
    "index": 6,
    "name": 'dump_truck_personal',
    "act": 'by pushing them in front of the dump truck',
    "dont_act": 'by leaving them in front of the dump truck',
    "means": 'crushed by a dump truck',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 7,
    "name": 'dump_truck_impersonal',
    "act": 'by pulling a lever to drop them in front of a the truck',
    "dont_act": 'by leaving them in front of the truck',
    "means": 'crushed by a dump truck',
    "action": 'pull a lever',
    "personal": 0,
  },

  {
    "index": 8,
    "name": 'boat_personal',
    "act": 'by pushing them off the motor boat',
    "dont_act": 'by leaving them in the river',
    "means": 'drown',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 9,
    "name": 'boat_impersonal',
    "act": 'by pressing a button to eject them from the boat',
    "dont_act": 'by leaving them in the river',
    "means": 'drown',
    "action": 'press a button',
    "personal": 0,
  },

  {
    "index": 10,
    "name": 'fire_personal',
    "act": 'by pushing them into the fire',
    "dont_act": 'by leaving them in the fire\'s path',
    "means": 'burn alive',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 11,
    "name": 'fire_impersonal',
    "act": 'by pulling a lever to drop them into the spreading fire',
    "dont_act": 'by leaving them in the fire\'s path',
    "means": 'burn alive',
    "action": 'pull a lever',
    "personal": 0,
  },

  {
    "index": 12,
    "name": 'gunman_personal',
    "act": 'by pushing them into the path of the gunman',
    "dont_act": 'by leaving them in the gunman\'s path',
    "means": 'shot',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 13,
    "name": 'gunman_impersonal',
    "act": 'by pushing a button to put them in front of the gunman',
    "dont_act": 'by leaving them in the gunman\'s path',
    "means": 'shot',
    "action": 'push a button',
    "personal": 0,
  },

  {
    "index": 14,
    "name": 'electric_wire_personal',
    "act": 'by pushing them to block the electric wire',
    "dont_act": 'by leaving them in the electric wire\'s path',
    "means": 'electrocuted',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 15,
    "name": 'electric_wire_impersonal',
    "act": 'by flipping a switch to push them into the electric wire',
    "dont_act": 'by leaving them in the electric wire\'s path',
    "means": 'electrocuted',
    "action": 'flip a switch',
    "personal": 0,
  },

  {
    "index": 16,
    "name": 'tear_organs',
    "act": 'by tearing out their organs to extract vitamins',
    "dont_act": 'by allowing them to succumb to vitamin deficiency',
    "means": 'blood loss',
    "action": 'tear out organs',
    "personal": 1,
  },
  {
    "index": 17,
    "name": 'transplant_organs',
    "act": 'by surgically removing their organs to transplant',
    "dont_act": 'by allowing them to succumb to organ injuries',
    "means": 'blood loss',
    "action": 'surgically remove organs',
    "personal": 0,
  },

  {
    "index": 18,
    "name": 'strangle',
    "act": 'by strangling',
    "dont_act": 'by allowing them to suffocate',
    "means": 'suffocation',
    "action": 'strangle',
    "personal": 1,
  },
  {
    "index": 19,
    "name": 'air_loss',
    "act": 'by removing their oxygen tank',
    "dont_act": 'by allowing them to die from oxygen deprivation',
    "means": 'air loss',
    "action": 'remove an oxygen tank',
    "personal": 0,
  },

  {
    "index": 20,
    "name": 'slit_throat',
    "act": 'by slitting their throat',
    "dont_act": 'by allowing their throats\' to be slit',
    "means": 'blood loss from neck',
    "action": 'slit throat',
    "personal": 1,
  },
  {
    "index": 21,
    "name": 'euthanize',
    "act": 'by euthanizing them',
    "dont_act": 'by allowing them to be euthanized',
    "means": 'euthanized',
    "action": 'euthanize',
    "personal": 0,
  },

  {
    "index": 22,
    "name": 'poison',
    "act": 'by forcing them to drink poison',
    "dont_act": 'by allowing them to drink poison',
    "means": 'poisoned',
    "action": 'poison',
    "personal": 1,
  },
  {
    "index": 23,
    "name": 'missle',
    "act": 'by diverting their plan to block the missle',
    "dont_act": 'by leaving them in the missle\'s path',
    "means": 'plane explosion from missle',
    "action": 'divert missles',
    "personal": 0,
  },

  {
    "index": 24,
    "name": 'hang',
    "act": 'by hanging them',
    "dont_act": 'by allowing them to be hanged',
    "means": 'hanging',
    "action": 'hang someone',
    "personal": 1,
  },
  {
    "index": 25,
    "name": 'starve',
    "act": 'by starving them to death',
    "dont_act": 'by allowing them to die from starvation',
    "means": 'starvation',
    "action": 'take away food',
    "personal": 0,
  },
  {
    "index": 26,
    "name": 'tear_limbs',
    "act": 'by tearing off their limbs',
    "dont_act": 'by allowing their limbs to be torn off',
    "means": 'torn limbs',
    "action": 'tear limbs',
    "personal": 0,
  }
];



items = [
  {
    "index": 0,
    "name": 'a baby',
    "singular": 'baby',
    "plural": 'babies',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 1,
    "name": 'an elderly person',
    "singular": 'elderly person',
    "plural": 'elderly people',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 2,
    "name": 'a dog',
    "singular": 'dog',
    "plural": 'dogs',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 3,
    "name": 'a person with cancer',
    "singular": 'person with cancer',
    "plural": 'people with cancer',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 4,
    "name": 'a homeless man',
    "singular": 'homeless man',
    "plural": 'homeless men',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 5,
    "name": 'a homeless woman',
    "singular": 'homeless woman',
    "plural": 'homeless women',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 6,
    "name": 'a child',
    "singular": 'child',
    "plural": 'children',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 7,
    "name": 'an adult',
    "singular": 'adult',
    "plural": 'adults',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 8,
    "name": 'a cat',
    "singular": 'cat',
    "plural": 'cats',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 9,
    "name": 'a blind person',
    "singular": 'blind person',
    "plural": 'blind people',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 10,
    "name": 'a person in a coma',
    "singular": 'person in a coma',
    "plural": 'people in comas',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 11,
    "name": 'a person in a wheelchair',
    "singular": 'person in a wheelchair',
    "plural": 'people in wheelchairs',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 12,
    "name": 'a panda',
    "singular": 'panda',
    "plural": 'pandas',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 13,
    "name": 'a doctor',
    "singular": 'doctor',
    "plural": 'doctors',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 14,
    "name": 'a scientist',
    "singular": 'scientist',
    "plural": 'scientists',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 15,
    "name": 'a soldier',
    "singular": 'soldier',
    "plural": 'soldiers',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 16,
    "name": 'a police officer',
    "singular": 'police officer',
    "plural": 'police officers',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 17,
    "name": 'a teacher',
    "singular": 'teacher',
    "plural": 'teachers',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 18,
    "name": 'a college professor',
    "singular": 'college professor',
    "plural": 'college professors',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 19,
    "name": 'a trash collector',
    "singular": 'trash collector',
    "plural": 'trash collectors',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 20,
    "name": 'a prisoner',
    "singular": 'prisoner',
    "plural": 'prisoners',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 21,
    "name": 'a hamster',
    "singular": 'hamster',
    "plural": 'hamsters',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 22,
    "name": 'a snake',
    "singular": 'snake',
    "plural": 'snakes',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 23,
    "name": 'a turtle',
    "singular": 'turtle',
    "plural": 'turtles',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 24,
    "name": 'a recent immigrant',
    "singular": 'recent immigrant',
    "plural": 'recent immigrants',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 25,
    "name": 'a rare bird',
    "singular": 'rare bird',
    "plural": 'rare birds',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 26,
    "name": 'a local politician',
    "singular": 'local politician',
    "plural": 'local politicians',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 27,
    "name": 'a classical musician',
    "singular": 'classical musician',
    "plural": 'classical musicians',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 28,
    "name": 'a firefighter',
    "singular": 'firefighter',
    "plural": 'firefighters',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 29,
    "name": 'a librarian',
    "singular": 'librarian',
    "plural": 'librarians',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 30,
    "name": 'a single mother',
    "singular": 'single mother',
    "plural": 'single mothers',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 31,
    "name": 'an artist',
    "singular": 'artist',
    "plural": 'artists',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 32,
    "name": 'a nurse',
    "singular": 'nurse',
    "plural": 'nurses',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 33,
    "name": 'a mouse',
    "singular": 'mouse',
    "plural": 'mice',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 34,
    "name": 'an endangered elephant',
    "singular": 'endangered elephant',
    "plural": 'endangered elephants',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 35,
    "name": 'your mailman',
    "singular": 'mailman',
    "plural": 'mailmen',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 36,
    "name": 'your baby',
    "singular": 'baby',
    "plural": 'babies',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 37,
    "name": 'your pet dog',
    "singular": 'pet dog',
    "plural": 'pet dogs',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 38,
    "name": 'your brother',
    "singular": 'brother',
    "plural": 'brothers',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 39,
    "name": 'your sister',
    "singular": 'sister',
    "plural": 'sisters',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 40,
    "name": 'your child',
    "singular": 'child',
    "plural": 'children',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 41,
    "name": 'your close friend',
    "singular": 'close friend',
    "plural": 'close friends',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 42,
    "name": 'your pet cat',
    "singular": 'pet cat',
    "plural": 'pet cats',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 43,
    "name": 'your aunt',
    "singular": 'aunt',
    "plural": 'aunts',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 44,
    "name": 'your uncles',
    "singular": 'uncle',
    "plural": 'uncles',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 45,
    "name": 'your teacher',
    "singular": 'teacher',
    "plural": 'teachers',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 46,
    "name": 'your son',
    "singular": 'son',
    "plural": 'sons',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 47,
    "name": 'your daughter',
    "singular": 'daughter',
    "plural": 'daughters',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 48,
    "name": 'your college professor',
    "singular": 'college professor',
    "plural": 'college professors',
    "general": 0,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 49,
    "name": 'your class project partner',
    "singular": 'class project partner',
    "plural": 'class project partners',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 50,
    "name": 'your next-door neighbor',
    "singular": 'next-door neighbor',
    "plural": 'next-door neighbors',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 51,
    "name": 'your uber/lyft driver',
    "singular": 'uber/lyft driver',
    "plural": 'uber/lyft drivers',
    "general": 0,
    "negative": 0,
    "number_max": 5
  },
  {
    "index": 52,
    "name": 'a cook',
    "singular": 'cook',
    "plural": 'cooks',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 53,
    "name": 'a construction worker',
    "singular": 'construction worker',
    "plural": 'construction workers',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 54,
    "name": 'a janitor',
    "singular": 'janitor',
    "plural": 'janitors',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 55,
    "name": 'a mechanic',
    "singular": 'mechanic',
    "plural": 'mechanics',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 56,
    "name": 'an engineer',
    "singular": 'engineer',
    "plural": 'engineers',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 57,
    "name": 'a bus driver',
    "singular": 'bus driver',
    "plural": 'bus drivers',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 58,
    "name": 'a factory worker',
    "singular": 'factory worker',
    "plural": 'factory workers',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 59,
    "name": 'a warehouse worker',
    "singular": 'warehouse worker',
    "plural": 'warehouse workers',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 60,
    "name": 'a window washer',
    "singular": 'window washer',
    "plural": 'window washers',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 61,
    "name": 'a lawyer',
    "singular": 'lawyer',
    "plural": 'lawyers',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 62,
    "name": 'a convicted murderer',
    "singular": 'convicted murderer',
    "plural": 'convicted murderers',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 63,
    "name": 'a priest',
    "singular": 'priest',
    "plural": 'priests',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 64,
    "name": 'a terrorist',
    "singular": 'terrorist',
    "plural": 'terrorists',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 65,
    "name": 'a drug addict',
    "singular": 'drug addict',
    "plural": 'drug addicts',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 66,
    "name": 'a car salesman',
    "singular": 'car salesman',
    "plural": 'car salesmen',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 67,
    "name": 'a thief',
    "singular": 'thief',
    "plural": 'thieves',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 68,
    "name": 'a pilot',
    "singular": 'pilot',
    "plural": 'pilots',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 69,
    "name": 'a Fortune 500 CEO',
    "singular": 'Fortune 500 CEO',
    "plural": 'Fortune 500 CEOs',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 70,
    "name": 'an oil tycoon',
    "singular": 'oil tycoon',
    "plural": 'oil tycoons',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 71,
    "name": 'a drug dealer',
    "singular": 'drug dealer',
    "plural": 'drug dealers',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 72,
    "name": 'a telemarketer',
    "singular": 'telemarketer',
    "plural": 'telemarketers',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 73,
    "name": 'a pedophile',
    "singular": 'pedophile',
    "plural": 'pedophiles',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 74,
    "name": 'a dentist',
    "singular": 'dentist',
    "plural": 'dentist',
    "general": 1,
    "negative": 0,
    "number_max": null
  },
  {
    "index": 75,
    "name": 'an evangelical preacher',
    "singular": 'evangelical preacher',
    "plural": 'evangelical preacher',
    "general": 1,
    "negative": 1,
    "number_max": null
  },
  {
    "index": 76,
    "name": 'your grandmother',
    "singular": 'grandmother',
    "plural": 'grandmothers',
    "general": 1,
    "negative": 0,
    "number_max": 2
  },
  {
    "index": 77,
    "name": 'your grandfather',
    "singular": 'grandfather',
    "plural": 'grandfathers',
    "general": 1,
    "negative": 0,
    "number_max": 2
  }
]


scenarios_practice = [
  {
      "index": 0,
      "name": 'bear_personal',
      "act": 'by pushing them in front of the the bear',
      "dont_act": 'by leaving them in the path of the bear',
      "means": 'mauled by a bear',
      "action": 'push someone',
      "personal": 1,
    },
    {
      "index": 2,
      "name": 'poison_gas_impersonal',
      "act": 'by pushing a button to release poisonous gas',
      "dont_act": 'by allowing them to be suffocated by poisonous gas',
      "means": 'poison gas',
      "action": 'push a button',
      "personal": 0,
    },
    {
    "index": 1,
    "name": 'trolley_impersonal',
    "act": 'by pulling a lever to divert the trolley',
    "dont_act": 'by leaving them in the path of the trolley',
    "means": 'crushed by trolley',
    "action": 'pull a lever',
    "personal": 0,
  },
];

  items_practice = [
    {
      "index": 0,
      "singular": 'professional athlete',
      "plural": 'professional athletes',
      "general": 1,
      "negative": 0,
      "number_max": null
    },
    {
      "index": 1,
      "singular": 'butterfly',
      "plural": 'butterflies',
      "general": 1,
      "negative": 0,
      "number_max": null
    },
    {
      "index": 2,
      "singular": 'military veteran',
      "plural": 'military veterans',
      "general": 1,
      "negative": 0,
      "number_max": null
    }];