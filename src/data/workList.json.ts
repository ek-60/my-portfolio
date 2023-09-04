export interface Work {
  url: string;
  description: string;
  title: string;
};
const hoyry: Work = {
  time: "May 2023 -",
  company: "Digi- ja mainostoimisto Höyry",
  title: "Technical Services Advisor at",
  num: "01."
};
const migri: Work = {
  time: "Jun 2022 - Aug 2022",
  company: "Finnish Immigration Service",
  title: "Information and Communication Technology Trainee at",
  num: "02."
};
const fennopoint: Work = {
  time: "Mar 2019 - Aug 2020",
  company: "Fennopoint Oy",
  title: "B2B sales at",
  num: "03."
};

export const byName = {
  hoyry,
  migri,
  fennopoint
};
export const workList = Object.values(byName);
