export interface WorkList {
  url: string;
  description: string;
  title: string;
};
const svgdoodles: WorkList = {
  url: "https://www.svgdoodles.com/",
  description: " A free collection of 208 super duper SVG Doodles to spice up your online and offline designs!",
  title: "SVG Doodles"
};
const svggradients: WorkList = {
  url: "https://www.svggradients.com/",
  description: " A free collection of SVG Mesh gradients to use in your design tool or HTML!",
  title: "SVG Gradients"
};
const quicksetup: WorkList = {
  url: "https://www.figma.com/community/plugin/1074647052897925336",
  description: " This amazing plugin lets you create empty pages and dividers, no matter what subscription.",
  title: "Quick Setup"
};

export const byName = {
  svgdoodles,
  svggradients,
    quicksetup,
    vscodethemes,
  flabbergasted

};
export const workList = Object.values(byName);
