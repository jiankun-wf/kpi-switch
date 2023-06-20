import { CSSProperties } from "vue";
export interface Cloud {
  height: string;
  width: string;
  top: string;
  right: string;
  rotate: string;
  zIndex?: number;
  style?: CSSProperties;
  darkStyle?: CSSProperties;
}

export const WhiteClouds: Cloud[] = [
  {
    width: "50%",
    height: "90%",
    top: "95%",
    right: "58%",
    rotate: "90deg",
    zIndex: 6,
  },
  {
    width: "30%",
    height: "100%",
    top: "78%",
    right: "42%",
    rotate: "0",
    zIndex: 9,
  },
  {
    width: "15%",
    height: "100%",
    top: "80%",
    right: "35%",
    rotate: "0",
    zIndex: 8,
  },
  {
    width: "25%",
    height: "75%",
    top: "75%",
    right: "15%",
    rotate: "0",
    zIndex: 7,
  },
  {
    width: "60%",
    height: "100%",
    top: "60%",
    right: "-35%",
    rotate: "30deg",
    zIndex: 6,
  },
  {
    width: "70%",
    height: "100%",
    top: "30%",
    right: "-55%",
    rotate: "30deg",
    zIndex: 6,
  },
];

export const BlueClouds: Cloud[] = [
  {
    width: "60%",
    height: "100%",
    top: "85%",
    right: "50%",
    rotate: "90deg",
    zIndex: 5,
  },
  {
    width: "60%",
    height: "80%",
    top: "90%",
    right: "15%",
    rotate: "60deg",
    zIndex: 5,
  },
  {
    width: "20%",
    height: "50%",
    top: "60%",
    right: "30%",
    rotate: "60deg",
    zIndex: 5,
  },
  {
    width: "50%",
    height: "90%",
    top: "50%",
    right: "-5%",
    rotate: "60deg",
    zIndex: 5,
  },
  {
    width: "30%",
    height: "60%",
    top: "30%",
    right: "-5%",
    rotate: "40deg",
    zIndex: 5,
  },
  {
    width: "50%",
    height: "100%",
    top: "-9%",
    right: "-35%",
    rotate: "30deg",
    zIndex: 5,
  },
];

export const Mistys: Pick<Cloud, "width" | "zIndex" | "style" | "darkStyle">[] =
  [
    {
      width: "55%",
      zIndex: 4,
      style: {
        "--misty-color": "#689dca",
        "--border-radius":
          "calc(var(--wrapper-radius) / 2) var(--wrapper-radius) var(--wrapper-radius) calc(var(--wrapper-radius) / 2)",
        "--left": "0",
      },
      darkStyle: {
        "--misty-color": "#50545e",
        "--border-radius":
          "var(--wrapper-radius) calc(var(--wrapper-radius) / 2) calc(var(--wrapper-radius) / 2) var(--wrapper-radius)",
        "--left": "45%",
      },
    },
    {
      width: "70%",
      zIndex: 3,
      style: {
        "--misty-color": "#5992c2",
        "--border-radius":
          "var(--wrapper-radius) calc(var(--wrapper-radius) - 20px) calc(var(--wrapper-radius) - 20px) var(--wrapper-radius)",
        "--left": "0",
      },
      darkStyle: {
        "--misty-color": "#404350",
        "--border-radius":
          "calc(var(--wrapper-radius) - 20px) var(--wrapper-radius) var(--wrapper-radius) calc(var(--wrapper-radius) - 20px)",
        "--left": "30%",
      },
    },
    {
      width: "85%",
      zIndex: 2,
      style: {
        "--misty-color": "#4c86bd",
        "--border-radius":
          "var(--wrapper-radius) calc(var(--wrapper-radius) - 20px) calc(var(--wrapper-radius) - 20px) var(--wrapper-radius)",
        "--left": "0",
      },
      darkStyle: {
        "--misty-color": "#2d333d",
        "--border-radius":
          "calc(var(--wrapper-radius) - 20px) var(--wrapper-radius) var(--wrapper-radius) calc(var(--wrapper-radius) - 20px)",
        "--left": "15%",
      },
    },
  ];

export const CountingStars: Array<
  Pick<Cloud, "style" | "darkStyle"> & {
    staticStyle: CSSProperties;
  }
> = [
  {
    darkStyle: {
      "--star-delay": "var(--transition-500)",
    },
    staticStyle: {
      "--star-size": "3rem",
      "--star-right": "82%",
      "--star-top": "20%",
      zIndex: 9,
    },
    style: {
      "--star-delay": "100ms",
    },
  },
  {
    darkStyle: {
      "--star-delay": "var(--transition-600)",
    },
    staticStyle: {
      "--star-size": "1.5rem",
      "--star-right": "78%",
      "--star-top": "12%",
      zIndex: 9,
    },
    style: {
      "--star-delay": "160ms",
    },
  },
  {
    darkStyle: {
      "--star-delay": "var(--transition-700)",
    },
    staticStyle: {
      "--star-size": "3rem",
      "--star-right": "74%",
      "--star-top": "35%",
      zIndex: 9,
    },
    style: {
      "--star-delay": "200ms",
    },
  },

  {
    darkStyle: {
      "--star-delay": "var(--transition-800)",
    },
    staticStyle: {
      "--star-size": "2.5rem",
      "--star-right": "65%",
      "--star-top": "16%",
      zIndex: 9,
    },
    style: {
      "--star-delay": "250ms",
    },
  },

  {
    darkStyle: {
      "--star-delay": "var(--transition-900)",
    },
    staticStyle: {
      "--star-size": "2rem",
      "--star-right": "62%",
      "--star-top": "50%",
      zIndex: 9,
    },
    style: {
      "--star-delay": "300ms",
    },
  },

  {
    darkStyle: {
      "--star-delay": "var(--transition-1000)",
    },
    staticStyle: {
      "--star-size": "2rem",
      "--star-right": "53%",
      "--star-top": "27%",
      zIndex: 9,
    },
    style: {
      "--star-delay": "340ms",
    },
  },
  {
    darkStyle: {
      "--star-delay": "var(--transition-1100)",
    },
    staticStyle: {
      "--star-size": "2.2rem",
      "--star-right": "45%",
      "--star-top": "9%",
      zIndex: 9,
    },
    style: {
      "--star-delay": "380ms",
    },
  },
];
