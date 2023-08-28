export interface WorkList {
  url: string;
  description: string;
  title: string;
};
const hoyry: WorkList = {
  url: "https://www.svgdoodles.com/",
  description: " A free collection of 208 super duper SVG Doodles to spice up your online and offline designs!",
  title: "Technical Services Advisor at Digi- ja mainostoimisto Höyry"
};
const migri: WorkList = {
  url: "https://www.svggradients.com/",
  description: " A free collection of SVG Mesh gradients to use in your design tool or HTML!",
  title: "Information and Communication Technology Trainee at Finnish Immigration Service"
};
const fennopoint: WorkList = {
  url: "https://www.figma.com/community/plugin/1074647052897925336",
  description: " This amazing plugin lets you create empty pages and dividers, no matter what subscription.",
  title: "B2B sales at Fennopoint Oy"
};

export const byName = {
  hoyry,
  migri,
  fennopoint
};
export const workList = Object.values(byName);
