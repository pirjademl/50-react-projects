import { Children, ReactNode, FC } from "react";
interface EachProps {
  render: (item: any, index: number) => ReactNode;
  of: any[];
}
export const Each: FC<EachProps> = ({ render, of }) =>
  Children.toArray(of.map((item, index) => render(item, index)));
