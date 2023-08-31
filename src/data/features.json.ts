export interface Template {
  url: string;
  title: string;
};
const one: Template = {
  url: "https://github.com/ek-60",
  title: "GitHub"
};
const two: Template = {
  url: "https://www.linkedin.com/in/eemeli-kyr%C3%B6l%C3%A4-8b53731b7/",
  title: "LinkedIn"
};
const three: Template = {
  url: "mailto:eemeli.kyrola@gmail.com",
  title: "eemeli.kyrola@gmail.com"
};
const four: Template = {
  url: "tel:0400998515",
  title: "+358 400 998 515"
};

export const byName = {
one, two, three, four





};
export const features = Object.values(byName);
