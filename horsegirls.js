 // Example horsegirl targets (backend editable)
  const HORSEGIRLS = {
    specialweek: {
      name: "Special Week (Special Dreamer)",
      distance: "Middle",
      style: "Pace Chaser",
      stats: { Speed: 900, Stamina: 900, Power: 600, Wisdom: 400, Guts: 300 },
	  support: { support1: "Tokai Teio (Dream Big!)", support2: "Super Creek (Piece of Mind)", support3: "Mayano Top Gun (Cute + Cute = )", support4: "Sweep Tosho (Lamplit Training of a Witch-to-be)", support5: "Kitasan Black (Fire at My Heels)", support6: "Zenno Rob Roy (The Perfect Book for You)" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536322",
      notes: "Prioritize Stamina as Special Week prefers Long races. Afterward, maximize Speed while putting in some points into Power to help her break away from groups. As they are not the priority, you can increase Guts and Wit when able, with Wit as the higher priority."
    },
    silence: {
      name: "Silence Suzuka (Innocent Silence)",
      distance: "Mile",
      style: "Front-runner",
      stats: { Speed: 900, Stamina: 700, Power: 600, Wisdom: 300, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536321",	  
      notes: "As Silence Suzuka prefers Mile and Middle races, prioritize Speed and Power to help her stay in front of the race. Follow this up with Stamina, but this is not as important, especially if you have stamina recovery skills."
    },
    tokai: {
      name: "Tokai Teio (Peak Joy)",
      distance: "Middle",
      style: "Late-Surger",
      stats: { Speed: 900, Stamina: 800, Power: 600, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536320",	  
      notes: "Tokai Teio is a Pace Chaser that excels in Middle races, so prioritize building Speed and Stamina to help her keep her place in the race. Increase her Power and Guts as well to help her break out of the group when she moves to overtake in the later part of races."
    },
    goldship: {
      name: "Gold Ship (Red Strife)",
      distance: "Long",
      style: "End Closer",
      stats: { Speed: 900, Stamina: 800, Power: 700, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Since Gold Ship excels in being an End Closer in Middle to Long races, she will need a lot of Speed and Power to easily overtake her opponents. Increase her Stamina afterward, then give her some Guts and Wit after."
    },
    oguri: {
      name: "Oguri Cap (Starlight Beat)",
      distance: "Sprint/Mile",
      style: "Pace Chaser",
      stats: { Speed: 1000, Stamina: 800, Power: 800, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536318",	  
      notes: "Since Oguri Cap can be either a Pace Chaser or a Late Surger, having high Power and Speed will help her, as this lets her easily overtake her opponents. Stamina is not as important, but i still good to train. Having high Wit also helps her activate her skills."
    },
    maruzensky: {
      name: "Maruzensky (Formula R)",
      distance: "Mile",
      style: "Front-runner",
      stats: { Speed: 1000, Stamina: 800, Power: 600, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536319",	  
      notes: "Maruzensky likes to stay at the Front of Mile races, so having high Speed and Stamina is a must. Improve her Power to help with acceleration, as well as her Wits to help activate her skills, especially during the final part of a race."
    },
    taiki: {
      name: "Taiki Shuttle (Wild Frontier)",
      distance: "Mile",
      style: "Pace Chaser",
      stats: { Speed: 1000, Stamina: 700, Power: 800, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536317",	  
      notes: "Taiki Shuttle likes to Pace herself in shorter races, so getting high Speed and Power is a must to catch up in the final corner. Leveling her Wit is also recommended as it can help her activate important skills. Train her Stamina afterward, and finally Guts."
    },
    mcqueen1: {
      name: "Mejiro McQueen (Frontline Elegance)",
      distance: "Middle/Long",
      style: "Pace Chaser",
      stats: { Speed: 1000, Stamina: 900, Power: 700, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536316",	  
      notes: "Mejiro McQueen is a Pace Chaser for Middle and Long races, so having enough Stamina is important. She will also need Speed and Power to help overtake those ahead of her during the final spurt. Follow this up with Wit for her skills, and finally Guts."
    },
    opera: {
      name: "T.M. Opera O (O Sole Suo!)",
      distance: "Middle/Long",
      style: "Pace Chaser",
      stats: { Speed: 900, Stamina: 900, Power: 700, Wisdom: 300, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536315",	  
      notes: "T.M. Opera O will need Speed and Stamina as she prefers Middle and Long races. She will also need a lot of Power so that she can easily accelerate and overtake her opponents."
    },
    urara: {
      name: "Haru Urara (Bestest Prize)",
      distance: "Sprint",
      style: "Late-Surger",
      stats: { Speed: 900, Stamina: 600, Power: 800, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Haru Urara prefers Sprints with a focus on being a Late Surger. Prioritize increasing her Speed and Power to help her accelerate and overtake. Stamina is not as important, but it is helpful in some situations. Increase her Guts and Wit when able."
    },
    symboli: {
      name: "Symboli Rudolf (Emperor's Path)",
      distance: "Middle/Long",
      style: "Pace Chaser",
      stats: { Speed: 900, Stamina: 900, Power: 700, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536314",	  
      notes: "Because Symboli Rudolf prefers Middle and Long races while using a Pace Chaser or Late Surger style, she will need a lot of Speed, Stamina, and Power in that order. This will let her run fast for longer, as well as easily overtake her opponents. She has a 20% Stamina growth bonus, which should help her get the Stamina she needs."
    },
    rice: {
      name: "Rice Shower (Rosy Dreams)",
      distance: "Middle/Long",
      style: "Pace Chaser",
      stats: { Speed: 900, Stamina: 900, Power: 700, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536313",	  
      notes: "Rice Shower is a Pace Chaser who prefers Middle and Long races, so giving her Stamina and Power is helpful. Add a high amount of Speed into the mix, and you'll be able to get through your races easily."
    },
    mb: {
      name: "Mihono Bourbon (MB-19890425)",
      distance: "Middle",
      style: "Front-runner",
      stats: { Speed: 900, Stamina: 900, Power: 600, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536312",	  
      notes: "As a Middle race runner who prefers staying in the Front, Mihono Bourbon performs well with high Speed and Stamina, as well as some Power for better acceleration and overtaking. It's also ideal to have a high enough wit to help activate skills and prevent the Rushed status that can affect her performance and the activation of her Unique Skill."
    },
    biwa: {
      name: "Biwa Hayahide (pf. Winning Equation...)",
      distance: "Middle/Long",
      style: "Pace Chaser",
      stats: { Speed: 1000, Stamina: 900, Power: 600, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/536325",	  
      notes: "As a Middle and Long racer with an aptitude for Pace Chaser, Biwa Hayahide will need as much Speed and Stamina as possible. Throw in some Power afterward, as she will need it to overtake those in front of her. Finally, make sure she has enough Wit so she can activate her Skills with ease."
    },
    mcqueen2: {
      name: "Mejiro McQueen (End of the Skies)",
      distance: "Middle/Long",
      style: "Pace Chaser",
      stats: { Speed: 1000, Stamina: 900, Power: 700, Wisdom: 300, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/537151",	  
      notes: "Similar to the original version, this version of Mejiro McQueen is still a Long and Middle racer, so Stamina is still a must. Other than Stamina, you must also increase her Speed and Power, so that she has an easier time overtaking her opponents. Stamina and Power should be relatively easy to level at the same time thanks to her +10% growth buff on both stats. This growth buff also applies to her Wit, so increase that when able."
    },
    tokai2: {
      name: "Tokai Teio (Beyond the Horizon)",
      distance: "Middle",
      style: "Late-Surger",
      stats: { Speed: 900, Stamina: 800, Power: 600, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/537150",	  
      notes: "Similar to the original Tokai Teio, this version excels in Middle Races, so build Speed and Stamina to help her with her Pace Chaser style. Afterward, increase her Power and Guts to help her break out of groups, as well as to help her during the final spurt. Lastly, level her Wit to help with Skill activation."
    },
    curren: {
      name: "Curren Chan (Fille Éclair)",
      distance: "Sprint",
      style: "Pace Chaser",
      stats: { Speed: 1000, Stamina: 500, Power: 800, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/537177",	  
      notes: "As a Sprinter, Curren Chan thrives in having high Speed and Power, as Sprinters don't need a lot of Stamina. This is especially true for Curren Chan, as she prefers being a Pace Chaser. Prioritize getting her Speed high, followed by Power. You can then give her some Stamina so she does not fall behind."
    },
    narita: {
      name: "Narita Taishin (Nevertheless)",
      distance: "Middle/Long",
      style: "End Closer",
      stats: { Speed: 900, Stamina: 800, Power: 700, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/541215",	  
      notes: "Since Narita Taishin excels in being an End Closer in Middle to Long races, she will need Speed and Power to easily overtake her opponents and reach the front from behind. Give her Stamina as well, as she will primarily be running Long races in her career. Finally, get Wit for skill activation, as well as some Guts."
    },
    smart: {
      name: "Smart Falcon (LOVE☆4EVER)",
      distance: "Mile/Middle",
      style: "Front-runner",
      stats: { Speed: 900, Stamina: 700, Power: 700, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "https://game8.co/games/Umamusume-Pretty-Derby/archives/541253",	  
      notes: "As a Mile and Middle racer who prefers to be a Front Runner, Smart Falcon will need Speed and Power, so prioritize getting those. Follow this up with Stamina, as having good Stamina means she can run at max speed for longer. Afterward, level her Guts and Wit, with a focus on Wit to prevent Rushed."
    },
    vodka: {
      name: "Vodka (Wild Top Gear)",
      distance: "Mile/Middle",
      style: "Late-Surger",
      stats: { Speed: 900, Stamina: 700, Power: 600, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "As a Late Surger in Middle and Mile Races, Vodka does well when she has high Speed and Power that can let her easily overtake her opponents. High Wit also helps with skill activation and maneuvering. She will still need Stamina to help her get through races, so increase it as well."
    },
    daiwa: {
      name: "Daiwa Scarlet (Peak Blue)",
      distance: "Mile/Middle",
      style: "Pace Chaser",
      stats: { Speed: 1000, Stamina: 800, Power: 700, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Whether as a Front Runner or a Pace Chaser in Mile and Middle races, Daiwa Scarlet will benefit from high Stamina and Power. Give her high Speed as well, and she can easily take out the competition. Focus on Stamina if you want her to be a Front Runner, and give her more Power if you want her to be a Pace Chaser."
    },
    grass: {
      name: "Grass Wonder (Stone-Piercing Blue)",
      distance: "Mile/Long",
      style: "Late-Surger",
      stats: { Speed: 900, Stamina: 800, Power: 600, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "As Grass Wonder excels in Mile and Long races, with a specialty in being a Pace Chaser or Late Surger, it is recommended that you increase her Speed and Power to allow her to easily accelerate and overtake opponents. Increase her Stamina and Wit as well when possible."
    },
    el: {
      name: "El Condor Pasa (El Numero 1)",
      distance: "Mile/Middle",
      style: "Pace Chaser",
      stats: { Speed: 900, Stamina: 800, Power: 700, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Focus on El Condor Pasa's Speed and Power so that she can easily overtake her opponents as a Pace Chaser or Late Surger. Additionally, increase her Stamina so that she can consistently activate her Unique Skill. Afterward, level her Wit to help with Skill activation, before finally leveling her Guts."
    },
    air: {
      name: "Air Groove (Empress Road)",
      distance: "Middle",
      style: "Late-Surger",
      stats: { Speed: 1000, Stamina: 800, Power: 600, Wisdom: 300, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "As a Middle racer who prefers being a Pace Chaser or Late Surger, Air Groove's Speed and Stamina are a priority. Afterward, increase her Power to help her in overtaing in the later part of the race. Finally, increase her Wit to help with Skill activation."
    },
    topgun: {
      name: "Mayano Top Gun (Scramble Zone)",
      distance: "Middle/Long",
      style: "Pace Chaser",
      stats: { Speed: 900, Stamina: 900, Power: 700, Wisdom: 400, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Increase Mayano Top Gun's Stamina and Speed as she prefers Middle and Long races. Follow this up with Power so that she can easily accelerate and keep her position while racing. Level her Guts and Wit afterward when able."
    },
    creek: {
      name: "Super Creek (Murmuring Stream)",
      distance: "Middle/Long",
      style: "Pace Chaser",
      stats: { Speed: 900, Stamina: 900, Power: 700, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Super Creek is a Pace Chaser in Middle to Long races, so having high Speed and Stamina is needed. Increase her Power as well to help with her overtaking and acceleration in the late race."
    },
    agnes: {
      name: "Agnes Tachyon (Tach-nology)",
      distance: "Middle",
      style: "Pace Chaser",
      stats: { Speed: 900, Stamina: 800, Power: 600, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Agnes Tachyon is all about conserving strength as a Pace Chaser in Middle races. As such, having decent Stamina is a must. Partner this with high Speed and high Power, and you will be able to outrun your opponents."
    },
    winning: {
      name: "Winning Ticket (Get to Winning!)",
      distance: "Middle",
      style: "Late-Surger",
      stats: { Speed: 900, Stamina: 800, Power: 700, Wisdom: 300, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Winning Ticket is a Late Surger for Middle (and sometimes Long) races. As such, increasing her Speed and Power is important to help her overtake her opponents. Train her Stamina as well so that she can easily stay in the race, especially in Long ones."
    },
    bakushin: {
      name: "Sakura Bakushin O (Blossom in Learning)",
      distance: "Mile/Middle",
      style: "Front-runner",
      stats: { Speed: 1000, Stamina: 500, Power: 600, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Sakura Bakushin O is all about Speed. Since she prefers Sprints, with a Front Runner and Pace Chaser focus, increase her Speed as much as you can, as well as her Power to help her accelerate faster. Increasing her Stamina is not as important, but can help with the occasional Mile and Middle races."
    },
    matik: {
      name: "Matikane Fukukitaru (Rising Fortune)",
      distance: "Middle/Long",
      style: "Late-Surger",
      stats: { Speed: 900, Stamina: 900, Power: 700, Wisdom: 300, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Matikane Fukukitaru is a Middle and Long racer, with a Late Surger aptitude. As such, having high Stamina and Speed is a must to help her keep up. Having decent Power is also important to help her accelerate and overtake her opponents in the late race."
    },
    nature: {
      name: "Nice Nature (Poinsettia Ribbon)",
      distance: "Middle/Long",
      style: "Late-Surger",
      stats: { Speed: 900, Stamina: 800, Power: 700, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Nice Nature is a Late Surger in Middle to Long races, so increasing her Speed and Power is a must to help her get to the front in the late race. Increase her Stamina as well to help her get through Long races with ease."
    },
    halo: {
      name: "King Halo (King of Emeralds)",
      distance: "Sprint",
      style: "Late-Surger",
      stats: { Speed: 1000, Stamina: 500, Power: 700, Wisdom: 400, Guts: 400 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "King Halo is a Late Surger in Sprint races, so improve her Speed and Power as much as you can. Since she prefers Sprints, Stamina is not much of a priority, but it is still good to have."
    },
    ryan: {
      name: "Mejiro Ryan (Down the Line)",
      distance: "Middle",
      style: "Late-Surger",
      stats: { Speed: 900, Stamina: 800, Power: 700, Wisdom: 300, Guts: 300 },
	  support: { support1: "", support2: "", support3: "", support4: "", support5: "", support6: "" },
	  link: "#",	  
      notes: "Mejiro Ryan prefers being a Pace Chaser or Late Surger in Middle races, so make sure she has high Speed and Power to help in the late race. Increase her Stamina as well, so she can stay at max speed for longer."
    }




  };
