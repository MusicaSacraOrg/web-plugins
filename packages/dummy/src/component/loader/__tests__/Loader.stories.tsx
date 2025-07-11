import { Loader } from "../Loader";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Loader> = {
  title: "components/Loader",
  component: Loader,
  args: {
    loading: true,
    type: "spinner",
    className: "",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NotHiddenLoader: Story = {
  args: {
    loading: true,
    children: <p>Text is hidden</p>,
  },
};

export const HiddenLoader: Story = {
  args: {
    loading: false,
    children: <p>Loader is hidden, and this text is shown.</p>,
  },
};
