import avatar from './../avatar.png';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img className='hat'
                     src='https://rendering.ru/media/catalog/product/cache/f1902fe734325d9088b4c1a61712c9d5/i/t/itrees-palms-03.jpg'/>
            </div>
            <div className='personal-information'>
                <img className='avatar'
                     src={avatar}/>
                <div>
                    <p>NasMas</p>
                    <p>Date of Birth: 4 March</p>
                    <p>City: Samara</p>
                    <p>Education: SSAU'17</p>
                    <p>Web Site: https://github.com/M-Anastasia</p>
                </div>
            </div>
            <div>
                My posts
            </div>
            <div>
                <textarea placeholder='Your news ...'></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
            <div>
                all posts
            </div>
        </div>
    )
};

export default Profile;