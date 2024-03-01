import profilePic from './assets/sixer.jpg'

function Card() {
    return (
        <div className="card">
            {/* <img src="https://via.placeholder.com/150" alt="profile picture" /> */}
            <img src={profilePic} alt="profile picture" />
            <h2>Sixer</h2>
            <p>Personal introduction here.</p>
        </div>
    );

}
export default Card