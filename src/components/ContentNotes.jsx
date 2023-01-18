export const ContentNotes = ({children}) => {
    const noteStyle = {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "start", 
        flexFlow: "row wrap", 
        gap: "1em"
    };

    return (
        <div style={noteStyle}>
            {children}
        </div>
    );
}