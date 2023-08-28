export interface Projects {
  url: string;
  description: string;
  title: string;
};
const svgdoodles: Projects = {
  url: "https://www.svgdoodles.com/",
  description: " A free collection of 208 super duper SVG Doodles to spice up your online and offline designs!",
  title: "SVG Doodles"
};
const svggradients: Projects = {
  url: "https://www.svggradients.com/",
  description: " A free collection of SVG Mesh gradients to use in your design tool or HTML!",
  title: "SVG Gradients"
};
const quicksetup: Projects = {
  url: "https://www.figma.com/community/plugin/1074647052897925336",
  description: " This amazing plugin lets you create empty pages and dividers, no matter what subscription.",
  title: "Quick Setup"
};
const vscodethemes: Projects = {
  url: "https://marketplace.visualstudio.com/publishers/wicked-labs",
  description: " A collection of 7 VS Code themes",
  title: "VS Code Themes"
};
const flabbergasted: Projects = {
  url: "https://marketplace.visualstudio.com/publishers/wicked-labs",
  description: "My newsletter about tech news and articles, tools and tips for UI Designers & Developers.",
  title: "Flabbergasted"
};
export const byName = {
  svgdoodles,
  svggradients,
    quicksetup,
    vscodethemes,
  flabbergasted

};
export const projects = Object.values(byName);
