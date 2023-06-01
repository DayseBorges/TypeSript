
export type ButtonProps = { className: string; };

export const Button = (props: ButtonProps) => {
    return (
        <button className={props.className}></button>
    )
}

export const Parent = () => {
    return (
        <>
        {/* @ts-expect-error */}
            <Button></Button>
            <Button className="my-class"></Button>
        </>
    );
};

