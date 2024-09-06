import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    hover: {
      options: ["yes", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    hover: "default",
    className: {},
  },
};
