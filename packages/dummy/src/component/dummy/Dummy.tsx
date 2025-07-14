export type DummyProps = {
  dummyText: string;
};

export function Dummy({ dummyText }: DummyProps) {
  return <div className={"ms-dummy"}>{`Your dummy text ${dummyText}`}</div>;
}
