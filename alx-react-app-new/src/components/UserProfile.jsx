function UserProfile (props) {
    return (
        <div style={{backgroundColor: 'green', border: '1px solid gray', padding: '10px', margin: 'center' }}>
            <h2 style={{color: 'blue',}}>{props.name}</h2>
            <p span style={{fontWeight: 'bold', fontSize: '20px', margin: '10px'}}>Age: {props.age}</p>
            <p span style={{fontWeight: 'bold', color: 'black', fontSize: '30px', margin: '10px'}}>Bio: {props.bio}</p>
        </div>
    );
}
export default UserProfile;