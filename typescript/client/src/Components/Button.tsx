//Usando props:

// export type ButtonProps = { 
//     className: string; 
// };

// export const Button = (props: ButtonProps) => {
//     return (
//         <button className={props.className}></button>
//     )
// }

// export const Parent = () => {
//     return (
//         <>
//             <Button className="my-class"></Button>
//         </>
//     );
// };


// Props podem ser passadas de pai para filho
// Qual o tipo desse filho?
// Resposta: props: {children: React.ReactNode}

// export const Button = (props: {children: React.ReactNode}) => {
//     return <button>{props.children}</button>;
//   };
  
//   const Parent = () => {
//     return (
//       <>
//         {/* @ts-expect-error */}
//         <Button></Button>
//         <Button>Hello world!</Button>
//       </>
//     );
//   };


  // Tipando os Eventos 

interface ButtonProps {
    className: string;
    children: React.ReactNode;
    onClick: React.MouseEventHandler;
  }
  
  export const Button = ({ children, className, onClick }: ButtonProps) => {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  };
  