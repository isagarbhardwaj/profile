import profile from '../images/profile-image.webp';
const Main = () => {
    return (
        <>
            <div className="container">
                <div className="outer-container m-5 bg-white rounded">
                    <div className="row p-4">
                        <div className="col-7">
                            <img src={profile} alt="" style={{'width': '-webkit-fill-available', boxShadow: '10px 10px 4px #ededed'}} className='rounded'/>
                        </div>
                        <div className="col-5 p-5">
                            <p>Hello Everybody, I am</p>
                            <h1>Sagar <br/>Bhardwaj</h1>
                            <p>Fullstack Magento Developer</p>
                            <div className="info border bg-dark text-light">
                                <p>
                                    I am a Web Developer with 4+ years of experience in web development.
                                    Here are few facts about me, according to which you will make the right choice:
                                    <br />• I'm a hard worker, responsible and self-motivated, who is always looking for new innovative ideas to bring to a project.
                                    <br />• I write clean, scalable and well-commented code as it helps other developers to easily understand all the code written by me.
                                    <br />• Develop web applications using industry-accepted standards.
                                    <br />• Writing reusable and structured code strictly following best coding practices using design patterns like SPA(Single Page Applications) and MVC(Model View Controller).
                                    <br />• Focus on doing less but excellent work which client love to see and proud of.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;