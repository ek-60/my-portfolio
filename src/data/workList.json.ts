export interface Work {
  url: string;
  description: string;
  title: string;
};
const hoyry: Work = {
  url: "https://www.svgdoodles.com/",
  time: "May 2023 -",
  company: "at Digi- ja mainostoimisto Höyry",
  title: "Technical Services Advisor at Digi- ja mainostoimisto Höyry"
};
const migri: Work = {
  url: "https://www.svggradients.com/",
  time: "Jun 2022 - Aug 2022",
  company: "at Finnish Immigration Service",
  title: "Information and Communication Technology Trainee"
};
const fennopoint: Work = {
  url: "https://www.figma.com/community/plugin/1074647052897925336",
  time: "Mar 2019 - Aug 2020",
  company: "at Fennopoint Oy",
  title: "B2B sales"
};

export const byName = {
  hoyry,
  migri,
  fennopoint
};
export const workList = Object.values(byName);
