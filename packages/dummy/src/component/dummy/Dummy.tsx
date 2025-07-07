export type DummyProps = {
    dummyText: string;
};

export function Dummy({ dummyText }: DummyProps) {
    return <div>{dummyText}</div>;
}
