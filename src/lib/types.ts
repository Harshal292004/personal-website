enum EState {
  WARNINGS = "WARNINGS",
  ERROR = "ERROR",
  FACT = "FACT",
}

enum ELinkState {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

interface ITextProps {
  text: string;
  style: string;
  cursorStyle: string;
}

interface IHeaderLinks {
  href: string;
  label: string;
}

interface ITech {
  text: string;
  svg: any;
}

interface ILinks {
  url: string;
  state: ELinkState;
}

interface IProjectProps {
  title: string;
  description: string;
  tags: string[];
  github: ILinks;
  live_demo: ILinks;
  isRightAligned: boolean;
}
type TMemeCategory = "cat" | "code" | "error" | "linux" | "miscellaneous";

export { EState, ELinkState };

export type {
  ITextProps,
  ITech,
  ILinks,
  IProjectProps,
  TMemeCategory,
  IHeaderLinks,
};
