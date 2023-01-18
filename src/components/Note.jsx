export const Note = ({ note: { title, description, logo, color, link } }) => {
    const noteStyle = {
        background: "#2f2f2f",
        width: "200px",
        minHeight: "250px",
        padding: "0.5em",
        borderRadius: "5px",
    };

    const titleStyle = { color };

    const imgStyle = {
        width: "50px",
        marginTop: "1em",
    };

    return (
        <div style={noteStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <pre style={{whiteSpace: "normal",  padding: "5px"}}>{description}</pre>
            {logo && <a href={link} target="_blank"><img src={logo} alt="logo" style={imgStyle} /></a> }
        </div>
    )
}
