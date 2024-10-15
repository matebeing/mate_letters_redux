import Avatar from '../../assets/avatar.jpg'
const AboutCard = () => {
    return (
        <section className="flex flex-col items-center gap-5 mt-20 rounded-xl bg-lime-100 p-5"  aria-label="about">
            <img src={Avatar} alt="avatar"  className='rounded-full w-20 h-20'/>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In reiciendis veniam laboriosam vero reprehenderit eaque doloremque natus dignissimos tempore sapiente eligendi, quisquam rerum at illum temporibus. Tenetur recusandae distinctio incidunt</p>
        </section>
    )
}

export default AboutCard;