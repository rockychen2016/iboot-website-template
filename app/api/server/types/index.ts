import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const ACCOUNT_TYPE = {
  GENERAL : 0,
  PHONE : 1,
  EMAIL : 2
} as const

export const USER_TYPE={
  TYPE_MGT : 0,
  TYPE_C : 1,
  TYPE_B : 2
} as const;

export const USER_FORM = {
  FROM_WEB : 1,
  FROM_PC : 2,
  FROM_WX_MINI_PRO : 3,
  FROM_WX_PLU : 4,
  FROM_WX_E : 5,
  FROM_APP : 6,
  FROM_DEVICE : 7
} as const

export const USER_SEX ={
  unknown:0,
  male:1,
  female:2,
} as const

export type ACCOUNT_TYPE = typeof ACCOUNT_TYPE[keyof typeof ACCOUNT_TYPE];
export type USER_TYPE = typeof USER_TYPE[keyof typeof USER_TYPE];
export type USER_FORM = typeof USER_FORM[keyof typeof USER_FORM];
export type USER_SEX = typeof USER_SEX[keyof typeof USER_SEX];