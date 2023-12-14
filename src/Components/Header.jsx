import profile from '../assets/images/profile.png';
const Header = () => {
    return (
        <header className='flex justify-between itmes-center p-4 mx-4 border-b -2'>
            <h1 className="text-4xl font-bold">Knowledg - Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;