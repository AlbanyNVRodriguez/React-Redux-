export const ExampleContainer = ({children}) => {

    const exampleContainerStyle = {
        width: "80vw",
        height: "auto",
        borderRadius: "5px",
        display: "flex",
        flexFlow: "column nowrap",
        borderBottom: "white solid 2px",
        paddingBottom: "30px"
    };

    return (
        <div style={exampleContainerStyle}>
            {children}
        </div >
    )
}