
scenarios = [
  {
    "index": 0,
    "name": 'elevator_personal',
    "full":  'throw someone into elevator cogs',
    "act": 'by throwing them into elevator cogs',
    "dont_act": 'by allowing them to fall into elevator cogs',
    "means": 'crushed by elevator cogs',
    "action": 'throw a person',
    "personal": 1,
  },
  {
    "index": 1,
    "name": 'elevator_impersonal',
    "full":  'pull a cord to drop someone into elevator cogs',
    "act": 'by pulling a cord to drop them into elevator cogs',
    "dont_act": 'by allowing them to fall into elevator cogs',
    "means": 'crushed by elevator cogs',
    "action": 'pull a cord',
    "personal": 0,
  },
  {
    "index": 2,
    "name": 'rabid_dog_personal',
    "full":  'push someone in front of a rabid dog',
    "act": 'by pushing them in front of the rabid dog',
    "dont_act": 'by leaving them in front of the rabid dog',
    "means": 'mauled by a rabid dog',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 3,
    "name": 'rabid_dog_impersonal',
    "full":  'push a button to put someone in front of a rabid dog',
    "act": 'by pushing a button to put them in front of the rabid dog',
    "dont_act": 'by leaving them in front of the rabid dog',
    "means": 'mauled by a rabid dog',
    "action": 'push a button',
    "personal": 0,
  },
  {
    "index": 4,
    "name": 'lion_personal',
    "full":  'push someone in front of a lion',
    "act": 'by pushing them in front of the lion',
    "dont_act": 'by leaving them in front of the lion',
    "means": 'mauled by a lion',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 5,
    "name": 'dump_truck_personal',
    "full":  'push someone in front of a dump truck',
    "act": 'by pushing them in front of the dump truck',
    "dont_act": 'by leaving them in front of the dump truck',
    "means": 'crushed by a truck',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 6,
    "name": 'dump_truck_impersonal',
    "full":  'pull a lever to drop someone in front of a truck',
    "act": 'by pulling a lever to drop them in front of the truck',
    "dont_act": 'by leaving them in front of the truck',
    "means": 'crushed by a truck',
    "action": 'pull a lever',
    "personal": 0,
  },
  {
    "index": 7,
    "name": 'boat_personal',
    "full":  'push someone off of a motor boat',
    "act": 'by pushing them off the motor boat',
    "dont_act": 'by leaving them in the river',
    "means": 'drown',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 8,
    "name": 'boat_impersonal',
    "full":  'press a button to eject someone from a boat',
    "act": 'by pressing a button to eject them from the boat',
    "dont_act": 'by leaving them in the river',
    "means": 'drown',
    "action": 'press a button',
    "personal": 0,
  },
  {
    "index": 9,
    "name": 'fire_personal',
    "full":  'by pushing someone into a fire',
    "act": 'by pushing them into the fire',
    "dont_act": 'by leaving them in the fire\'s path',
    "means": 'burn alive',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 10,
    "name": 'fire_impersonal',
    "full":  'by pulling a lever to drop someone into a fire',
    "act": 'by pulling a lever to drop them into the fire',
    "dont_act": 'by leaving them in the fire\'s path',
    "means": 'burn alive',
    "action": 'pull a lever',
    "personal": 0,
  },
  {
    "index": 11,
    "name": 'gunman_personal',
    "full":  'by pushing someone into the path of a gunman',
    "act": 'by pushing them into the path of the gunman',
    "dont_act": 'by leaving them in the gunman\'s path',
    "means": 'shot',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 12,
    "name": 'electric_wire_personal',
    "full":  'push someone to block an electric wire',
    "act": 'by pushing them to block the electric wire',
    "dont_act": 'by leaving them in the electric wire\'s path',
    "means": 'electrocuted',
    "action": 'push someone',
    "personal": 1,
  },
  {
    "index": 13,
    "name": 'tear_organs',
    "full":  'tear out someone\'s organs to extract vitamins',
    "act": 'by tearing out their organs to extract vitamins',
    "dont_act": 'by allowing them to succumb to vitamin deficiency',
    "means": 'blood loss',
    "action": 'tear out organs',
    "personal": 1,
  },
  {
    "index": 14,
    "name": 'transplant_organs',
    "full":  'surgically remove someone\'s organs',
    "act": 'by surgically removing their organs to transplant',
    "dont_act": 'by allowing them to succumb to organ injuries',
    "means": 'blood loss',
    "action": 'surgically remove organs',
    "personal": 0,
  },
  {
    "index": 15,
    "name": 'strangle',
    "full":  'strangle someone',
    "act": 'by strangling them',
    "dont_act": 'by allowing them to be strangled',
    "means": 'suffocation',
    "action": 'strangle',
    "personal": 1,
  },
  {
    "index": 16,
    "name": 'air_loss',
    "full":  'remove someone\'s oxygen supply',
    "act": 'by removing their oxygen supply',
    "dont_act": 'by allowing them to die from oxygen deprivation',
    "means": 'air loss',
    "action": 'remove an oxygen tank',
    "personal": 0,
  },
  {
    "index": 17,
    "name": 'slit_throat',
    "full":  'slit someone\'s throat',
    "act": 'by slitting their throat',
    "dont_act": 'by allowing their throats\' to be slit',
    "means": 'blood loss from neck',
    "action": 'slit throat',
    "personal": 1,
  },
  {
    "index": 18,
    "name": 'euthanize',
    "full":  'euthanize someone',
    "act": 'by euthanizing them',
    "dont_act": 'by allowing them to be euthanized',
    "means": 'euthanized',
    "action": 'euthanize',
    "personal": 0,
  },
  {
    "index": 19,
    "name": 'poison',
    "full":  'force to drink poison',
    "act": 'by forcing them to drink poison',
    "dont_act": 'by allowing them to drink poison',
    "means": 'poisoned',
    "action": 'poison',
    "personal": 1,
  },
  {
    "index": 20,
    "name": 'hang',
    "full":  'hang someone',
    "act": 'by hanging them',
    "dont_act": 'by allowing them to be hanged',
    "means": 'hanging',
    "action": 'hang someone',
    "personal": 1,
  },
  {
    "index": 21,
    "name": 'starve',
    "full":  'starve someone to death',
    "act": 'by starving them to death',
    "dont_act": 'by allowing them to die from starvation',
    "means": 'starvation',
    "action": 'take away food',
    "personal": 1,
  },
  {
    "index": 22,
    "name": 'tear_limbs',
    "full":  'tear off someone\'s limbs',
    "act": 'by tearing off their limbs',
    "dont_act": 'by allowing their limbs to be torn off',
    "means": 'torn limbs',
    "action": 'tear limbs',
    "personal": 1,
  },
  {
    "index": 23,
    "name": 'crush skull',
    "full":  'crush someone\'s skull',
    "act": 'by crushing their skull',
    "dont_act": 'by allowing their skull to be crushed',
    "means": 'crushed skulls',
    "action": 'crush limb',
    "personal": 1,
  },
  {
    "index": 24,
    "name": 'gouge eyes',
    "full":  'gouge out someone\'s eyes',
    "act": 'by gouging out their eyes',
    "dont_act": 'by allowing their eyes to be gouged out',
    "means": 'gouged out eyes',
    "action": 'gouge out eyes',
    "personal": 1,
  },
  {
    "index": 25,
    "name": 'bludgeon',
    "full":  'bludgeon someone to death',
    "act": 'by bludgeoning someone to death',
    "dont_act": 'by allowing someone to be bludgeoned to death',
    "means": 'bludgeon',
    "action": 'bludgeon',
    "personal": 1,
  }


];



items = [
  {
    "index": 0,
    "name": 'a baby',
    "singular": 'baby',
    "plural": 'babies',
    "general": 1,
    "category": 6,
    "number_max": null
  },
  {
    "index": 1,
    "name": 'an elderly person',
    "singular": 'elderly person',
    "plural": 'elderly people',
    "general": 1,
    "category": 6,
    "number_max": null
  },
  {
    "index": 2,
    "name": 'a dog',
    "singular": 'dog',
    "plural": 'dogs',
    "general": 1,
    "category": 10,
    "number_max": null
  },
  {
    "index": 3,
    "name": 'a person with cancer',
    "singular": 'person with cancer',
    "plural": 'people with cancer',
    "general": 1,
    "category": 13,
    "number_max": null
  },
  {
    "index": 4,
    "name": 'a homeless man',
    "singular": 'homeless man',
    "plural": 'homeless men',
    "general": 1,
    "category": 9,
    "number_max": null
  },
  {
    "index": 5,
    "name": 'a homeless woman',
    "singular": 'homeless woman',
    "plural": 'homeless women',
    "general": 1,
    "category": 9,
    "number_max": null
  },
  {
    "index": 6,
    "name": 'a child',
    "singular": 'child',
    "plural": 'children',
    "general": 1,
    "category": 6,
    "number_max": null
  },
  {
    "index": 7,
    "name": 'a cat',
    "singular": 'cat',
    "plural": 'cats',
    "general": 1,
    "category": 15,
    "number_max": null
  },
  {
    "index": 8,
    "name": 'a blind person',
    "singular": 'blind person',
    "plural": 'blind people',
    "general": 1,
    "category": 9,
    "number_max": null
  },
  {
    "index": 9,
    "name": 'a person in a coma',
    "singular": 'person in a coma',
    "plural": 'people in comas',
    "general": 1,
    "category": 13,
    "number_max": null
  },
  {
    "index": 10,
    "name": 'a person in a wheelchair',
    "singular": 'person in a wheelchair',
    "plural": 'people in wheelchairs',
    "general": 1,
    "category": 9,
    "number_max": null
  },
  {
    "index": 11,
    "name": 'a doctor',
    "singular": 'doctor',
    "plural": 'doctors',
    "general": 1,
    "category": 7,
    "number_max": null
  },
  {
    "index": 12,
    "name": 'a scientist',
    "singular": 'scientist',
    "plural": 'scientists',
    "general": 1,
    "category": 7,
    "number_max": null
  },
  {
    "index": 13,
    "name": 'a soldier',
    "singular": 'soldier',
    "plural": 'soldiers',
    "general": 1,
    "category": 14,
    "number_max": null
  },
  {
    "index": 14,
    "name": 'a police officer',
    "singular": 'police officer',
    "plural": 'police officers',
    "general": 1,
    "category": 14,
    "number_max": null
  },
  {
    "index": 15,
    "name": 'a teacher',
    "singular": 'teacher',
    "plural": 'teachers',
    "general": 1,
    "category": 8,
    "number_max": null
  },
  {
    "index": 16,
    "name": 'a college professor',
    "singular": 'college professor',
    "plural": 'college professors',
    "general": 1,
    "category": 7,
    "number_max": null
  },
  {
    "index": 17,
    "name": 'a trash collector',
    "singular": 'trash collector',
    "plural": 'trash collectors',
    "general": 1,
    "category": 11,
    "number_max": null
  },
  {
    "index": 18,
    "name": 'a hamster',
    "singular": 'hamster',
    "plural": 'hamsters',
    "general": 1,
    "category": 15,
    "number_max": null
  },
  {
    "index": 19,
    "name": 'a turtle',
    "singular": 'turtle',
    "plural": 'turtles',
    "general": 1,
    "category": 15,
    "number_max": null
  },
  {
    "index": 20,
    "name": 'a recent immigrant',
    "singular": 'recent immigrant',
    "plural": 'recent immigrants',
    "general": 1,
    "category": 8,
    "number_max": null
  },
  {
    "index": 21,
    "name": 'a rare bird',
    "singular": 'rare bird',
    "plural": 'rare birds',
    "general": 1,
    "category": 15,
    "number_max": null
  },
  {
    "index": 22,
    "name": 'a local politician',
    "singular": 'local politician',
    "plural": 'local politicians',
    "general": 1,
    "category": 14,
    "number_max": null
  },
  {
    "index": 23,
    "name": 'a classical musician',
    "singular": 'classical musician',
    "plural": 'classical musicians',
    "general": 1,
    "category": 8,
    "number_max": null
  },
  {
    "index": 24,
    "name": 'a firefighter',
    "singular": 'firefighter',
    "plural": 'firefighters',
    "general": 1,
    "category": 11,
    "number_max": null
  },
  {
    "index": 25,
    "name": 'a librarian',
    "singular": 'librarian',
    "plural": 'librarians',
    "general": 1,
    "category": 8,
    "number_max": null
  },
  {
    "index": 26,
    "name": 'a single mother',
    "singular": 'single mother',
    "plural": 'single mothers',
    "general": 1,
    "category": 6,
    "number_max": null
  },
  {
    "index": 27,
    "name": 'an artist',
    "singular": 'artist',
    "plural": 'artists',
    "general": 1,
    "category": 10,
    "number_max": null
  },
  {
    "index": 28,
    "name": 'a nurse',
    "singular": 'nurse',
    "plural": 'nurses',
    "general": 1,
    "category": 7,
    "number_max": null
  },
  {
    "index": 29,
    "name": 'your mailman',
    "singular": 'mailman',
    "plural": 'mailmen',
    "general": 0,
    "category": 12,
    "number_max": 5
  },
  {
    "index": 30,
    "name": 'your baby',
    "singular": 'baby',
    "plural": 'babies',
    "general": 0,
    "category": 1,
    "number_max": 5
  },
  {
    "index": 31,
    "name": 'your pet dog',
    "singular": 'pet dog',
    "plural": 'pet dogs',
    "general": 0,
    "category": 4,
    "number_max": 5
  },
  {
    "index": 32,
    "name": 'your brother',
    "singular": 'brother',
    "plural": 'brothers',
    "general": 0,
    "category": 2,
    "number_max": 5
  },
  {
    "index": 33,
    "name": 'your sister',
    "singular": 'sister',
    "plural": 'sisters',
    "general": 0,
    "category": 2,
    "number_max": 5
  },
  {
    "index": 34,
    "name": 'your child',
    "singular": 'child',
    "plural": 'children',
    "general": 0,
    "category": 1,
    "number_max": 5
  },
  {
    "index": 35,
    "name": 'your close friend',
    "singular": 'close friend',
    "plural": 'close friends',
    "general": 0,
    "category": 2,
    "number_max": 5
  },
  {
    "index": 36,
    "name": 'your pet cat',
    "singular": 'pet cat',
    "plural": 'pet cats',
    "general": 0,
    "category": 4,
    "number_max": 5
  },
  {
    "index": 37,
    "name": 'your aunt',
    "singular": 'aunt',
    "plural": 'aunts',
    "general": 0,
    "category": 3,
    "number_max": 5
  },
  {
    "index": 38,
    "name": 'your uncle',
    "singular": 'uncle',
    "plural": 'uncles',
    "general": 0,
    "category": 3,
    "number_max": 5
  },
  {
    "index": 39,
    "name": 'your teacher',
    "singular": 'teacher',
    "plural": 'teachers',
    "general": 0,
    "category": 5,
    "number_max": 5
  },
  {
    "index": 40,
    "name": 'your son',
    "singular": 'son',
    "plural": 'sons',
    "general": 0,
    "category": 1,
    "number_max": 5
  },
  {
    "index": 41,
    "name": 'your daughter',
    "singular": 'daughter',
    "plural": 'daughters',
    "general": 0,
    "category": 1,
    "number_max": 5
  },
  {
    "index": 42,
    "name": 'your college professor',
    "singular": 'college professor',
    "plural": 'college professors',
    "general": 0,
    "category": 5,
    "number_max": null
  },
  {
    "index": 43,
    "name": 'your class project partner',
    "singular": 'class project partner',
    "plural": 'class project partners',
    "general": 0,
    "category": 5,
    "number_max": 5
  },
  {
    "index": 44,
    "name": 'your next-door neighbor',
    "singular": 'next-door neighbor',
    "plural": 'next-door neighbors',
    "general": 0,
    "category": 5,
    "number_max": 5
  },
  {
    "index": 45,
    "name": 'your uber/lyft driver',
    "singular": 'uber/lyft driver',
    "plural": 'uber/lyft drivers',
    "general": 0,
    "category": 12,
    "number_max": 5
  },
  {
    "index": 46,
    "name": 'a cook',
    "singular": 'cook',
    "plural": 'cooks',
    "general": 1,
    "category": 10,
    "number_max": null
  },
  {
    "index": 47,
    "name": 'a construction worker',
    "singular": 'construction worker',
    "plural": 'construction workers',
    "general": 1,
    "category": 11,
    "number_max": null
  },
  {
    "index": 48,
    "name": 'a janitor',
    "singular": 'janitor',
    "plural": 'janitors',
    "general": 1,
    "category": 11,
    "number_max": null
  },
  {
    "index": 49,
    "name": 'a mechanic',
    "singular": 'mechanic',
    "plural": 'mechanics',
    "general": 1,
    "category": 11,
    "number_max": null
  },
  {
    "index": 50,
    "name": 'an engineer',
    "singular": 'engineer',
    "plural": 'engineers',
    "general": 1,
    "category": 8,
    "number_max": null
  },
  {
    "index": 51,
    "name": 'a bus driver',
    "singular": 'bus driver',
    "plural": 'bus drivers',
    "general": 1,
    "category": 11,
    "number_max": null
  },
  {
    "index": 52,
    "name": 'a factory worker',
    "singular": 'factory worker',
    "plural": 'factory workers',
    "general": 1,
    "category": 11,
    "number_max": null
  },
  {
    "index": 53,
    "name": 'a warehouse worker',
    "singular": 'warehouse worker',
    "plural": 'warehouse workers',
    "general": 1,
    "category": 11,
    "number_max": null
  },
  {
    "index": 54,
    "name": 'a window washer',
    "singular": 'window washer',
    "plural": 'window washers',
    "general": 1,
    "category": 11,
    "number_max": null
  },
  {
    "index": 55,
    "name": 'a pilot',
    "singular": 'pilot',
    "plural": 'pilots',
    "general": 1,
    "category": 14,
    "number_max": null
  },
  {
    "index": 56,
    "name": 'a dentist',
    "singular": 'dentist',
    "plural": 'dentists',
    "general": 1,
    "category": 7,
    "number_max": null
  },
  {
    "index": 57,
    "name": 'your grandmother',
    "singular": 'grandmother',
    "plural": 'grandmothers',
    "general": 1,
    "category": 3,
    "number_max": 2
  },
  {
    "index": 58,
    "name": 'your grandfather',
    "singular": 'grandfather',
    "plural": 'grandfathers',
    "general": 1,
    "category": 7,
    "number_max": 3
  }
]


scenarios_practice = [
  {
      "index": 0,
      "name": 'bear_personal',
      "full":  'push someone in front of a bear',
      "act": 'by pushing them in front of the bear',
      "dont_act": 'by leaving them in the path of the bear',
      "means": 'mauled by a bear',
      "action": 'push someone',
      "personal": 1,
    },
    {
      "index": 2,
      "name": 'poison_gas_impersonal',
      "full":  'push a button to releaes poisonous gas',
      "act": 'by pushing a button to release poisonous gas',
      "dont_act": 'by allowing them to be suffocated by poisonous gas',
      "means": 'poison gas',
      "action": 'push a button',
      "personal": 0,
    },
    {
    "index": 1,
    "name": 'trolley_impersonal',
    "full":  'by pulling a lever to divert a trolley',
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
      "name": 'a pro basketball player',
      "singular": 'pro basketball player',
      "plural": 'pro basketball players',
      "general": 1,
      "number_max": null
    },
    {
      "index": 1,
      "name": 'a butterfly',
      "singular": 'butterfly',
      "plural": 'butterflies',
      "general": 1,
      "number_max": null
    },
    {
      "index": 2,
      "name": 'navy veteran',
      "singular": 'navy veteran',
      "plural": 'navy veterans',
      "general": 1,
      "number_max": null
    },
    {
      "index": 3,
      "name": 'a pro football player',
      "singular": 'pro football player',
      "plural": 'pro football players',
      "general": 1,
      "number_max": null
    },
    {
      "index": 4,
      "name": 'a ladybug',
      "singular": 'ladybug',
      "plural": 'ladybugs',
      "general": 1,
      "number_max": null
    },
    {
      "index": 5,
      "name": 'army veteran',
      "singular": 'army veteran',
      "plural": 'army veterans',
      "general": 1,
      "number_max": null
    }];