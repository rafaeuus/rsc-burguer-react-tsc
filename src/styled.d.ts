import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      primary50: string;
      secondary: string;
      grey600: string;
      grey300: string;
      grey200: string;
      grey100: string;
      grey50: string;
      grey0: string;
      negative: string;
      warning: string;
      success: string;
      information: string;
    };
    fontSize: {
      heading1: string;
      heading2: string;
      heading3: string;
      headline: string;
      body: string;
      caption: string;
    };
    fontWeight: {
      bold: string;
      regular: string;
      semiBold: string;
    };
  }
}
