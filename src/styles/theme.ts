import { css } from "styled-components";

const theme = {
  color: {
    gray: {
      white: "#FAFAFA",
      G100: "#F4F4F4",
      G200: "#EBEBEB",
      G300: "#DFDFDF",
      G400: "#AEAEAE",
      G500: "#888888",
      G600: "#666666",
      G700: "#333333",
      black: "#222222",
    },
    primary: {
      OR500: "#FA6E3D",
    },
    system: {
      R300: "#F47A6F",
      R400: "#EE4141",
    },
    other: {
      yellow: "#FAE100",
      green: "#03C75A",
    },
  },
  text: {
    display_1: css`
      font-size: 52px;
      font-weight: 800;
      line-height: 76px;
    `,
    display_2: css`
      font-size: 48px;
      font-weight: 800;
      line-height: 68px;
    `,
    display_3: css`
      font-size: 48px;
      font-weight: 400;
      line-height: 68px;
    `,
    display_4: css`
      font-size: 40px;
      font-weight: 700;
      line-height: 52px;
    `,
    display_5: css`
      font-size: 32px;
      font-weight: 700;
      line-height: 46px;
    `,
    display_6: css`
      font-size: 26px;
      font-weight: 400;
      line-height: 40px;
    `,
    heading_1: css`
      font-size: 26px;
      font-weight: 800;
      line-height: 40px;
    `,
    heading_2: css`
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
    `,
    heading_3: css`
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
    `,
    heading_4: css`
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    `,
    heading_5: css`
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
    `,
    body_1: css`
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    `,
    body_2: css`
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    `,
    caption_1: css`
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    `,
    caption_2: css`
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    `,
  },
};

export default theme;
