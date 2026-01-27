export type ItemProps = {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  link: string;
  source?: string;
  text: string;
};

export type PageListProps = {
  pageComment: string | React.ReactNode;
  title: string;
  content: ItemProps[];
};
