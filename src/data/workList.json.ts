export interface Work {
  url: string;
  description: string;
  title: string;
};
const hoyry: Work = {
  url: "https://www.svgdoodles.com/",
  time: "May 2023 -",
  description: " A free collection of 208 super duper SVG Doodles to spice up your online and offline designs!",
  title: "Technical Services Advisor at Digi- ja mainostoimisto Höyry"
};
const migri: Work = {
  url: "https://www.svggradients.com/",
  time: "Jun 2022 - Aug 2022",
  description: " A free collection of SVG Mesh gradients to use in your design tool or HTML!",
  title: "Information and Communication Technology Trainee at Finnish Immigration Service"
};
const fennopoint: Work = {
  url: "https://www.figma.com/community/plugin/1074647052897925336",
  time: "Mar 2019 - Aug 2020",
  description: " This amazing plugin lets you create empty pages and dividers, no matter what subscription.",
  title: "B2B sales at Fennopoint Oy"
};

export const byName = {
  hoyry,
  migri,
  fennopoint
};
export const workList = Object.values(byName);
