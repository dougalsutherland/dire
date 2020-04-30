const sidesByKind = {
  none: 0,
  dictator: 4,
  d6: 6,
  bad: 6,
  fallen: 0,
  fool: 6,
  knight: 8,
  neo: 10,
  godbinder: 12,
  master: 20
};

const classNames = {
  dictator: "the Dictator",
  fool: "the Fool",
  fallen: "a Fallen",
  knight: "the Emotion Knight",
  neo: "the Neo",
  godbinder: "the Godbinder",
  master: "the Master"
};

const foolEffects11 = {
  X: "Disarm a foe",
  O: "Knock a foe over; they lose all guard",
  V: "Inspire all allies to get advantage next round",
};

const dicePaths = {
  dictator: {
    fill: "M232.7,87.3L69.3,370.2c-7.7,13.3,1.9,30,17.3,30h326.7c15.4,0,25-16.7,17.3-30L267.3,87.3 C259.6,73.9,240.4,73.9,232.7,87.3z",
    stroke: "M413.4,406.2H86.6c-9.4,0-17.8-4.9-22.5-13c-4.7-8.1-4.7-17.9,0-26L227.5,84.3c4.7-8.1,13.1-13,22.5-13 c9.4,0,17.8,4.9,22.5,13l163.4,282.9c4.7,8.1,4.7,17.9,0,26C431.2,401.3,422.8,406.2,413.4,406.2z M250,83.3c-5.1,0-9.6,2.6-12.1,7 L74.5,373.2c-2.5,4.4-2.5,9.6,0,14c2.5,4.4,7.1,7,12.1,7h326.7c5.1,0,9.6-2.6,12.1-7c2.5-4.4,2.5-9.6,0-14L262.1,90.3 C259.6,85.9,255.1,83.3,250,83.3z",
    text: 0.58
  },
  fool: {
    fill: "M385,415H115c-16.6,0-30-13.4-30-30V115c0-16.6,13.4-30,30-30h270c16.6,0,30,13.4,30,30v270 C415,401.6,401.6,415,385,415z",
    stroke: "M385,421H115c-19.9,0-36-16.1-36-36V115c0-19.9,16.1-36,36-36h270c19.9,0,36,16.1,36,36v270C421,404.9,404.9,421,385,421z M115,91c-13.2,0-24,10.8-24,24v270c0,13.2,10.8,24,24,24h270c13.2,0,24-10.8,24-24V115c0-13.2-10.8-24-24-24H115z",
    text: 0.54,
  },
  knight: {
    fill: "M94.8,356.9L235,437.9c9.3,5.4,20.7,5.4,30,0l140.2-80.9c9.3-5.4,15-15.3,15-26V169.1c0-10.7-5.7-20.6-15-26 L265,62.1c-9.3-5.4-20.7-5.4-30,0L94.8,143.1c-9.3,5.4-15,15.3-15,26v161.9C79.8,341.7,85.5,351.6,94.8,356.9z",
    stroke: "M408.2,137.9L268,56.9c-11.1-6.4-24.9-6.4-36,0L91.8,137.9c-11.1,6.4-18,18.4-18,31.2v161.9c0,12.8,6.9,24.8,18,31.2h0 L232,443.1c5.6,3.2,11.8,4.8,18,4.8c6.2,0,12.4-1.6,18-4.8l140.2-80.9c11.1-6.4,18-18.4,18-31.2V169.1 C426.2,156.2,419.3,144.3,408.2,137.9z M402.2,148.3c7.4,4.3,12,12.2,12,20.8v161.9c0,1.1-0.1,2.2-0.2,3.3L259.1,65.9 c1,0.4,1.9,0.9,2.9,1.4L402.2,148.3z M90.8,341.9L250,66.1l159.1,275.8L90.8,341.9z M85.8,169.1c0-8.5,4.6-16.5,12-20.8L238,67.3 c0.9-0.5,1.9-1,2.9-1.4L86,334.2c-0.1-1.1-0.2-2.1-0.2-3.2V169.1z M262,432.7c-7.4,4.3-16.6,4.3-24,0L97.8,351.7h0 c-0.9-0.5-1.8-1.1-2.7-1.8l309.8-0.1c-0.9,0.7-1.8,1.3-2.7,1.8L262,432.7z",
    text: 0.52,
  },
  neo: {
    fill: "M408.4,197.7L270.3,71.3c-11.5-10.5-29-10.5-40.5,0L91.6,197.7c-6.2,5.7-9.7,13.7-9.7,22.1v60.3 c0,8.4,3.5,16.4,9.7,22.1l138.1,126.4c11.5,10.5,29,10.5,40.5,0l138.1-126.4c6.2-5.7,9.7-13.7,9.7-22.1v-60.3 C418.1,211.4,414.6,203.4,408.4,197.7z",
    stroke: "M412.4,193.3L274.3,66.9c-13.9-12.7-34.8-12.7-48.6,0L87.6,193.3c-7.4,6.8-11.7,16.5-11.7,26.6v60.3 c0,10.1,4.3,19.8,11.7,26.6l138.1,126.4c6.9,6.3,15.6,9.5,24.3,9.5c8.7,0,17.4-3.2,24.3-9.5l138.1-126.4 c7.4-6.8,11.7-16.5,11.7-26.6v-60.3C424.1,209.8,419.9,200.1,412.4,193.3z M87.9,280.2v-60.3c0-6.7,2.8-13.2,7.8-17.7L233.8,75.7 c2.6-2.4,5.7-4.1,8.8-5.1L201.9,167l0,0l-51.7,122.4H89.7C88.5,286.5,87.9,283.3,87.9,280.2z M246,430.3c-4.4-0.8-8.7-2.7-12.2-6 L95.7,297.9c-0.2-0.2-0.3-0.3-0.5-0.5h56.8l94.1,48.7V430.3z M158,291.5l92-217.8l92,217.8l-92,47.7L158,291.5z M404.3,297.9 L266.2,424.3c-3.6,3.3-7.8,5.2-12.2,6v-84.2l94.1-48.7h56.8C404.7,297.5,404.5,297.7,404.3,297.9z M412.1,280.2 c0,3.2-0.6,6.3-1.9,9.2h-60.5l-48.4-114.7l-44-104.1c3.2,1,6.2,2.7,8.8,5.1l138.1,126.4c5,4.5,7.8,11,7.8,17.7V280.2z",
    text: 0.52,
  },
  godbinder: {
    fill: "M442.7,177.7l-64.3-88.5c-3.7-5.1-9-8.9-15-10.9L259.3,44.4c-6-2-12.5-2-18.5,0L136.7,78.2 c-6,2-11.3,5.8-15,10.9l-64.3,88.5c-3.7,5.1-5.7,11.3-5.7,17.6v109.4c0,6.3,2,12.5,5.7,17.6l64.3,88.5c3.7,5.1,9,8.9,15,10.9 l104.1,33.8c6,2,12.5,2,18.5,0l104.1-33.8c6-2,11.3-5.8,15-10.9l64.3-88.5c3.7-5.1,5.7-11.3,5.7-17.6V195.3 C448.4,188.9,446.4,182.8,442.7,177.7z",
    stroke: "M447.5,174.1C447.5,174.1,447.5,174.1,447.5,174.1l-64.3-88.5c-4.5-6.2-10.7-10.7-18-13.1L261.1,38.7 c-7.3-2.4-15-2.4-22.2,0L134.8,72.5c-7.3,2.4-13.5,6.9-18,13.1l-64.3,88.5c-4.5,6.2-6.9,13.5-6.9,21.2v109.4c0,7.7,2.4,15,6.9,21.2 l64.3,88.5c4.5,6.2,10.7,10.7,18,13.1l104.1,33.8c3.6,1.2,7.4,1.8,11.1,1.8c3.7,0,7.5-0.6,11.1-1.8l104.1-33.8 c7.3-2.4,13.5-6.9,18-13.1l64.3-88.5c4.5-6.2,6.9-13.5,6.9-21.2V195.3C454.4,187.6,452,180.3,447.5,174.1z M361.5,83.9 c4.9,1.6,9,4.6,12,8.7l64.3,88.5c0.8,1,1.4,2.1,2,3.3l-65.1,21.1L254,117.9V49.3c1.1,0.2,2.3,0.5,3.4,0.8L361.5,83.9z M323.7,351.8 H176.3l-45.6-140.3l119.2-86.6c0,0,0.1,0,0.1,0s0.1,0,0.1,0l119.2,86.6L323.7,351.8z M126.5,92.6c3-4.1,7.1-7.1,12-8.7l104.1-33.8 c1.1-0.4,2.3-0.6,3.4-0.8v68.6l-120.7,87.7l-65.1-21.1c0.6-1.1,1.2-2.2,2-3.3L126.5,92.6z M62.2,318.8c-3-4.1-4.6-9-4.6-14.1V195.3 c0-1.1,0.1-2.1,0.2-3.2l65,21.1l46.1,141.9l-40,55c-0.9-0.9-1.7-1.8-2.4-2.8L62.2,318.8z M257.4,449.9c-4.9,1.6-10,1.6-14.8,0 l-104.1-33.8c-1.1-0.3-2.1-0.8-3.1-1.2l39.9-55h149.2l39.9,55c-1,0.5-2,0.9-3.1,1.2L257.4,449.9z M442.4,304.7 c0,5.1-1.6,10-4.6,14.1l-64.3,88.5c-0.7,1-1.5,2-2.4,2.8l-40-55l46.1-141.9l65-21.1c0.1,1,0.2,2.1,0.2,3.2V304.7z",
    text: 0.54,
  },
  master: {
    fill: "M426.2,331.5v-162c0-12.8-6.8-24.7-17.9-31.1L265,55.7c-9.3-5.4-20.7-5.4-30,0L91.8,138.4 c-11.1,6.4-17.9,18.3-17.9,31.1v162c0,12.8,6.8,24.7,17.9,31.1l140.3,81c11.1,6.4,24.8,6.4,35.9,0l140.3-81 C419.3,356.1,426.2,344.3,426.2,331.5z",
    stroke: "M411.6,132.5l-140.3-81c-2.4-1.4-5-2.5-7.6-3.4c-1.8-0.6-3.6-1.1-5.5-1.4c-6.9-1.6-14.3-1.2-21,1.4 c-1.3,0.4-2.6,0.9-3.9,1.5c-1.3,0.6-2.7,1.2-3.9,2l-140.3,81c-6.6,3.8-11.9,9.3-15.5,15.7c-3.7,6.4-5.8,13.7-5.8,21.3v162 c0,2.9,0.3,5.7,0.9,8.5c1.2,7.1,4.4,13.7,9.3,18.9c3,3.5,6.6,6.5,10.7,8.9l140.3,81c6.5,3.7,13.7,5.6,20.9,5.6 c7.2,0,14.5-1.9,20.9-5.6l140.3-81c1.8-1,3.5-2.2,5-3.4c10.1-6.6,16.3-18,16.3-30.1l0-165.4C432.6,153.9,424.5,140,411.6,132.5z M242.3,59c0.6-0.2,1.2-0.3,1.8-0.5c0.1,0,0.3-0.1,0.4-0.1l1.5-0.1v38.3L93,144.7c0.6-0.4,1.2-0.8,1.8-1.1L238,60.9 c1-0.6,2.1-1.1,3.1-1.5c0.3-0.1,0.5-0.2,0.8-0.3C242,59.1,242.1,59.1,242.3,59z M262,60.9l143.2,82.7c0.6,0.4,1.2,0.7,1.8,1.1 L254,96.8V58.4l2.7,0.2C258.5,59.2,260.3,59.9,262,60.9z M405.6,356.6l-140.3,81c-0.5,0.3-1,0.5-1.5,0.8c-0.1,0.1-0.2,0.1-0.3,0.2 l118-108.5l32.6,18.8l-1.6,2.3C410.5,353.3,408.2,355.2,405.6,356.6z M236.9,438.4c-0.5-0.3-1-0.5-1.5-0.8l-140.3-81 c-2.8-1.6-5.3-3.7-7.4-6.1l-1.1-1.7l32.6-18.8l118,108.5C237.2,438.5,237.1,438.5,236.9,438.4z M80.4,167l34.9,156.2l-32.8,18.9 c-1.5-3.5-2.3-7.4-2.3-11.3C80.2,330.8,80.3,181.7,80.4,167z M416.2,155l-36.4,160.3L257.9,105.7l158.2,49L416.2,155z M373.7,321 l-246.7,0L250,108L373.7,321z M121.1,315.4L84.5,154.4l157.6-48.8L121.1,315.4z M128.9,329l243,0L250.4,441.5L128.9,329z M420.1,168.2c0,0.4,0,0.8,0,1.2v162c0,3.3-0.5,6.4-1.5,9.4l-0.5,1.1l-32.6-18.8L420.1,168.2z",
    text: 0.52,
  }
};

exports.sidesByKind = sidesByKind;
exports.classNames = classNames;
exports.foolEffects11 = foolEffects11;
exports.dicePaths = dicePaths;

